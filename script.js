var body = document.getElementById("bodyElement");
var counterVote = 0;
var displayVotes = document.getElementById("displayVotes");

function counterVotes() {
if (counterVote < 0) {
displayVotes.innerHTML = "😭😭😭😭 Votes dans le négatif 😭😭😭😭";
}
else if (counterVote === 0) {
displayVotes.innerHTML = "Pas de votes positifs pour le moment... Aidez-nous un peu 😁 !";
} 
else if (counterVote === 1) {
displayVotes.innerHTML = "Cela nous fait: " + counterVote + " vote positif!";
} 
else if (counterVote > 1) {
displayVotes.innerHTML = "Cela nous fait: " + counterVote + " votes positifs!!";
 									}
}

function checkInput() {
var answer = document.getElementById("userAnswer").value;
var answerReturns = document.getElementById("answerReturns");
if (answer === "") {
	answerReturns.innerHTML = '<p class="emptyAnswer"> Saisie incorrecte! Veuillez saisir votre nourriture préférée  🤤</p>';
 		 console.log("Yup, you fucked up.");
 	} 
 else if (answer === "Test") {
 		answerReturns.innerHTML = '<p class="testAnswer">' + "test running smoothly</p>";
  		console.log("test ok");
 	} 
  else if (answer !== "") {
 		answerReturns.innerHTML = '<p class="rightAnswer">' + " Cool, passons à la suite ! 😝";
 		console.log("All good !");
 	}
}


function likeButton() {
counterVote += 1;
console.log(counterVote);
counterVotes();
}

function dislikeButton() {
counterVote -= 1;
console.log(counterVote);
counterVotes();
}

