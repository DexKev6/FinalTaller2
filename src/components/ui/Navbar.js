import React, { useContext } from "react";

//Link para hacer un enlace para ir a otra pagina y el NavLink se utiliza para que visualmente se pueda ver la pagina activa
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";

export const Navbar = () => {

    const{user:{name}, dispatch} = useContext(AuthContext);


    //funcion fleca para cuando se de click en el botón de logout
    const history = useNavigate(); 
    const handleLogout = () => {
        dispatch({
            type: types.logout
        });
        history('/login');
    };

    return (

        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

            <div className="container-fluid">
                <img  src="../assets/img/okk.png"   alt="" width="50" height="44" className="Logo"/>
                
                <Link className="navbar-brand" to="/">
                    INICIO
                </Link>

                <div className="navbar-collapse">
                    <div className="navbar-nav">

                        <NavLink className={({ isActive }) => "nav-item nav-link" + (isActive ? 'active' : '')}
                            to="/NewGames">
                            NewGames
                        </NavLink>

                        <NavLink className={({ isActive }) => "nav-item nav-link" + (isActive ? 'active' : '')}
                            to="/RetroGames">
                            RetroGames
                        </NavLink>
                        
                        <NavLink className={({ isActive }) => "nav-item nav-link" + (isActive ? 'active' : '')}
                            to="/Search">
                            Search
                        </NavLink>
                    </div>

                </div>

                <div className = "navbar.collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className = "nav-item nav-link text-info">

                    <span className = "nav-item nav-link text-info">
                        {name}
                    </span>

                    <button className = "nav-item nav-link btn"
                    onClick = {handleLogout}>Logout
                        
                    </button>
                </ul>

            </div>
            </div>
        </nav>
    )

}