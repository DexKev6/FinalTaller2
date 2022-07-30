//import React from "react";
import { Routes, Route, BrowserRouter  } from "react-router-dom";

import { InicioScreen } from "../components/Inicio/InicioScreen";
import { NewGamesScreen } from "../components/NewGames/NewGamesScreen";
import { GameScreen } from "../components/Games/GameScreen"
import { RetroGamesScreen } from "../components/RetroGames/RetroGamesScreen";
import { SearchScreen } from "../components/Search/SearchScreen";
import { Navbar } from "../components/ui/Navbar";
import { AuthContext } from "../auth/AuthContext";
import { useContext } from "react";
import { LoginScreen } from "../components/Login/LoginScreen";


//Componente para el manejo de las rutas
export const AppRouter = () => {

    const { user } = useContext(AuthContext);


    return (
        <BrowserRouter>

            <Routes>
            <Route path="/login" element={<LoginScreen />} />
                <Route path="/*" element={<Users />} />

            </Routes>

        </BrowserRouter>
    );
};

function Users() {
    return (
        <div>
            <Navbar />

            <Routes>
               
                
                <Route path="/" element={<InicioScreen />} />
                <Route path="/NewGames" element={<NewGamesScreen />} />
                <Route path="/RetroGames" element={<RetroGamesScreen />} />
                <Route path="/game/:GameName" element={<GameScreen />} />
                <Route path="/Search" element={<SearchScreen />} />


            </Routes>
        </div>
    )
}
