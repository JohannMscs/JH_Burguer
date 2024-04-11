import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./assets/components/Navbar";
import Requests from "./pages/Requests";


function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hamburguer</h1>
      <Router>
        <Navbar/>
      <Routes>
     <Route path="/" Component={Home}>
      Fazer pedido
     </Route>
     <Route path="/pages/requests" Component={Requests}></Route>
   </Routes>
      </Router>
    </>
  );
}
export default App;
