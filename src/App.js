import Home from './routes/Home';
import './App.css';
import About from './routes/About';
import Service from './routes/Service';
import Contact from './routes/Contact';
import {Routes,Route} from "react-router-dom";
function App() {
  return (
    <>

       <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/service" element={<Service/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
       </Routes>
    </>
  );
}

export default App;
