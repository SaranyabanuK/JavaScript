const jsonString = '{"name":"Saranya","age":22}';
const jsonObj = JSON.parse(jsonString);
console.log(jsonObj.name);  
const backToString = JSON.stringify(jsonObj);
console.log(backToString);