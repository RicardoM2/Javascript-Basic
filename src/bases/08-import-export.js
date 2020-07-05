
//Import and Export

import {heroes,owner} from '../data/heroes';

console.log(owner);

export const getHeroesId =(id) => {
  return heroes.find(item=> item.id === id);
};

console.log(getHeroesId(2));

export const getHeroesByOwner =(owner) => {
   return  heroes.filter((item)=> item.owner===owner);
}

console.log(getHeroesByOwner('DC'));


