const student = {
  name: "Maruf",
  age: 15,
  class: 10,
  isSingle: true,
};

const phone = {
  Brand: "Apple",
  Model: "12 PM",
  Color: "Blue",
  Price: 80000,
};
//there can be some array and also an object inside of object

const subject = {
  name: "Biology",
  teacher: "Kuddus",
  exmDate: "30 dec",
  chapter: [1, 2, "Third"],
  nextExm: {
    name: "Final",
    marks: 100,
  },
};

const teacher = {
  name: "Xudling - pong",
  Age: 45,
  Depertment: "Math",
  Home: "Gazipur",
  classes: ["Sunday", "Monday", "Wensday"],
};

const Tree = {
  name: "Shimul",
  hight: "30 ft",
  age: "25 y",
  frootName: "Simul",
};

const human = {
  name: "Tuhin",
  age: "32y",
  ocupassion: "Student & Job",
  Depertment: ["CSE", "Tec Support"],
  family: {
    wife: true,
    Children: true,
    ParrentsAlive: true,
  },
};

const Pops = {
  Name: "Kalam Hawla",
  age: 65,
  ocupassion: "Retierd",
  family: {
    child: 3,
    boy: 2,
    Girl: 1,
  },
};

const motorbike = {
  Brand: "Yammaha",
  Tyre: 2,
  color: "Red",
  topSpeed: 110,
  price: 320000,
};

const bird = {
  name: "love bird",
  color: ["Red", "Black", "white"],
  food: ["rice", "water", "bajra", "ETC"],
};

const laptop = {
  Brand: "HP",
  processor: "Intel i3 7thgen",
  ram: ["16gb", "DDR4"],
  display: {
    Ratio: 1280 * 720,
    Type: "LCD",
  },
  price: 45000,
};
console.log(laptop.Brand);

//Property Key

const person = {
  name: "sodor uddain",
  age: 25,
  profession: "developer",
  salary: 25000,
  married: true,
};

console.log(person.profession); //its Called Dot notation
//Output: developer;

const person1 = {
  name: "sodor uddain",
  age: 25,
  profession: "developer",
  salary: 25000,
  married: true,
  "fav places": ["bandarban", "saintmartin", "kuakata"],
};

console.log(person1["married"]);
console.log(person1["fav places"]);
//its Called Bracket Notation
//Output: true[("bandarban", "saintmartin", "kuakata")];

const criketer = {
  position: 4,
  specialty: "Batter",
  age: 24,
  runs: 8000,
};

console.log(criketer.position);
console.log(criketer["age"]);

criketer.position = 2;
criketer["age"] = 26;

console.log(criketer.position);
console.log(criketer["age"]);
// we can update property value

const college = {
  name: "MIU",
  department: ["CSE", "EEE"],
  events: ["Robotics", "Programing Contest", "Debate function"],
  unique: {
    color: "Green",
    result: {
      cgpa: 3.88,
      merit: "top",
    },
  },
};

console.log(college.unique.result.cgpa);
console.log(college.unique.color);
console.log(college.events[2]);
//we can aslo get specific data from nested object also.

//Practice Qustion -

//1
const player = {
  name: "Naymar",
  age: 32,
  sports: "Football",
  team: "Brazil",
};
console.log(player.team);
///output - Brazil

//2
const laptop1 = {
  Brand: "lalu",
  price: "1cr",
  hardDisc: "124gb",
  ram: "3GB",
  screenSzie: "22inc",
};
console.log(laptop1.screenSzie);

//3
const favPlace = {
  name: "Cox's Bazar",
  distance: "400km",
  popularity: "high",
};
console.log(favPlace["popularity"]); //high

//4
const phone2 = {
  Brand: "Nokia",
  color: "Black",
  price: "5000",
};
console.log(phone2["price"]); // 5000

//5
const library = {
  name: "Public library",
  location: "Dhaka",
  books: 5000,
};
console.log(library.location); //Dhaka

//6
const movie = {
  title: "inception",
  director: "Nolan",
  rating: 9,
};
console.log(movie["rating"]); // 9

//7
const collage2 = {
  name: "NDC",
  established: 1949,
  groups: ["Science", "Arts", "Commerce"],
};
console.log(collage2.groups[1]); // Arts

//8
const family = {
  father: {
    name: "Kalam",
    age: 74,
    profession: "Retierd",
  },
  mother: {
    name: "Salma",
    age: 50,
    profession: "House Wife",
  },
};
console.log(family.father.age); //74
console.log(family.mother.age); //50

