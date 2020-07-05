//Funtions in JS 
const saludar  = function (name) {
  return `Hola, ${name}`;

}

 const saludar2 = (name) => {
   return `Hello, ${name}`;

 }

 const saludar3 = (name) => (`Hello ${name}`);
 const saludar4 = () => (`Hello World`);


const getUser =() => ({
   uid: 'ABCD123',
   username: 'The Big Papi'
})

const getUserActive =(name) => ({
     
       uid:'abcde',
       username:name
    
})

console.log(saludar('Ricardo'));
console.log(saludar2('Goku'));
console.log(saludar3('Ricardo'));
console.log(saludar4);
const user = getUserActive('Ricky');
console.log(user);


