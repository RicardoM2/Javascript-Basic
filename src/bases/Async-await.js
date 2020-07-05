//Async and  Await



const getImagen =async() => {

  try {
  const apiKey ='gOeYnrX0hA3WEOA0IsMZEx6mgREeQ4BW';
  const resp = await fetch(`http://api.giphy.com/v1/gifs/random?apiKey=${apiKey}`);
  const  {data}  = await resp.json();

  const {url} = data.images.original;

  const img = document.createElement('img');
  img.src = url;
  document.body.append(img);
  } catch (error) {
      console.log(error);
  }
}
getImagen();