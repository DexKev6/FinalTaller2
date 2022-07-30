import { useContext } from "react";
//import { createBrowserHistory } from "history";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";
import { useNavigate } from "react-router-dom";


export const LoginScreen = () => {

    const navigate = useNavigate();

    const { dispatch } = useContext(AuthContext);
    // const history = createBrowserHistory();
    const handleLogin = () => {

        dispatch({
            type: types.login,
            payload: {
                name: 'Kevin Saldarriaga'
            }
        });
        navigate('/')
    };

    return (

        <div className="centrado">
            <img src="../assets/img/Gamer.jpg"
            />

            <div className="d-grid gap-2 col-3 mx-auto">
                <button className="btn btn-primary" onClick={handleLogin} >
                    Iniciar sesión
                </button>
            </div>
        </div>
    )
}