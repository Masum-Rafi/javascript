const result = 45;
if (result >= 40) {
console.log("New bike");
} else {
   console.log("Dhur beta");
}

const show = "9pm";
const nextShow = "10pm";
if (show <= nextShow){
   console.log("its movie time");
} else {
   console.log("only Sleep");
}


const tamparaturelimit = 30;
const tamparatureNow = 32;
if (tamparatureNow >= tamparaturelimit) {
   console.log("Ac On");
} else {
   console.log("Blanket on my body");
}


//AND & OR condition
const ageM = 25;
const hight = 72;
if (ageM > 18 && hight > 60) {
  console.log("push the car bro");
} else {
  console.log("YOU ARE A CHILD,SITE ON THE CAR");
}

const mathScore = 95;
const englishScore = 70;
if (mathScore > 80 || englishScore > 85) {
  console.log("You are qualified for admission ");
} else {
  console.log("Go marry someone");
}

const GPA = 5;
const monthlyEarning = 12000;
if(GPA == 5 && monthlyEarning <= 10000 ){
   console.log("You got the scholership")
} else {
   console.log("You are not qualified");
}

const age = 27;
const workexp = 3;
const maxAge = 30;
const minWorkexp = 2;
if (maxAge >= age && minWorkexp <= workexp) {
  console.log("You are qualified for job exm");
} else {
  console.log("You are not qualified for this");
}

//output - You are qualified for job exm

const minEggCount = 12;
const eggInFridge = 7;
const chickenAvl = true;
if (minEggCount == eggInFridge || chickenAvl == true) {
  console.log("Dim korma is on");
} else {
  console.log("Ruti kola maro ar ghumao");
}

//Output - Dim korma is on

const bodyTamp = 95;
const haveCough = false;
const fevar = 100;
if (bodyTamp >= fevar || haveCough == true) {
  console.log("Imidiatly visiting to Doctor");
} else {
  console.log("Got Coverd in Blanket ");
}
//Output - Got Coverd in Blanket

let attendance = "70%";
const minAttendance = "80%";
const hwSubmited = true;
if (attendance >= minAttendance && hwSubmited === true) {
  console.log("You Can sit for examination");
} else {
  console.log("You did'nt maintain your pace");
}

//output - You are not maintain your pace

let electricity = "gone";
let phn = "dead";
const doing1 = "gameing is on";
const doing2 = "Reading is on";
if (electricity != "on" && phn != "on") {
  console.log(doing1);
} else {
  console.log(doing2);
}

//output - gameing is on

const shirtPrice = 999;
const haveCupoon = true;
if (shirtPrice >= 1000 && haveCupoon === true) {
  console.log("You got 20% Discount");
} else {
  console.log("You did'nt got Discount ");
}
//output - You did'nt got Discount

//Else-if

let bill = 6000;
if (bill >= 6000) {
  const discount = (bill / 100) * 15;
  const payBill = bill - discount;
  console.log("Your Got 15% discount, Bill is", payBill);
} else if (bill >= 3000) {
  const discount2 = (bill / 100) * 5;
  const payBill2 = bill - discount2;
  console.log("You got 5% discount, Pay Bill", payBill2);
} else {
  console.log("Paybil", bill);
}

const minAgeLim = 12;
const maxAgeLim = 60;
let ageNow = 70;
if (minAgeLim >= ageNow) {
  console.log("You dont have to pay bill, its on House");
} else if (maxAgeLim <= ageNow) {
  console.log("You have 50% discount from house");
} else {
  console.log("Pay Your Bill Please");
}

//Output- You have 50% discount from house

const minBankBalance = 1000;
const safeBanklimite = 5000;
let ballance = 6000;
const compare1 = minBankBalance <= ballance;
const compare2 = safeBanklimite >= ballance;
if (minBankBalance >= ballance) {
  console.log("Deposite Money");
} else if (compare1 && compare2) {
  console.log("Bindaas chill & Relax");
} else {
  //if (ballance > safeBanklimite)
  console.log("You are rich, get married");
}

//output - You are rich, get married

const passMark = 50;
const APlus = 80;
const achivedMark = 79;
if (APlus < achivedMark) {
  console.log("You got A+");
} else if (achivedMark >= passMark && APlus > achivedMark) {
  console.log("Passed");
} else {
  console.log("Fail");
}
//output - Passed

let bookSize = 501;
const smallSizeBook = 100;
const bigSizeBook = 500;
const midSizeBook = smallSizeBook < bookSize && bigSizeBook < bookSize;

if (bookSize <= smallSizeBook) {
  console.log("Small Size Book");
} else if (bookSize >= bigSizeBook) {
  console.log("Big Book");
} else {
  console.log("Mid Size book");
}

//Output - Big Book

let tampa = -1;
if (tampa > 0 && tampa < 20) {
  console.log("Cool COOL");
} else if (tampa <= 0) {
  console.log("ICE");
} else {
  console.log("HOT HOT");
}

//putput - ICE

let playeLvl = 50;
if (playeLvl < 10) {
  console.log("Novice");
} else if (playeLvl >= 50) {
  console.log("Expart");
} else {
  console.log("Pro Gamer");
}

//output - 