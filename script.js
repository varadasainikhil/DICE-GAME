var randomNumber1 = Math.floor(Math.random()*6)+1;
console.log(randomNumber1);
document.getElementById("diceImage1").setAttribute("src","images/dice"+randomNumber1+".png");

var randomNumber2 = Math.floor(Math.random()*6)+1;
console.log(randomNumber1);
document.getElementById("diceImage2").setAttribute("src","images/dice"+randomNumber2+".png");

if(randomNumber1>randomNumber2){
    document.getElementById("player1text").textContent="WINNER";
    document.getElementById("player2text").textContent="LOSER";
    document.getElementById("titleText").textContent="Player 1 WINS !!!!";
}else if(randomNumber1<randomNumber2){
    document.getElementById("player1text").textContent="LOSER";
    document.getElementById("player2text").textContent="WINNER";
    document.getElementById("titleText").textContent="Player 2 WINS !!!!";
}else{
    document.getElementById("player1text").textContent="WINNER";
    document.getElementById("player2text").textContent="WINNER";
    document.getElementById("titleText").textContent="IT'S   A   DRAW !!!!";
}