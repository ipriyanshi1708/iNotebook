import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<Navbar />} />
    </Routes>
    
    </>
  );
}

export default App;
