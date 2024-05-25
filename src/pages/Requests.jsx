import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Message from "../assets/components/Message";
import SelectStatus from "../assets/components/SelectStatus";

const Requests = () => {
  const [items, setItems] = useState([]);
  const API = "http://localhost:3000";

  const location = useLocation();
  let message = "";
  if (location.state) {
    message = location.state;
  }
  
  useEffect(() => {
    fetch(`${API}/requests`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setItems(data);
      });
  }, []);
  return (
    <div className="pt-12 flex-row text-center">
      {message && (
        <Message
          msg="Pedido feito com 
sucesso!"
        />
      )}

      <h1 className="font-bold text-3xl ">Gerenciar pedidos</h1>
      <article className=" flex items-center justify-center flex-wrap p-2 font-bold ">
        {items.map((item) => (
          <section key={item.id} className=" md:flex ">
            <div className="flex md:block ">
              <ul className="md:flex border-b-2 border-black md:border-0">
                <li className="table">
                  <p>Nome</p>
                </li>
                <li className="table">Pão</li>
                <li className="table">Carne</li>
                <li className="table">Adicionais</li>
                <li className="table w-36">Acompanhamento</li>
                <li className="table">Bebida</li>
              </ul>
              <ul className=" flex flex-col md:flex-row items-start border-b-2 border-black">
                <li className="table ">{item.clientName}</li>
                <li className="table">{item.bread}</li>
                <li className="table">{item.meat}</li>
                <li className="table">
                  <p className="h-5">{item.additionals1}</p>
                  <p className="h-5">{item.additionals2}</p>
                  <p className="h-5">{item.additionals3}</p>
                </li>
                <li className="table w-36">{item.accompaniments}</li>
                <li className="table">{item.drink}</li>
                <SelectStatus states={item.status} id={item.id}/>
              </ul>
            </div>
          </section>
       
        ))}
      </article>
      
    </div>
  );
};

export default Requests;
