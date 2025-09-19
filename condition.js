const result = 45;
if (result >= 40) {
console.log("New bike");
} else {
   console.log("Dhur beta");
}

const show = "9pm";
const nextShow = "10pm";
if (show <= nextShow) {
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
if (GPA == 5 && monthlyEarning <= 10000) {
  console.log("You got the scholership");
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

//output - Expart

//Nested If condition

const invitation = true;
const money = 900;
if (invitation == true) {
  console.log("Going to Friends Bparty");
  if (money > 1000) {
    console.log("Lets Buy a gift for him");
  } else if (money < 1000) {
    console.log("Going without Gifts");
  }
} else {
  console.log("You are not my friend anymore");
}

//output - Going to Friends Bparty, Going without Gifts

const gustWantTea = true;
const gustWantBiscute = false;
if (gustWantTea == true) {
  console.log("do you want Biscute Also");
  if (gustWantBiscute == true) {
    console.log("Tea & Biscute Ready");
  } else if (gustWantTea == true) {
    console.log("Only tea is ready");
  }
} else {
  console.log("Sit and watch star Jalsha");
}
//output - Only tea is ready;

const ActiveUser = true;
const subscribtion = true;
if (ActiveUser == true) {
  console.log("Active User");
  if (subscribtion == true) {
    console.log("You are Using Premium Feature");
  } else if (subscribtion == false) {
    console.log("You are using Free version");
  }
} else {
  console.log("User is Not Active");
}

//output - You are Using Premium Feature

const foodInFridge = 0;
const foodAppWorking = 1;
if (foodInFridge == true) {
  console.log("Food Available in fridge");
  console.log("Lets Microwave it and enjoy");
} else {
  if (foodAppWorking == true) {
    console.log("Lets Order Food online");
  } else {
    console.log("Im fasting Today");
  }
}

//Output - Lets Order Food Online

let partyGusts = 100;
let giftCount = 70;
if (giftCount == partyGusts) {
  if (partyGusts >= 100) {
    console.log("Guest Count is fullfill");
    console.log("Lets party All night");
  }
} else {
  console.log("I will party with myself");
}

// output - I will party with myself

//logical not (!) and 

const isLeader = true;
if (isLeader) {
  console.log("Government money is my money");
}

let isPassed = false;
if (!isPassed) {
  console.log("Ajke khawa dawa bondho.");
}

const cashback = 500;
let billF = 3000;
billF >= 3000 ? console.log(billF - cashback) : console.log("paybill: ", billF);

//output - 2500

let ageT = 14;
let lvl = "child";
lvl = ageT >= 15 ? "teenager" : "Children";
console.log(lvl);

//output - child

let isloggrdIn = 0;
let message = "welcome back";
message = isloggrdIn === true ? "Welcome back" : "Please Login";
console.log(message);

//output - Please Login

let carTank = 1;
let mSg = "ready for a long Drive";
mSg = carTank > true ? "Ready for a long Drive" : "Fill the Tank";
console.log(mSg);

//output - Fill the Tank

let pass = 0;
let mssG = "";
mssG = pass == true ? "Party time" : "Serious in next sem";
console.log(mssG);
//output - Serious in next sem

const sunny = 1;
sunny == 0 ? console.log("Stay Home") : 0;

//output - null

// let expensive = true;
// !expensive == 0
//   ? console.log("I will buy this item")
//   : console.log("im not buying it");
//   //output - I will buy this item
// 

//Array problems

  const array = [71,72,73,74,75,76,78,79]
   console.log(array);


const vagi = ["potato","onoion","eggplant","mula","carrot","tomato","dharosh","lauki","potol"];
const productInbag = vagi.length;
console.log(productInbag);

//output - 9

const favCinema = ["Dunkrik","How to train the dragon","shwsank redimption",];

const oddNumber = [11,13,15,17,19,21,23,25,27,29]

const penColorBesidesMe = ["Red","White","Black","SkyBlue"]
const length2 = penColorBesidesMe.length;
console.log(length2);

//output - 4

const citiName = ["Dhaka","London","kolkata","Kathmundu"]
const length3 = citiName.length;
console.log(length3)

//Output - 4

//Arrey -Index
const numarry = [4,5,6,1,78,34,78];
console.log(numarry[2]);
console.log(numarry[6]);

const friend = ["hafiz","Rahat","Munna","Makki","Tamjid","Ibrahim"]
console.log(friend[3]);
// Output - Makki

const favbk=["Bela furobar agge","Peradoxical Sajid","Himu","The Most Dangerius game","Double Standerd"]
console.log(favbk[4]);

//output - Double Standerd

const num1to10=[1,2,3,4,5,6,7,8,9,10]
num1to10[6] = 40;
console.log(num1to10);
//output - [ 1,  2, 3, 4,  5, 6, 40, 8, 9, 10]

const gameinmyphn = ["Free fire","PUBG","Candy Crush","Tample Run"]
gameinmyphn[2] = "Subway surf";
console.log(gameinmyphn);
//output - [ 'Free fire', 'PUBG', 'Subway surf', 'Tample Run' ]

const famMem = ["jhontu","montu","Jhontur bap","Montur Ma"]
console.log(famMem[3]);
//output - Montur Ma

const bktlistCountry = ["Spain","Sweethzerland","IceLand","Nepal","Vutan","Srilanka","London"]
console.log(bktlistCountry[4]);
//output - Vutan

const inMyTbl = ["pen","diary","Moneybag","Buds"]
console.log(inMyTbl[7]);
//output - Undefiend {end Of Index}

//Push-Pop-Shift-Unshift
const num1 = [10,20,30,40,50]
num1.push(60);
console.log(num1);
// output-[ 10, 20, 30, 40, 50, 60 ]

const names = ["Sajib","sagor","Sakib","sohel"]
names.push("Sumoon");
console.log(names);
//[ 'Sajib', 'sagor', 'Sakib', 'sohel', 'Sumoon' ]

const MyphnApp = ["Ginthub","Youtube","Google Doc","Duolingo"]
MyphnApp.pop();
console.log(MyphnApp);
//[ 'Ginthub', 'Youtube', 'Google Doc' ]

const newary = [24,36,48,60]
newary.unshift(12);
console.log(newary);
//[ 12, 24, 36, 48, 60 ]

const MyBook = ["Bela furobar agge","Peradoxical Sajid","Himu","The Most Dangerius game","Double Standerd"]
MyBook.shift();
console.log(MyBook);
//Output - [ 'Peradoxical Sajid','Himu','The Most Dangerius game','Double Standerd']
