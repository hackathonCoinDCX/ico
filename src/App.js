import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage'
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage/>}/>
        {/* <Route exact path="/SignUpDev" element={<SignUpDev/>}/>
        <Route exact path="/LoginDev" element={<LoginDev/>}/>
        <Route exact path="/SignUpIn" element={<SignUpIn/>}/>
        <Route exact path="/LoginIn" element={<LoginIn/>}/> */}
      </Routes>
      </BrowserRouter>
    </div>
  );  
}

export default App;
