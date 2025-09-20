//for of loop

const numbers = [12, 98, 45, 63, 21, 72];

for (const num of numbers) {
   console.log(num);
}


const fruits = ["orange", "apple", "banana", "jackfruit", "watermelon"];

for (const item of fruits) {
   console.log(item);
}


//practice Q-
const favsub = ["GED", "software Development", "NetWorking", "C Programing", "Physics"];
for (const subj of favsub) {
   console.log(subj);
}
//output -GED software Development NetWorking C Programing Physics

const favfood = ["Biriyani", "Nuts", "fried Rice", "Pizza", "Swarma"];
for (const favf of favfood) {
   console.log(favf);
}
//output - Biriyani,Nuts,fried Rice,Pizza,Swarma - we cannot use Let for variable declaretion here

const famMemBDay = [1955, 1965, 1999, 2004, 2016];
for (const age of famMemBDay) {
   console.log(age);
}
//output - 1955,1965,1999,2004,2016

const favgame = ["COD", "Batlefild", "Valorent", "Farcry", "PUBG"];
for (const game of favgame) {
   console.log(game);
}
//output - COD Batlefild Valorent Farcry PUBG


//While Loop
let num = 0;
while (num < 5) {
   console.log(num);
   num = num + 1;
}

let num1 = 0;
while (num1<10) {
   console.log("I will practice programing 3 houre regulerly")
   num1++;
}

let num2 = 0;
let num3 = 21;
while (num2<num3){
   console.log(num2);
   num2++;
} 
//output -0 to 20


let num4 = 50;
while (num4<101){
   console.log(num4);
   num4++;
} 
//output -50 to 100

let num5 = 101;
let num6 = 0; 
while (num5<111){
   num6= num5/2;
   console.log(num6);
   num5++;
   
   
} 
//output -50.5,51,51.5,52,52.5,53,53.5,54,54.5,55


// addition with while loop

let n = 1;
let sum = 0;
while(n<=10){
   console.log(n);
   sum = sum + n;
   n++;
} console.log("sum of the total:", sum);

//output -  1.2.3.4.5.6.7.8.9.10 sum of the total: 55

let num7 = 50;
while (num7<101){
   console.log(num7);
   num7++;
} 
//output -50 to 100

let n2 = 5;
let sum1 = 0;
while (n2<=15){
   console.log(n2);
   sum1 = sum1 + n2;
   n2++;
}console.log("sum of the total:",sum1);

