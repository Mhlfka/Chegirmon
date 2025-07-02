
import './App.css';
import Header from './components/Header/header';
import Karusel from './components/Karusel/karusel';
import Kategoriyalar from './components/Kategoriyalar/kategoriyalar';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Karusel></Karusel>
      <Kategoriyalar></Kategoriyalar>
      
    </div>
  );
}

export default App;
