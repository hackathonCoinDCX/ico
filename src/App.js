import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Coin from './components/Coin'
import HomePage from './components/HomePage'
import SignUpDev from './components/signup/SignUpDev'
import LoginDev from './components/login/LoginDev'
import SignUpIn from './components/signup/SignUpIn'
import LoginIn from './components/login/LoginIn'
import AvailableCoinForm from './components/investor/AvailableBuyCoin';
import DevDashboard from './components/developer/DevDashboard';
import AddCoin from './components/developer/AddCoin';
import NavBar from "./components/utility/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import InvDashboard from './components/investor/InvDashboard';

function App() {
  return (
    <div>
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
          <Route exact path="/InvDashboard" element={<InvDashboard/>}/>
        </Routes>
        </BrowserRouter>
      </div>
    </div>
  );  
}

export default App;
