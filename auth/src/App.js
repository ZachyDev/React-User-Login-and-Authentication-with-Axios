import './App.css';
// import Register from './components/Register';
import Login from './components/Login';
import { Routes,Route} from 'react-router-dom';
import Register from './components/Register';
import Home from './components/Home';
function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      <Routes>
        <Route path='login' element={<Login />}/>
        <Route path='register' element={<Register />}/>
        <Route path='home' element={<Home />}/>
      </Routes>
    </div>
  );
}

export default App;
