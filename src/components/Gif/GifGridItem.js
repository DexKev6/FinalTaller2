import React from "react";


export const GifGridItem = ({title, url}) =>{
    return(
        <div className="card-gif">
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}