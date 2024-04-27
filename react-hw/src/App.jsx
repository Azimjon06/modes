
import './App.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import { Routes, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App container">
      <Header/>
      <Routes>
        <Route path='/'  element={<Home/>} />
        <Route path='/about' element={<About />} />
        <Route path='/contact ' element={<Contact/>} />
        
        
       
      </Routes>
      <Footer/>
        
    </div>
  );
}

export default App;
