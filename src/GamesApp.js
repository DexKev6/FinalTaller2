import { AppRouter } from "./routers/AppRouter";
import { useEffect, useReducer } from "react";
import { AuthContext } from "./auth/AuthContext";
import { authReducer } from "./auth/authReducer"


//JSON.parse para evaluar el localStrorage
//si existe se retorna el usuario y sino retorna false

const init = () =>{
    return JSON.parse(localStorage.getItem('user')) || {logged: false};
};

//Se crea para conservar el usuario a lo largo de la aplicación

export const GamesApp = () =>{

    const [ user, dispatch] = useReducer(authReducer, {} , init);

    //Para que el usuario se quede en el Navbar

    useEffect( () => {
            localStorage.setItem('user', JSON.stringify(user));
    }, [user]);

    return(
        <AuthContext.Provider value={{user,dispatch}}>
            <AppRouter/>
        </AuthContext.Provider>
        
    )
};