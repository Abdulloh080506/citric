import './App.css';
import Navbar from './components/navbar';
import Home from './pages/home';
import About from './pages/about';
import Catalog from './pages/catalog';
import Blog from './pages/blog';
import Contact from './pages/contact';
import Pro from './pages/catalog/pro';
import Footer from './components/footer';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/catalog' element={<Catalog/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/pro' element={<Pro/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
