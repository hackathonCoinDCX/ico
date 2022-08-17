import './App.css';
import HomePage from './components/HomePage'
import SignUpDev from './components/SignUpDev'
import LoginDev from './components/LoginDev'
import SignUpIn from './components/SignUpIn'
import LoginIn from './components/LoginIn'
import Coin from './components/Coin'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AvailableCoinForm from './components/AvailableBuyCoin';
import DevDashboard from './components/DevDashboard';
import AddCoin from './components/AddCoin';
import NavBar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <div className="App">
        <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage/>}/>
          <Route exact path="/LoginIn" element={<LoginIn/>}/>
          <Route exact path="/LoginDev" element={<LoginDev/>}/>
          <Route exact path="/SignUpDev" element={<SignUpDev/>}/>
          <Route exact path="/SignUpIn" element={<SignUpIn/>}/>
          <Route exact path="/Coin/:Id" element={<Coin/>}/>
          <Route exact path="/AvailableCoinForm" element={<AvailableCoinForm/>}/>
          <Route exact path="/DevDashboard" element={<DevDashboard/>}/>
          <Route exact path="/AddCoin" element={<AddCoin/>}/>
        </Routes>
        </BrowserRouter>
      </div>
    </div>
  );  
}

export default App;
