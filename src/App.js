
import './App.css';
import Header from './components/header';
import Karusel from './components/karusel';
import Kategoriyalar from './components/kategoriyalar';
import Navbar from './components/navbar';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Karusel></Karusel>
      <Kategoriyalar></Kategoriyalar>
      {/* <Kategoriyalar></Kategoriyalar>
      <Kategoriyalar></Kategoriyalar>
      <Kategoriyalar></Kategoriyalar>
      <Kategoriyalar></Kategoriyalar>
      <Kategoriyalar></Kategoriyalar>
      <Kategoriyalar></Kategoriyalar> */}
      <Navbar></Navbar>
      
    </div>
  );
}

export default App;
