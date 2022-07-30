import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getGameName } from "../../selectors/getGameName";

export const GameScreen = () => {

    const { GameName } = useParams(); //Funcion que trae los parametros que vienen con la url

    //Para traer todas las propiedades del objeto
    const game = getGameName(GameName);

    const history = useNavigate();

    const handleReturn = () => {
        history('/');
    };

    const { id, nombre, tipo,  year, historia  } = game;

    return (
        <div className='row mt-5'>
            <div className='col-4' style={{ maxWidth: 200 }}>
                <img
                src={`../assets/img/${GameName}.jpg`}
                alt={nombre}
                className="img-thumbnail"
                />
            </div>
            <div className='col-8'>
                <h3>{nombre} </h3>
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'> <b>Id: </b>{id} </li>
                    <li className='list-group-item'> <b>Nombre: </b>{nombre} </li>
                    <li className='list-group-item'> <b>Tipo: </b>{tipo} </li>
                    <li className='list-group-item'> <b>Fecha de lanzamiento: </b>{year} </li>
                    <li className='list-group-item'> <b>Sinopsis: </b>{historia} </li>
                  
                </ul>
                <button className='btn btn-outline-info' onClick={handleReturn}>
                    Retornar
                </button>
            </div>
        </div>
    )
}