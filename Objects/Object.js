const person = {
  name: "Taimoor Hussain",
  city: "Lahore",
  code: () => {
    return "Coding";
  },
  address: {
    town: "Harbans Pura",
    street: "1",
    house: "12",
    add: () => {
      return "Harbans Pura Lahore";
    },
  },
};

// Accessing in Objects
console.log(person.city);
console.log(person["city"]);
console.log(person["address"].house);

// Find key in Object

console.log(person.hasOwnProperty("address"));
// Nested
console.log(person.address.hasOwnProperty("street"));

// How to add,delete and update in object
person.projects = "MERN STACK";
console.log(person);
delete person.projects;
console.log(person);

// Shallow and deep copy
// Shallow Copy
let obj1 = {
  name: "Taimoor",
  age: 22,
};

let obj2 = obj1;
console.log(obj2);
obj2.name = "Qasim";
console.log(obj1);

// Deep Copy

let obj3 = Object.assign({}, obj2);
console.log(obj3);
obj3.name = "Taimoor";
console.log(obj2.name);

let obj4 = [{ ...obj1 }];
console.log(obj4);
obj4.name = "Taimoor";
console.log(obj1);
console.log(obj4);

// Pass by value
function modifyValue(x) {
  x = 10; // Modify the parameter
  console.log("Inside function:", x); // Output: Inside function: 10
}

let value = 5;
modifyValue(value);
console.log("Outside function:", value); // Output: Outside function: 5

// Pass by reference
function modifyObject(obj) {
  obj.name = "Alice"; // Modify the object property
  console.log("Inside function:", obj); // Output: Inside function: { name: "Alice" }
}

let person1 = { name: "Bob" };
modifyObject(person1);
console.log("Outside function:", person1); // Output: Outside function: { name: "Alice" }

// Object Methods

// Difference between freeze and seal method
// Freeze method make the object readonly
// Object.freeze(person);
console.log(person.name);
person.name = "Qasim";
console.log(person.name);

// Object.isFrozen check weather the object is frozen or not
console.log(Object.isFrozen(person));

// Object.seal method ....
// You cannot add and delete the key but you can update the key
Object.seal(person);
person.name = "Qasim";
console.log(person);
// Object.isSealed check weather the object is sealed or not
console.log(Object.isSealed(person));

