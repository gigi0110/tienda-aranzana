import NavBar from './Components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import ItemListContainer from './Components/ItemListContainer';

function App() {
  return (
    <div className="App">

      <NavBar />
      <ItemListContainer itemListContainerProps={ "Hola ListContainer" } />
        
      
    </div>
  );
}

export default App;
