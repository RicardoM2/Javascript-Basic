
//Array destructuring

const person = ['Goku', 'Vegeta', 'Trunks'];

const [ , , p3] = person;

console.log(p3);


const returnArray = () => {
    return ['ABC',123];
  }

 const [letter, number] = returnArray();

 const useState = (value) => {
   return [value, ()=> { console.log('Hello world')}];
 }

 const [name, setname] = useState('Goku');

 console.log(name);