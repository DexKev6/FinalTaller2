import React from "react";
import { Link } from "react-router-dom";




export const CardGame = ({ id ,nombre,tipo, img })=>{

    return(
     <div >
            
        
        
        <div className="container">
            <div className="card">
            <img src={`./assets/img/${nombre}.jpg`}  alt={nombre} />
            <h4>  <b>Nombre: </b> {nombre} </h4>
            <p > <b>Id:</b>{id}</p>
           <p > <b>Tipo:</b>{tipo}</p>
                        
         <Link to={`../game/${nombre} `}>
            Mas...
         </Link>

            </div>
            

        </div>



     </div>
    )
}