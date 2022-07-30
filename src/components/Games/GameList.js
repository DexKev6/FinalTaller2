import React, {useMemo} from "react";
import { getGameType } from "../../selectors/getGameType";
import { CardGame } from "./CardGame";

export const GameList = (tipo) => {

//Se utiliza para no estar disparando el procedimiento cada vez que se hace un cambio en el c
    const games = useMemo(() => getGameType(tipo), [tipo]);

    return(

        
        <div className='row'>

            {
                games.map(games=>(
                    <div className="col-md-4">

                    <CardGame key = {games.id}
                        {...games}
                    />
                    </div>
                    
                ))
            }
        </div>
       
    )
}