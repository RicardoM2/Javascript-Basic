const name ='Ricardo';
const lastName = 'Miranda';


//use let like variable scoope

let valueDade = 5;

valueDade = 4;

console.log(name,lastName,valueDade);

if(true) {
  let valueDade = 6;

  const nombre = 'Peter';

  console.log(valueDade,nombre);
}


//template string 

const nameTemplate = 'Ricardo'
const lastNameTemplate = 'Miranda'


const fullname = `
 ${nameTemplate}
 ${lastNameTemplate}`;

console.log(fullname);


function getName(nombre) {
  return 'Hola'+  nombre;

}

console.log(`Este es un texto:${getName(nameTemplate)}`);