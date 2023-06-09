import './App.css';
import Home from './Components/Home';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Protect from './Components/Protect';

function App() {
  return (
    <div >
      <BrowserRouter>

      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/home' element={<Protect child={<Home/>} />} />
      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
