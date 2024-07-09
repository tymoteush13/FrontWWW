import './App.css';
import Navbar from './Navbar';
import Categories from './pages/Categories';
import Highlights from './pages/Highlights';
import New from './pages/New';
import Login from './pages/Login';
import Home from './pages/Home';
import {Route, Routes} from "react-router-dom"

function App() {
  return (
  <>
  <Navbar />
  <div className='container'>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/new" element={<New />} />
      <Route path="/highlights" element={<Highlights />} />
      <Route path="/login" element={<Login />} />
    </Routes>

  </div>  
  </>
  );

}

export default App;
