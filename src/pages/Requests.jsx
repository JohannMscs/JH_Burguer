import {useLocation} from 'react-router-dom'
import Message from "../assets/components/Message"

const Requests = () => {
  
const location = useLocation()
let message = ''
if(location.state){
  message = location.state
}

  return (

    <div className="pt-12 flex-row text-center">
      {message && <Message msg="Pedido feito com 
sucesso!"/>}
     <h1 className="font-bold text-3xl ">Gerenciar pedidos</h1>
     <article className="bg-white flex items-center justify-center p-2 font-bold">
      <section className="list">pao</section>
      <section className="list">carne</section>
      <section className="list">Nome do cliente</section>
      <section className="list">adicionais</section>
     </article>
    </div>
  )
}

export default Requests