import queryString from 'query-string';
import { CardGame } from '../Games/CardGame';
import { useForm } from '../../hooks/useForm';
import { useLocation, useNavigate } from 'react-router-dom';
import { getFiltrarGameName } from '../../selectors/getFiltrarGameName';
import { useMemo } from 'react'

export const SearchScreen = () =>{

    const location = useLocation();

    //Incluye en la barra la ruta del query-string de busqueda

    const {q = ''} = queryString.parse(location.search);
    console.log(q);

    //Trae de la funcion "useForm" el valor escrito en el input
    const [formValues, handleInputChange] = useForm({
        searchText: q
    });

    const {searchText} = formValues;

    //useMemo: para que el query se memorice y solo busque después de dar en e botón de buscar
    const gamesFiltered = useMemo(() => getFiltrarGameName(q),[q]);


    //Permite ejecutar el query de busqueda
    const history = useNavigate();

    const handleSearch = (e) =>{
        e.preventDefault(); //Para que no refresque la pagina
        history(`?q=${searchText}`);
    };


    return(
        <div className='Search'>
            
            <h1>Search Screen</h1>
            <hr/> {/* Una linea separadora */ }
            <div className='row'>
                <div className='col-5'>
                    <h4>Search form</h4>
                    <hr/>
                    <form onSubmit={handleSearch}>
                        <input type ="text"
                        placeholder= "Find your game" className="form-control"
                        name="searchText"
                        autoComplete="off"
                        value={searchText}
                        onChange={handleInputChange}  />
                        <button type="submit" className='btn m-1 btn-block btn-outline-primary'>
                            Search...
                        </button>
                    </form>
                </div>
                <div className='col-7'>
                    <h4>Result</h4>
                   
                    <hr/>

                    {
                        //Genera un mensaje de alerta si no hay nada escrito en el input
                        
                        (q === '')
                          &&
                          <div className='alert alert-info'>
                                    Busca un juego
                          </div>
                         
                    }

                    {
                         //Genera un mensaje de error siel juego buscado no existe en el array

                         (q !== '' && gamesFiltered.length === 0)
                         &&
                         <div className='alert alert-danger'>
                                 {q} No es un juego
                         </div>
                    }
                    {
                        gamesFiltered.map(game => (
                            <CardGame
                                key={game.id}
                                {...game}
                            />
                        ))
                    }
                </div>
            </div>
        </div>

    );
}