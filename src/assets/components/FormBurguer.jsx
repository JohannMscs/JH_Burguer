import { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom'
import burguer from "../../img/hamburger.png";

const API = "http://localhost:3000";

function FormBurguer(handleSubmit, hamburgerData) {
  //const [clientName, setClientName] = useState('')
  const navigate = useNavigate();
  const [breads, setBreads] = useState([]);
  const [meat, setMeat] = useState([]);
  const [additional, setAdditional] = useState([]);
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
      .catch((err) => console.log(err));
  }, []);
    useEffect(()=> {
      fetch(`${API}/adicionais`, {
        method: "GET",
        headers: {
          "Content-type" : "application/json",
        },
      })
      .then((resp) => resp.json())
      .then((data) => {
        setAdditional(data)
      })
      .catch((error) => console.log(error))
    },[])
  //envia os dados do formulario para o banco e todos são visivéis na aba pedidos do projeto
  function postRequest(request) {
    request.adicionais =[]
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
        navigate('../../pages/Requests', {state:{message: 'pedido feito com sucesso'}})
      })
      .catch((err) => console.log(err));

  }
  const submit = (event) => {
    event.preventDefault();
    postRequest(request);
    //console.log(request)
  };
  //recolhe o dados do formulario
  const handleChange = (event) => {
    setRequest({ ...request, [event.target.name]: event.target.value });
  };
  return (
    <div className=" w-3/4 mt-10 mb-3 p-3 flex flex-col items-center bg-orange-300 border-4 rounded-md border-orange-800 md:w-80 md:ml-6 ">
      <img src={burguer} alt="" className="w-11" />
      <form action="" id="form-burguer" className="" onSubmit={submit}>
        <div className="div-container">
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
          <label htmlFor="additional">Adicionais</label>
          <ul>
              {additional.map((additionals) => (
                <li key={additionals.id} className="flex">
                 <input type="checkbox" name={`adicional-0${additionals.id}`} id={additionals.id} value={additionals.name} onChange={handleChange} />
                 {additionals.name}
                </li>
              ))

              }
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
