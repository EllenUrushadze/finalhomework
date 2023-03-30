//N1 Youtube Comments
let userIsLoggedIn = true;
let videoIsCommentable = false;

const userCanComment = userIsLoggedIn && videoIsCommentable;
console.log(userCanComment);

//N2 Social Media
let userIsLoggedIn1 = true;
let userIsBlocked = true;

const userCanPost = userIsLoggedIn1 && !userIsBlocked;
console.log(userCanPost);

//N3 Online Magazine
let balance = 25555;
let userCartTotal = 78500;

const paymentComplete = balance >= userCartTotal;
console.log(paymentComplete);

//N4 Comment deleting
let userIsAdmin = true;
let userIsModerator = false;
let userIsCommentAuthor = false;

const userCanDelete = userIsAdmin || userIsModerator || userIsCommentAuthor;
console.log(userCanDelete);

//N5 Atom Bomb
let presidentKey = false;
let primeMinisterKey = false;
let generalOfArmiesKey = false;
let masterKey = true;

const bombWillLaunch1 = presidentKey && primeMinisterKey && generalOfArmiesKey;
const bombWillLaunch2 = masterKey;

const bombWillLaunch = bombWillLaunch1 || bombWillLaunch2;
console.log(bombWillLaunch);

//N6 Pin Code
const userPinCode = 8484;
const currentPinCode = 8484;
const newPinCode = 2422;
const retypeNewPinCode1 = 2422;
const retypeNewPinCode2 = 2424;

const pinChangeComplete = (userPinCode == currentPinCode) && (retypeNewPinCode1 == retypeNewPinCode2);

/*
if(pinChangeComplete){
    console.log("Your pin is changed!");
}else{
    console.log("Your pin is not changed, Try again!");
}
*/

console.log(pinChangeComplete);

//N7 Game Over
let health = 88;
let lives = 1;

const gameOver = (lives == 0) && (health == 0);

/*
if(gameOver){
    console.log("Game over, Try again!");
}else{
    console.log("Your're still alive, continue playing!");
}
*/

console.log(gameOver);

//N8 Meama, buying every capsule 
/* creditCardStatus მაბნევს, ანუ, აქ ისე მიწერია, რომ თუ ბალანსზე (ქეშად) საკმარისი არ აქვს, ბარათით იხდის, true-ნიშნავს რომ საკმარისი თანხა აქვს ბარათზე.
შესაბამისად, ან ბარათზე უნდა ჰქონდეს საკმარისი თანხა (true) ან ბალანსზე უნდა ჰქონდეს >= ერთი კაფსულის თანხა * ყველა კაფსულა(ჩავთვალე, რომ ყველას ყიდულობს) */
let capsuleCount = 14;
let capsulePrice = 2.5; 

let userBalance = 125;
let creditCardStatus = true;

const payymentComplete = userBalance >= (capsuleCount * capsulePrice) || creditCardStatus;
console.log(payymentComplete);

// How much we gotta pay
if(payymentComplete){
    console.log("You gotta pay:");
    console.log(capsuleCount * capsulePrice);
}else{
    console.log("Sorry, you dont have enough money to buy capsules");
}


//N9 Hotel booking
let availableRooms = 11;
let roomPrice = 120;
let discount = 25; // for each room

let userrBalance = 350;
let userHasDiscount = true;
let userRoomCount = 2;

const paymentComplete1 = availableRooms >= userRoomCount;
const paymentComplete2 = userHasDiscount;
const paymentComplete3 = userrBalance >= (userRoomCount * roomPrice);

const paymentCompletee = paymentComplete1 && paymentComplete2 && paymentComplete3;
console.log(paymentCompletee);

//How much we gotta pay with&without discount
const howmuch1 = (userRoomCount * roomPrice) - (userRoomCount * discount); // with discount
const howmuch2 = (userRoomCount * roomPrice); // without discount

if(paymentCompletee){
    console.log("You gotta pay:");
    console.log(howmuch1);
}else{
    console.log("You gotta pay:");
    console.log(howmuch2);
}

//N1 new message
console.log("Welcome to Facebook!");

let newMessages = false;

if(newMessages){
    console.log("You have a new message to read");
}else{
    console.log(undefined);
}

//N2 Online Magazine
let userBalancee = 7500;
let cartTotal = 3200;

if(userBalancee >= cartTotal){
    console.log("You successfully bought it!");
}else{
    console.log("Sorry, you dont have enough money to buy it now");
}

//N3 Student on exam
let testScore = 97;

if(testScore >= 95){
    console.log("Welcome to Novatori!!!");
}
if(testScore >= 70 && testScore < 95){
    console.log("Welcome to Cambridge University");
}
if(testScore >= 50 && testScore < 70){
    console.log("Welcome to GTU");
}

//N4 System of discount
let adminSale = 140;
let frequentClientSale = 120;
let studentSale = 150;

let userBaalance = 400;
let cartTotall = 220;

let userIsAdminn = false;
let userIsFrequentClient = false;
let userIsStudent = true;

if(userIsAdminn){
    console.log("congrats, bc of our sale, you gotta pay: ");
    console.log(cartTotall - 140);
}else if(userIsFrequentClient){
    console.log("congrats, bc of our sale, you gotta pay: ");
    console.log(cartTotall - 120);
}else if(userIsStudent){
    console.log("congrats, bc of our sale, you gotta pay: ");
    console.log(cartTotall - 150);
}

//N5 Tbilisi-Batumi
let fuel = 35;

if(fuel <= 10){
    console.log("Tbilisi-Igoeti");
}else if(fuel > 10 && fuel <= 20){
    console.log("Tbilisi-Igoeti-Gori");
}else if(fuel > 20 && fuel <= 30){
    console.log("Tbilisi-Gori-Khashuri");
}else if(fuel > 30 && fuel <= 50){
    console.log("Tbilisi-Khashuri-Kutaisi");
}else if(fuel > 50 && fuel <= 80){
    console.log("Tbilisi-Kutaisi-Batumi");
}

//6 Tbilisi-Batumi-Tbilisi
let fuell = 120;

if(fuell <= 80){
    console.log("Tbilisi-Batumi");
}else if(fuell > 80 && fuell <= 110){
    console.log("Tbilisi-Batumi-Kutaisi");
}else if(fuell > 110 && fuell <= 130){
    console.log("Tbilisi-Batumi-Khashuri");
}else if(fuell > 130 && fuell <= 140){
    console.log("Tbilisi-Batumi-Gori");
}else if(fuell > 140 && fuell <= 150){
    console.log("Tbilisi-Batumi-Igoeti");
}else if(fuell > 150 && fuell <= 160){
    console.log("Tbilisi-Batumi-Tbilisi");
}





