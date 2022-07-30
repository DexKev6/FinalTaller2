import React, { useState, useEffect} from "react";
import { GifGridItem } from "./GifGridItem";
import { getGifs } from "../../helpers/getGifs";


export const GifGrid = ({ category }) => {


    const [images, setImages] = useState([]);

    //con la siguiente funcion se coloca que la carga de los elemntos se haga usa sola vez y solo se ejecute cuando el componente es renderizado la primera vez

    useEffect(() => {
        getGifs(category)
         .then(setImages);
    }, [category]); //Si la categoria cambia vuelve a ejecutar el efecto


    return (
        <>
          {/* <h3>{category}</h3> */}
        <div className='card-grid'>
          {
              images.map(img =>(
                 <GifGridItem
                 key={img.id}
                 {...img}
                 
                 /> 
              ))
          }

           
        </div>
        </>
    )

}
