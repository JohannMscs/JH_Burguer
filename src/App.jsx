import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./assets/components/Navbar";
import Requests from "./pages/Requests";
import Footer from "./assets/components/Footer";


function App() {
  return (
    <>
      <Router>
        <Navbar/>
      <Routes>
     <Route path="/" Component={Home}>
      Fazer pedido
     </Route>
     <Route path="/pages/requests" Component={Requests}></Route>
   </Routes>
   <Footer/>
      </Router>
    </>
  );
}
export default App;
