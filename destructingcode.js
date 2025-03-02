const fruits = ["apple", "banana"];
const { firstFruit, secondFruit } = fruits;
console.log(firstFruit);
console.log(secondFruit);

const employee = { name: "John", info: { age: 30 } };
const { info: { age }, name } = employee;
console.log(age);
console.log(name);
