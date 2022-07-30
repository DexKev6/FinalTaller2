import {games} from "../data/games"

export const getGameName = (nombre) =>{
    return games.find(game => game.nombre === nombre);
};