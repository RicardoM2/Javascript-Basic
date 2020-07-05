import { getHeroesId } from './bases/08-import-export';

const getHeroeByIdAsync = (id)=> {

return new Promise((resolve, reject) => {
  
  setTimeout(() => {
    const heroe = getHeroesId(id)
    if(heroe) {
      resolve(heroe);
    }
    else {
      reject('No found the hero')
    }
  }, 2000);
});

}

getHeroeByIdAsync(1)
.then( console.log)
.catch(console.warn);
