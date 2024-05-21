import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import burguer from "../../img/hamburger.png";
import SelectAccompaniments from "./SelectAccompaniments";
import SelectAdditionals from "./SelectAdditionals";
import SelectBreadMeat from "./SelectBreadMeat";

const API = "http://localhost:3000";

function FormBurguer(handleSubmit, hamburgerData) {
  //const [clientName, setClientName] = useState('')
  const navigate = useNavigate();
  const [breads, setBreads] = useState([]);
  const [meat, setMeat] = useState([]);
  const [request, setRequest] = useState(hamburgerData || {});
  //request de dados aos tipos de pães
  useEffect(() => {
    fetch(`${API}/pao`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setBreads(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  //request aos dados aos tipos de carne
  useEffect(() => {
    fetch(`${API}/carne`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setMeat(data);
      })
      .catch((error) => console.log(error));
  }, []);
  //envia os dados do formulario para o banco e todos são visivéis na aba pedidos do projeto
  function postRequest(request) {
    fetch(`${API}/requests`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(request),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        navigate("../../pages/Requests", {
          state: { message: "pedido feito com sucesso" },
        });
      })
      .catch((error) => console.log(error));
  }
  const submit = (event) => {
    event.preventDefault();
    postRequest(request);
    //console.log(request)
  };
  //recolhe o dados do formulario
  const handleChange = (event) => {
    setRequest({ ...request, [event.target.name]: event.target.value });
    console.log(request);
  };
  return (
    <div className=" w-3/4 mt-10 mb-3 p-3 flex flex-col items-center bg-orange-300 border-4 rounded-md border-orange-800 md:w-80 md:ml-6 ">
      <img src={burguer} alt="" className="w-11" />
      <form action="" id="form-burguer" className="" onSubmit={submit}>
        <div className="div-container">
        <SelectBreadMeat handleChange={handleChange}/>
          <label htmlFor="clientName">Nome do cliente</label>
          <input
            type="text"
            id="clientName"
            name="clientName"
            placeholder="Digite seu nome"
            onChange={handleChange}
            className="inputs"
          />
        </div>
        <div className="div-container">
          <label htmlFor="bread">Escolha o seu pão</label>
          <select
            name="bread"
            id="bread"
            onChange={handleChange}
            className="inputs"
          >
            <option>Selecione o seu pão</option>
            {breads.map((breads) => (
              <option value={breads.name} key={breads.id}>
                {breads.name}
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
              onChange={handleChange}
              className="inputs"
            >
              <option>Selecione a sua carne</option>
              {meat.map((meats) => (
                <option value={meats.name} key={meats.id}>
                  {meats.type}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className="div-container">
          <label htmlFor="additional">escolha até 3 Adicionais</label>
          <SelectAdditionals
            handleChange={handleChange}
            nameSelect="additionals1"
          />
          <SelectAdditionals
            handleChange={handleChange}
            nameSelect="additionals2"
          />
          <SelectAdditionals
            handleChange={handleChange}
            nameSelect="additionals3"
          />
          <label htmlFor="">Escolha seu acompanhamento</label>
          <SelectAccompaniments handleChange={handleChange} />
        </div>
        <div className="flex justify-center">
          <input
            type="submit"
            value="criar"
            className=" bg-amber-100 py-1 px-4 border-2 border-yellow-600 rounded-md m-2 hover:bg-yellow-600"
          />
        </div>
      </form>
    </div>
  );
}

export default FormBurguer;
//230 lines
