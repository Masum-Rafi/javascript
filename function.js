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
