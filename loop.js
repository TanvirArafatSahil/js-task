let myObject = {

name: 'John Doe',
age: 25,
city: 'Example City',
isStudent: true
}

const keys = Object.keys(myObject);
console.log(keys)

for(const key of keys){
console.log('key:',key, '|', 'type:', typeof myObject[key]);
}