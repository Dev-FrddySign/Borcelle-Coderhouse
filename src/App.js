import './App.css';
import Preloader from '../src/component/preloader/Preloader'
import Rutas from './routes/Rutas';


function App() {

  return (
    <div className="App">
      <Preloader/>
      <Rutas/>
    </div>
  );
}


export default App;
