import axios from "axios";
import { useState, useEffect } from "react";
import burguer from "../../img/hamburger.png";

const API = "http://localhost:3000";

function FormBurguer() {
  const [clientname, setClientName] = useState("");
  const [breads, setBreads] = useState([]);
  const [selectedBread, setSelectedBread] = useState("")
  const [meat, setMeat] = useState([]);
  const [selectedMeat, setSelectedMeat] = useState("")

  useEffect(() => {
    const getLanches = async () => {
      try {
        const response = await axios.get(`${API}/lanches`);
        const resp = await axios.get(response.config.url);
        setBreads(resp.data);
        console.log(breads)
      } catch (error) {
        console.log(error);
      }
    };
    getLanches();
  }, []);

console.log( breads)

  useEffect(() =>{
    
  fetch(`${API}/adicionais`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
  .then((resp) => resp.json())
  .then((data) => {
    setMeat(data)
    console.log(meat)
    
  })
  .catch((err) => console.log(err))
  },[])
  console.log(selectedBread)
  console.log(selectedMeat)
  return (
    <div className=" w-3/4 mt-10 mb-3 p-3 flex flex-col items-center bg-orange-300 border-4 rounded-md border-orange-800 md:w-80 md:ml-6 ">
      <img src={burguer} alt="" className="w-11" />
      <form action="" id="form-burguer" className="">
        <div className="div-container">
          <label htmlFor="clientName">Nome do cliente</label>
          <input
            type="text"
            id="clientName"
            placeholder="Digite seu nome"
            onChange={(e) => setClientName(e.target.value)}
            className="inputs"
          />
        </div>
        <div className="div-container">
          <label htmlFor="bread">Escolha o seu pão</label>
          <select
            name="bread"
            id="bread"
            onChange={(e) => setSelectedBread(e.target.value)}
            className="inputs"
          >
            <option>Selecione o seu pão</option>
            {breads.map((breads) => (
              <option value={breads.name} key={breads.id}>
                {breads.name}
              </option>
            ))

            }
          </select>
        </div>
        <div className="div-container">
          <label htmlFor="meat">
            Escolha sua carne
            <select
              name="meat"
              id="meat"
              onChange={(e) => setSelectedMeat(e.target.value)}
              className="inputs"
            >
              <option >Selecione a sua carne</option>
             {meat.map((meats) =>(
              <option value={meats.name} key={meats.id}>{meats.type}</option>
             ))

             }
            </select>
          </label>
        </div>
        <div className="div-container">
          <label htmlFor="additional">Adicionais</label>
          <ul>
            <li>
              <input type="checkbox" />
              Bacon
            </li>
            <li>
              <input type="checkbox" />
              Cebola
            </li>
          </ul>
          
          
          <div>
            <input
              type="submit"
              value="criar"
              className=" bg-amber-100 py-1 px-4 border-2 border-yellow-600 rounded-md m-2 hover:bg-yellow-600"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default FormBurguer;
