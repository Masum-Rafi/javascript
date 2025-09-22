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

let n3 = 1;
let sumN34 = 0;
while (n3 <= 50) {
  console.log(n3);
  sumN34 = sumN34 + n3;
  n3++;
}
console.log("Sum of the number", sumN34);

let n4 = 21;
let sumn4 = 0;
while (n4 <= 50) {
  sumn4 = n4 + sumn4;
  n4++;
  console.log("sum of 21 to 50 is:", sumn4);
}

let n5 = 20;
let sumn5 = 0;
while (n5 <= 40) {
  sumn5 = n5 + sumn5;
  n5++;
}
console.log("Total Sum of  20 to 40:", sumn5);

//for loop

for(let n11= 1;n11 <=10;n11++){
   console.log(n11);
}

for (let i=150;i<=170;i++){
   console.log(i);
}

let sofi1 =0;
for(let i1 = 31;i1<=58;i1++){
   console.log(i1);
   sofi1 = i1 + sofi1;
} console.log("Sum of Students :",sofi1);

let sumi2 = 0;
for(let i = 25;i<75;i++){
   sumi2 = i + sumi2;
}console.log(sumi2);

//ODD-Even Loop
for(i=20;i<=50;i++){
   if(i % 7 ==0 ){

      console.log("The Output:",i);}
}

//2
for(i=40;i<=80;i++){
   if(i%5 == 0 && i%7==0){
      console.log("The modules:",i);
   }
}
//3
let Sm = 0;
for (i = 13; i<=40;i++){
   if(i % 13 == 0){
   Sm = i + Sm;
   } 
   
}console.log("The sum is:",Sm);
//Output - 78

//4
for (let i = 1; i<=50; i = i+4){
console.log("the num is:",i);
}

//5
for (let i = 0; i<=100; i ++){
   if (i % 9==0 && i % 6==0){
      console.log("The Divisible Is :",i);
   }
}

//6
let sm1 = 0;
for(let i = 1; i<=50; i++){
   if(i % 3==0 && i% 4==0){
   sm1 += i;
   } 
} console.log("The sum of Divisible:",sm1);

//Loop Break - 1
for (let i = 0;i<=30;i++){
   if(i>=15){
      break;
   } console.log(i);
}
//2
for (let i = 1;i<=40;i++){
   if(i % 7 == 0){
      continue;
   } console.log(i);
}