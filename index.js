var randomNumber = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomDiceImage = "Dice"+randomNumber+".png";
var randomSrc = "images/"+randomDiceImage;
document.querySelectorAll("img")[0].setAttribute("src",randomSrc);
var randomDiceImage2 = "Dice"+randomNumber2+".png";
var randomSrc2 = "images/"+randomDiceImage2;
document.querySelectorAll("img")[1].setAttribute("src",randomSrc2);

if (randomNumber==randomNumber2){
    document.querySelector("h1").innerHTML = "Draw";
}else if (randomNumber>randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 Win";
}else{
    document.querySelector("h1").innerHTML = "Player 2 Win 🚩";
}

