const person = {
     name: "Alisha",
 age: 20,
    city: "Karachi Sindh Pakistan",
  };
const jsonString = JSON.stringify(person);
console.log(jsonString); 
const jsonString = '{"name":"Alisha","age":20,"city":"Karachi Sindh Pakistan"}';
const person = JSON.parse(jsonString);
console.log(person); 
const person = {
    name: "Alisha",
    age: 20,
    city: "Karachi Sindh Pakistan",
  };
  const jsonString = JSON.stringify(person, null, 2); 
  console.log(jsonString);
  