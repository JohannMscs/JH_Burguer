import {useEffect, useState} from 'react'
import {useLocation} from 'react-router-dom'
import Message from "../assets/components/Message"

const Requests = () => {
  const [Items, setItems] =useState([])
  const API = "http://localhost:3000";

const location = useLocation()
let message = ''
if(location.state){
  message = location.state
  }

  useEffect(() =>{
    fetch(`${API}/requests`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
    .then((resp) => resp.json())
    .then((data) => {
      setItems(data)
    })

  },[])
  return (

    <div className="pt-12 flex-row text-center">
      {message && <Message msg="Pedido feito com 
sucesso!"/>}
     <h1 className="font-bold text-3xl ">Gerenciar pedidos</h1>
     <article className="bg-white flex items-center justify-center p-2 font-bold">
      {
        Items.map((item) => (
          <div key={item.id} className="flex-column m-3 bg-gray-300">
          <h1>cliente: {item.clientName}</h1>
          </div>
        ))
      }
     </article>
    </div>
  )
}

export default Requests