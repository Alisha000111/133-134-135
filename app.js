var person = {
    name: "Alisha",
    age: 20,
    city: "Karachi Sindh Pakistan",
};
var jsonString = JSON.stringify(person);
console.log(jsonString);
var jsonString = '{"name":"Alisha","age":20,"city":"Karachi Sindh Pakistan"}';
var person = JSON.parse(jsonString);
console.log(person);
var person = {
    name: "Alisha",
    age: 20,
    city: "Karachi Sindh Pakistan",
};
var jsonString = JSON.stringify(person, null, 2);
console.log(jsonString);
