
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

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/Header/Header';
// import Home from '../../chegirmon/src/components/Home/home';

// function App() {
//   return (
//     <Router>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         {/* boshqa sahifalar uchun route qo‘shish mumkin */}
//       </Routes>
//     </Router>
//   );
// }
export default App;
