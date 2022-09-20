import { useEffect  } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { getPokemons } from './store/slices/pokemon';


export const PokemonApp = () => {

  const dispatch = useDispatch();
  const { isLoading , pokemons = [] , page } = useSelector( state => state.pokemons );

  // const data = useSelector((state) => state.pokemons.pokemons);
  // const { pokemons } = useSelector((state) => state);
  // const { isLoading } = pokemons;
  // const { page } = pokemons;
    
  useEffect(()=> {
    dispatch( getPokemons() );
  },[]);

  return (
    <>
        <h1>PokemonApp</h1>
        <hr />
        <span>Loading: { isLoading ? 'True' : 'False' }</span>
        
        <ul>
            {
              pokemons.map( ({ name }) => (
                <li key={ name }>{ name }</li>
              ) )
            }
        </ul>
        
        <button 
          className='btn btn-primary'
          disabled={ isLoading }
          onClick={ () => dispatch( getPokemons(page) ) }
          >
          Next
        </button>

    </>
  )
}

