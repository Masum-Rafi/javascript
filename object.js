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
