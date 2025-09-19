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


//include & indexof methode

/* defrence between include and indexof is - if we want to justify an array is there a valu stored or not we can check is by include and it gives us result in true & false just simple as it,
and indexof says whats the index position it holds in array, if its not tere its simplely return -1 as result.*/

const fruits = ["Apple","Bannana","Mango","Lichi"]
if (fruits.includes("Mango")){
  console.log("Mengo is there")
} else (
  console.log("There is no mango,get on the tree")
);

//output - Mengo is there

const nam2 = ["babul","alif","chothon"]
const indexnum = nam2.indexOf("babul");
console.log(indexnum);
//Output - 0

const frList = ["Rifat","Rimon","Hafiz","Lokman"]
const indxloc = frList.indexOf("Lokman");
console.log(indxloc);
//output - 3

const citys = ["Dhaka","Chittagong","Sylhet","rajshahi"]
const checkarry = citys.includes("RajShahi");
console.log(checkarry);
//Output -false

const problem = ["Bristi", "Megh", "DIGHI", "Borsha"]
if (problem.includes("Bristi")){
  console.log("I need Umberalla");
} else {
  console.log("no rain no pain");
}
// output - I need Umberalla

const favgame = ["Football", "Cricket","Voliball"]
const ckgame = favgame.includes("badminton");
console.log(ckgame);
// output  - false