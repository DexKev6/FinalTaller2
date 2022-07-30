import React, { useState } from "react";
import { GifGrid } from "../Gif/GifGrid";
import { AddCategory } from "../Gif/AddCategory";
export const InicioScreen = () => {

    const [categories, setCategories] = useState(['Video Games']);

    return(
        <div className="Search">
            <h2> GAMES </h2>
                  
            <hr/>
            <div className="AddCategory">
            <AddCategory setCategories={setCategories}
            
            />
            </div>
            
            <ol>
                {
                    categories.map(category =>
                        <GifGrid
                        key={category}
                        category = {category}
                        />
                        )
                }
            </ol>
        </div>
    )
}
