import React from "react"
import { GameList } from "../Games/GameList"


export const NewGamesScreen = () =>{
    return(
        <div className="Search">
            <h1>New Games</h1>
            <hr/>
            <GameList tipo = {'New'}/>
        </div>
    )
}