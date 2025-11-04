//this is function basic how to declare and call a function

// //The Qustion Set - chapter 1
//  Qজুস খাও নামে একটা ফাংশন লিখ। যেটাকে কল করলে আউটপুট দিবে— এই নাও লেবুর জুস।
// Qএখন myRoutine নামে একটা ফাংশন লিখ। এইটার ভিতরে থাকবে, প্রতিদিন সকালে ঘুম থেকে উঠে তুই কী কী কাজ করস, সেগুলার লিস্ট। একটা একটা করে কাজের নাম এক একলাইনে কনসোল লগ দিয়ে লিখবি।
// Qতোর পরিবারের জন্য একটা ফাংশন লিখ। তুই যেকোনো একটা নাম দে। তারপর এইটার মধ্যে তোর যত পরিবারের সদস্য আছে, তাদের নাম এক এক করে আউটপুট করে দেখাবি
// Qএকটা taskDone নামে ফাংশন লিখ। ফাংশনটাতে তোর সারাদিনের ৫টা কাজ একেক লাইনে কনসোল লগ দিয়ে দেখা।
//  QgreetMe নামে ফাংশন লিখ। ফাংশন কল করলে আউটপুটে আসবে Good Morning! Have a great day!
// Qতোর সবচেয়ে ক্লোজ তিন বন্ধুর নাম দেখানোর জন্য getFavFriends নামে ফাংশন লিখ। তারপর সেটার ভিতরে তোর ক্লোজ তিন বন্ধুর নাম আউটপুট হিসেবে দেখাবি।
// QintroduceMyself নামে ফাংশন লিখ। ফাংশন কল করলে তোর নাম, বয়স, ঠিকানা, ফোন নাম্বার, উচ্চতা আর তোর প্রিয় খাবার আউটপুট হিসেবে দেখা।

//p1
function juiceKhaw() {
  console.log("Ei naw lebur juice");
}

juiceKhaw();
//output - Ei naw lebur juice

//p2
function myRoutine() {
  console.log("Check Phone");
  console.log("Get hydreted");
  console.log("Eat Breckfast");
  console.log("Turn on The PC");
}

myRoutine();

//p3
function azadFamily() {
  console.log("kalam", "Salma", "Mahbub", "Tamu", "Rafi");
}
azadFamily();

//p4
function taskDone() {
  console.log("Gaming");
  console.log("Coding");
  console.log("Bath");
  console.log("Walk");
}
taskDone();

//p5
function greetMe() {
  console.log("Good Morning, Have a great Day");
}

greetMe();

//p6
function getFavFriends() {
  console.log("Ponir", "Hafiz", "Munna");
}
getFavFriends();

//p7
function introduceMyself() {
  const mySelf = {
    name: "Rafi",
    age: "22",
    address: "Dhaka",
    phNumber: "123456789",
    fevFood: "Ma er hat er Ranna",
  };
  console.log(mySelf);
}

introduceMyself();

//The Qustion Set - chapter 2
//1 পিতা ও পুত্রের বয়সের সমষ্টি বের করার একটা ফাংশন লিখ।
//2তোর এক বন্ধু তোকে বলল ক্যালকুলেটর বানাতে, কিন্তু ক্যালকুলেটরে শুধু যোগ বা বিয়োগ করার অপশন থাকলে হবে না। একটা ফাংশন লিখ, যেখানে দুইটা সংখ্যার গুণ বের করে দেখাস। যেমন, যদি 20 আর 15 পাঠালে আউটপুট হবে 300।
//3 একটা ফাংশন লিখ, যেটা তিনটা সাবজেক্টের পরীক্ষার মার্কসের সমষ্টি তোকে দিবে।
//4 বয়স বের করার একটা ফাংশন লিখ। যেটাকে তুই তোর কোন বছর জন্ম, সেটা বলবি। তারপর ফাংশনের ভিতরে এই বছর থেকে তোর জন্মসাল বিয়োগ করলে তোকে বলবে, তুই কত বছর বুইড়া হইছস (মানে তোর বয়স কত হইছে)।
//5 তুই একটা দোকানে গেছিস, যেখানে প্রতিটা লাউ কেনার জন্য 35 টাকা লাগবে। এখন একটা ফাংশন লিখ, যা প্যারামিটার হিসেবে নিবে, তুই লাউয়ের জন্য কত টাকা দিতে চাস। তারপর ভাগ করে বলবে, তুই কয়টা লাউ কিনতে পারবি।
//6 একটি ফাংশন লিখ, যেখানে চারটা সংখ্যার গড় বের করবে।
//7 একজন দোকানদার প্রত্যেকটা আইটেমে 250 টাকা লাভ করে। একটা ফাংশন লিখ, যেখানে কোনো একটা জিনিসের কেনা দাম দিবি, তাহলে সে বিক্রির দাম (selling price) দিবে।
//8 একটি ফাংশন লিখ, তারপর সেই ফাংশনকে তোর জন্মসাল প্যারামিটার হিসেবে দিবি। তারপর সে বলে দিবে, কোন বছর তোর বয়স 100 বছর হবে।
//9 একটি ফাংশন লিখ, যেখানে প্যারামিটার হিসেবে দিবি, প্রতিদিন তুই কয় ঘণ্টা সময় মোবাইল ফোন ইউজ করস। তারপর সেই ফাংশন বের করবে, মাসে তুই কত ঘণ্টা সময় মোবাইল ফোন ইউজ করস। ধরে নে, এক মাসে 30 দিন হয়।
//this Chapter is on Function Aurgument

//Q1
function dif(sAge,fAge){
  const diff = sAge - fAge;
  console.log("The age diffrence between father and son is :",diff,);
};
dif(40,18);

//Output:- The age diffrence between father and son is : 22

//Q2
function multi(num1,num2){
  return num1 * num2;
};
const multiResult = multi(20,15);
console.log("The Result is:- ",multiResult);
//Output - The Result is:-  300

//Q3
function subTotalMarks(math,english,science){
  const total = math +  english + science ; 
  console.log("The Total marks is:-",total);
};
subTotalMarks(85,65,95);
//Output: - The Total marks is:- 245

//Q4
function ageCalcu(bYear,currYear,currDate,bDate){
  const age = currYear - bYear;
  console.log("Your Current age is :- ",age);
};

const bYear = 1998;
const currYear = 2025;
ageCalcu(bYear,currYear);
//Output:- Your Current age is :-  27

//Q5
function lau(dam,amiKototdimu){
  return amiKototdimu / dam;
};
const amiLauNimu = lau(35,140);
console.log("Ami Lau nimu:-",amiLauNimu,"Ta");

//Q6
function average(a,b,c,d){
  const average = (a+b+c+d) / 4;
  console.log("The average of this 4 Number is :-",average);
};
average(75,40,10,75);
//Output:- The average of this 4 Number is :- 50

//Q7
function sellingPrice(prodPrice){
  const withprofite = prodPrice + 250;
  console.log("Product main price:-",withprofite);
};
sellingPrice(1250);
//Output:- Product main price:- 1500

//Q8
function jubliage(byear){
  const y100in = byear + 100;
  console.log("You will be 100 years in - ",y100in);
};
jubliage(1998);
//Output:- You will be 100 years in -  2098

//Q9
function mobileUsagesMonthly(daily){
  const mobUseinmonth = daily * 30;
  console.log("You use mobile ",mobUseinmonth,"hours in a month");
};
mobileUsagesMonthly(5);
//OUTPUT:- You use mobile  150 hours in a month


