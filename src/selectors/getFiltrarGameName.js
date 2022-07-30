import { games } from "../data/games";

export const getFiltrarGameName = (nombre = '') =>{

    if(nombre === ''){
        return[];
    }
    nombre = nombre.toLocaleLowerCase();
    return games.filter(game => game.nombre.toLocaleLowerCase().includes(nombre));
}