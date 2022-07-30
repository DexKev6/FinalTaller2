import { games } from "../data/games";

export const getGameType = (tipo) => {

    //Muestra un error si el tipo no es el correcto

    const validartipo = ['Retro','New'];
    if(validartipo.includes(tipo)){
        throw new Error(`Tipo "${tipo}" no es correcto`);
    }
    return games.filter(game => game.tipo === tipo.tipo);
}