let sumOfAge = family.father.age + family.mother.age;

console.log(sumOfAge); //124

//Object - Key & Values
//----1
const book = {
  name: "Recharge Youre Down Battery",
  writer: "Jhankar Mahbub",
  price: "250TK",
};

const bookkeys = Object.keys(book);
const bookValues = Object.values(book);

console.log(bookkeys);
console.log(bookValues);

// Output - [ 'name', 'writer', 'price' ]
// [ 'Recharge Youre Down Battery', 'Jhankar Mahbub', '250TK' ]

//----2
const articale = {
  title: "Learning JS",
  category: "Programing",
};

if ("auther" in articale) {
  console.log("auther exists");
} else {
  console.log("No auther Founded");
}

//----3
const Laputa = {
  brand: "dell",
  model: "Inspiron",
  price: 45000,
};
for (const key in Laputa) {
  const value = Laputa[key];
  console.log(key, value);
}

//----4
const phone3 = {
  brand: "Samsumg",
  model: "S21",
  price: 85000,
};

for (const key of Object.keys(phone3)) {
  const value = phone3[key];
  console.log(key + ":", value);
}
// output - brand: Samsumg
// model: S21
// price: 85000

//----5

const bike = {
  brand: "Hero",
  price: 120000,
  model: "splender",
};
console.log(Object.values(bike));

//----6
const books2 = {
  book1: "Harry potter",
  book2: "The Hobbit",
  book3: "Game of Thrones",
};
for (const key of Object.values(books2)) {
  console.log(key);
}

//----7
const num = {
  a: 10,
  b: 20,
  c: 30,
  d: 40,
};
let sum = 0;
for (const key in num) {
  sum += num[key];
}
console.log("Total sum:", sum);

//output - Total sum: 100

//----8
const player1 = {
  name: "Messi",
  team: "Argentina",
  goals: 91,
};
console.log(Object.values(player1));

//----8
const bulding = {
  floors: 10,
  address: "Main Road,Dhaka",
  city: "Dhaka",
  Type: "Commercial",
};

for (key in bulding) {
  const value = bulding[key];
  console.log(key + ":", value);
}
// output - floors: 10
// address: Main Road,Dhaka
// city: Dhaka
// Type: Commercial

//we can delete object and object key by using "Dlete" then object name/ object key

const persona = {
  name: "alice",
  age: 25,
  country: "UK",
};

delete persona.age;
console.log(persona);

//we can seal object for delatetion it can be only modfied useing "seal"
const user = {
  username: "johndoe",
  email: "john.doe@example.com",
  password: "oldpassword",
};

Object.seal(user);

// Attempt to modify the object
user.password = "newpassword"; // Allowed
user.age = 30; // adding new property is not allowed
user.email = "john.doe@newmail.com"; // deleting property is not allowed
console.log(user);

// Output: {username: 'johndoe', email: 'john.doe@example.com', password: 'newpassword'}

//P1

const headphone = {
  brand: "Sony",
  price: 3000,
  color: "Red",
};
Object.freeze(headphone);
headphone.brand = "Lenovo";
console.log(headphone);
//Here i wanted to modify the value but its freezed

//p2
const player3 = {
  name: "Messi",
  goals: 800,
  club: "inter Miami",
};
Object.freeze(player3);
player3.country = "Argentina";
console.log(player3);
//here i want to add new property but its not taking any new proprty becasuse its freezed.

//p3
const book6 = {
  title: "harry Potter",
  auther: "jK Rowling",
  pages: 500,
};
Object.seal(book6);
book6.auther = "Rowling";
console.log(book6);
//output:- { title: 'harry Potter', auther: 'Rowling', pages: 500 }

//p4
const gadget = {
  name: "Iphone",
  price: 12000,
  color: "Black",
};
delete gadget.price;
console.log(gadget);
//output:- { name: 'Iphone', color: 'Black' }

//P5
const animal = {
  name: "Tiger",
  location: "Sundarban",
};
Object.freeze(animal.location);
animal.name = "Crocodile";
console.log(animal);
//Output: - { name: 'Crocodile', location: 'Sundarban' } - here i only freezed location property .

//p6
const food2 = {
  name: "Pizza",
  price: 500,
  size: "learge",
};
Object.seal(food2);
food2.price = 600;
food2.extraAdd = "chess";
console.log(food2);
//Output: - { name: 'Pizza', price: 600, size: 'learge' } here now i can just modify the proprty value but can't add or remove .
