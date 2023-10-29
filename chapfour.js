// Practice exercise 4.1
let ispicnictoday = false;
// 2. Output the value of the variable to the console.
console.log(ispicnictoday)
// 3. Check whether the variable is true and if so, output a message to the console, 
// // using the following syntax:
if (ispicnictoday) {
    //action
    console.log("hurray!!");
}
// 4. Add another if statement with an ! in front of the variable to check whether 
//     the condition is not true, and create a message that will be printed to the 
//     console in that instance. You should have two if statements, one with an 
//     ! and the other without. You could also use an if and an else statement 
//     instead—experiment!
if (!ispicnictoday) {
    //action
    console.log("we are not going");
}
// 5. Change the variable to the opposite to see how the result changes.  
ispicnictoday = true;
if (ispicnictoday) {
    //action
    console.log("hurray!!");
}
if (!ispicnictoday) {
    //action
    console.log("we are not going");
}

// Practice exercise 4.2
// 1. Create a prompt to ask the user's age
let age = prompt("enter your age");
// 2. Convert the response from the prompt to a number
let agenum = parseInt(age);
console.log(typeof (agenum))
// 3. Declare a message variable that you will use to hold the console message for 
// the user
let msg = "this message is for user";
console.log(msg)
// 4. If the input age is equal to or greater than 21, set the message variable to 
// confirm entry to a venue and the ability to purchase alcohol
if (age >= 21) {
    console.log("eligible,allowed to buy alcohol")
}
// 5. If the input age is equal to or greater than 19, set the message variable to 
// confirm entry to the venue but deny the purchase of alcohol
if (age >= 19) {
    console.log("eligible,but not allowed to buy alcohol")
}
// 6. Provide a default else statement to set the message variable to deny entry if 
// none are true
// 7. Output the response message variable to the console
else {
    console.log("not allowed!!!!")
}

// Practice exercise 4.3
// 1. Create a Boolean value for an ID variable
let isidavailable = true;
// 2. Using a ternary operator, create a message variable that will check whether 
// their ID is valid and either allow a person into a venue or not
let eligiblity = isidavailable ? "ID is available" : "ID not available";
// 3. Output the response to the console
console.log(eligiblity)

// Practice exercise 4.4
// random number between 0 and 1
let randomNumber = Math.random();
// multiply by 10 to obtain a number between 0 and 6
randomNumber = randomNumber * 6;
// removes digits past decimal place to provide a whole number
RandomNumber = Math.floor(randomNumber);
let addval = prompt("add a value")
console.log("user's entered value is" + addval)
switch (addval) {
    case 0:
        console.log("Congratulations! You've got the 1st response." + addval);
        break;
    case 1:
        console.log("Congratulations! You've got the 2nd response" + addval);
        break;
    case 2:
        console.log("Congratulations! You've got the 3rd response" + addval);
        break;
    case 3:
        console.log("Congratulations! You've got the 4th response" + addval);
        break;
    case 4:
        console.log("Congratulations! You've got the 5th response" + addval);
        break;
    case 5:
        console.log("Congratulations! You've got the 6th response" + addval);
        break;
    default:
        console.log("mismatched!!Try again");
}

// Practice exercise 4.5 
// 1. Create a variable called prize and use a prompt to ask the user to set the 
// value by selecting a number between 0 and 10

let prize = prompt("enter value between 0-10");
let prizenum = parseInt(prize);
switch (prizenum) {
    case 0:
        console.log("Congratulations! You won a brand new car!");
        break;
    case 1:
        console.log("You've won a tropical vacation for two!");
        break;
    case 2:
        console.log("You're the lucky winner of a lifetime supply of chocolate!");
        break;
    case 3:
        console.log("You've won a weekend getaway to a spa retreat!");
        break;
    case 4:
        console.log("Congratulations! You won a high-end smartphone!");
        break;
    case 5:
        console.log("You've won a year's supply of your favorite coffee!");
        break;
    case 6:
        console.log("You've won a luxury watch!");
        break;
    case 7:
        console.log("Congratulations! You won a shopping spree!");
        break;
    case 8:
        console.log("You're the lucky winner of a gaming console!");
        break;
    case 9:
        console.log("You've won a weekend trip to a theme park!");
        break;
    case 10:
        console.log("Congratulations! You won a big cash prize!");
        break;
    default:
        console.log("Sorry, no prize.");
}
if (prizenum >= 5) {
    console.log("congrats you have won another prize", prizenum);
}
else {
    console.log("try again")
}
// Chapter projects
// Evaluating a number game
let num = +prompt("enter any number");
if (num >= 7) {
    console.log("you have entered correct num")

}
else {
    console.log("incorrect try again")
}
// Friend checker game
let friendname = prompt("enter your any friends name");
switch (friendname) {
    case "zohra":
        console.log("i know her");
        break;
    case "yamna":
        console.log("i know her");
        break;
    case "faheema":
        console.log("i know her");
        break;
    case "iqra":
        console.log("i know her");
        break;
    default:
        console.log("she is unknown");
    
}

// Rock Paper Scissors game

let rpsgame=["rock","paper","scissor"];
let playerNumber = Math.random();
// multiply by 10 to obtain a number between 0 and 2
playerNumber = playerNumber * 2;
Plnumber = Math.floor(playerNumber);
// removes digits past decimal place to provide a whole number

let compNumber = Math.random();
// multiply by 10 to obtain a number between 0 and 2
compNumber = compNumber * 2;
Conumber = Math.floor(compNumber);
// removes digits past decimal place to provide a whole number
let player=rpsgame[Plnumber];
let comp=rpsgame[Conumber];
let output;
if (player == comp){
    console.log("its a tie")
}
else if(player ==="rock" && comp === "scissor"){
    output="player wins"
}
else if(player ==="paper" && comp === "rock"){
    output="player wins"
}
else if(player ==="scissor" && comp === "paper"){
    output="player wins"
}
else{
    output="computer wins"
}
console.log("player entered",player ,"computer entered",comp)