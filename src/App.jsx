import { useDispatch, useSelector } from 'react-redux';

import './App.css';
import { increment , decrement , incrementBy } from './store/slices/counter';

function App() {
  
  const { counter } = useSelector( (state) => state.counter );
  const dispatch = useDispatch();

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          
        </a>
        <p>count is { counter }</p>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button 
          className='btn btn-primary mb-2'
          onClick={() => dispatch( increment() ) }>
          Increment
        </button>
        <button className='btn btn-primary mb-2'
          onClick={() => dispatch( decrement() ) }>
          Drecrement
        </button>
        <button
          className='btn btn-primary'
          onClick={ () => dispatch( incrementBy(2) )  }>
          IncrementBy
        </button>

      </div>      
    </div>
  )
}

export default App

