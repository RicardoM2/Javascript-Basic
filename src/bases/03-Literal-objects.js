// literal object 

const person = {
   name: 'Tony',
   lastName: 'Stark',
   age: 30,
   address: {
      city: 'NY',
      zip: 333111,
      lat: 14.11111,
      lng: 34.00000,
   }
};

console.log({person});

//Clone a object 

const person2 = {...person}

person2.name = 'Peter';

console.log(person);
console.log(person2);
  