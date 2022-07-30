//La funcion hace la peticion http, trae la imagenes, las procesa y retorna

export const getGifs = async (category) => {

    //encodeURI: elimina espacios en la ruta
    
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=CflnTU85LXigst8s9OZlHnFR4cheTCLl`
    
          //Se crea unba peticion http en JavaScript
    
            const resp = await fetch(url);
            const {data} = await resp.json();
    
                //Se recorre la data y se retorna los objetos cno su respectiva url
    
            const gifs = data.map(img => {
    
                return {
                    id: img.id,
                    title: img.title,
                    url: img.images?.downsized_medium.url //Se pregunta si existe un valor que lo cargue
                }
            });
            //console.log(gifs);
    
            return gifs;
    }