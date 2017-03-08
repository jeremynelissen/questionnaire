/*
Ask at least five questions

Keep track of the number of questions the user answered correctly

Provide a final message after the quiz letting the user know the number of questions he or she got right.

Rank the player. If the player answered all five correctly, give that player the gold crown: 3-4 is a silver crown; 1-2 correct answers is a bronze crown and 0 correct is no crown at all.
*/

window.alert("Welcome! Its time to take a small math quiz!");

var playerScore = 0; 
var playerRank = "No Crown";

// Question 1

var answerOne = window.prompt("What is 15 + 11? ");

if(parseInt(answerOne) === 26 || answerOne.toUpperCase() === "TWENTY SIX";){    
  alert("Correct! Next Question.");
  playerScore += 1; 
}else {
  alert("Sorry. 15 + 11 is 26");
}

// Question 2

var answerTwo = prompt("Can 33 be evenly divisble by 5?");

if(answerTwo.toUpperCase() === 'YES' || 'Y';){
  alert("Nice One! Next Question.");
  playerScore += 1;
}else{
  alert("Oops! 33 is not evenly divisible by 5.");
}

// Question 3

var answerThree = prompt("What is the next prime number after 5?");

if(parseInt(answerThree) === 7 || answerThree.toUpperCase() === "SEVEN"; ){
  alert("Easy! Next One!");
  playerScore += 1;
} else {
  alert("Sorry. It's actually 7!" )
}

// Question 4

var answerFour = prompt("What is the square root of 16?");

if(parseInt(answerFour) === 4 || answerFour.toUpperCase() === "FOUR"){
  alert("Great Job! 4 on question 4!!");
  playerScore += 1;
}

// Question 5

var answerFive = prompt("In the equation '4 x 5 - 1', which operation would you do first?");

if( answerFive.toUpperCase() === "X" || answerFive.toUpperCase() === "TIMES" || answerFive.toUpperCase() === "MULTIPLY"){
  alert("Correct! Now time for your score!");
  playerScore += 1;
}else{
  alert("Sorry. Now it's time to find out your final score!");
}

// Score to Ranking System
 
if ( playerScore === 5){
  playerRank === "Gold Crown"
} else if( playerScore === 4 || playerRank === 3){
  playerRank === "Silver Crown"
}else if( playerScore === 2 || playerRank === 1){
  playerRank === "Bronze Crown"
} else{
  playerRank === "No Crown"
}


// Final Message
alert('Congrats! Your final score was ' + playerScore + '. Earning you the prestigious award of ' + playerRank +');
