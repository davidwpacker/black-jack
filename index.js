let firstCard = 10;
let secondCard = 2;
let sum = firstCard + secondCard;
 
let hasBlackJack = false;  
let isAlive = true; // isAlive = still in the game
 
let message = "";
 
if (sum < 21) {
   message = "do you want to draw another card broski?";
} else if (sum === 21){
   message = "winner winner chicken dinner!"
   hasBlackJack = true;
} else  {                 
   isAlive = false;                         // // (sum > 21) omitted
   message = "you're OUT buddy! GO HOME.";
}
 
console.log(message);