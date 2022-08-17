import './App.css';
import HomePage from './components/HomePage'
import SignUpDev from './components/SignUpDev'
import LoginDev from './components/LoginDev'
import SignUpIn from './components/SignUpIn'
import LoginIn from './components/LoginIn'
import Coin from './components/Coin'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AvailableCoinForm from './components/AvailableBuyCoin';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage/>}/>
        <Route exact path="/LoginIn" element={<LoginIn/>}/>
        <Route exact path="/LoginDev" element={<LoginDev/>}/>
        <Route exact path="/SignUpDev" element={<SignUpDev/>}/>
        <Route exact path="/SignUpIn" element={<SignUpIn/>}/>
<<<<<<< HEAD
        <Route exact path="/Coin/:Id" element={<Coin/>}/>
=======
        <Route exact path="/AvailableCoinForm" element={<AvailableCoinForm/>}/>
>>>>>>> 7e87294b4baef01e71b630aff3be55789caf07fc
      </Routes>
      </BrowserRouter>
    </div>
  );  
}

export default App;
