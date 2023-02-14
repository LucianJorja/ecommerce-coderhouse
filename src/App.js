import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar';
import ItemListContainer from './components/itemListContainer';

function App() {
return (
  <div>
    <NavBar/>
    <ItemListContainer greeting="¡Hola!" />
    <ItemListContainer/>
  </div>
)
}
export default App;
