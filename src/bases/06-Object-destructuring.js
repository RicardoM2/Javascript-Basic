


//Object destructuring

const person  ={
  name: 'Tony',
  age: 45,
  key: 'Iroman',
  range: 'Soldier'
};

const {name, age, key} = person;

console.log(name);
console.log(age);
console.log(key);

const UseContext = ({ key,name,age,range}) => {
  return {
    PrimaryKey: key,
    ages:age,
    length: {
       lat:14.1232,
       lng: -12.3232
    }
  }
}

const {PrimaryKey, ages, length:{lat, lng}} = UseContext(person);
console.log(PrimaryKey,ages);
console.log(lat, lng);


