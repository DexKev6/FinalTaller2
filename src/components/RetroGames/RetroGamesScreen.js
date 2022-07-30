import React from "react"
import { GameList } from "../Games/GameList"

export const RetroGamesScreen = () =>{
    return(
        <div className="Search">
            <h1>Retro Games</h1>
            <hr/>
            <GameList tipo = {'Retro'}/>
        </div>
    )
}