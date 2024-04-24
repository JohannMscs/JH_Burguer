import axios from "axios";
import { useState, useEffect } from "react";
import burguer from "../../img/hamburger.png";

const API = "http://localhost:3000";

function FormBurguer() {
  const [clientname, setClientName] = useState("");
  const [bread, setBread] = useState([]);
  const [meat, setMeat] = useState("");

  useEffect(() => {
    const getLanches = async () => {
      try {
        const response = await axios.get(`${API}/lanches`);
        const resp = await axios.get(response.config.url);
        setBread(resp.data);
        console.log(bread);
      } catch (error) {
        console.log(error);
      }
    };
    getLanches();
  }, []);

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
            onChange={(e) => setBread(e.target.value)}
            className="inputs"
          >
            <option>Selecione o seu pão</option>
            {bread.map((e) => (
              <option key={e.id} value={e.id}>
                {e.name}
              </option>
            ))}
          </select>
        </div>
        <div className="div-container">
          <label htmlFor="meat">
            Escolha sua carne
            <select
              name="meat"
              id="meat"
              onChange={(e) => setMeat(e.target.value)}
              className="inputs"
            >
              <option value="">Selecione a sua carne</option>
              <option value="Picanha">Picanha</option>
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
