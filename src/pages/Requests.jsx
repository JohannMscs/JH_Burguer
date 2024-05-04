import {useLocation} from 'react-router-dom'
import Message from "../assets/components/Message"

const Requests = () => {
  
const location = useLocation()
let message = ''
if(location.state){
  message = location.state
}

  return (

    <div className="pt-12">
     <h1>my project</h1>
      {message && <Message msg="Pedido feito com sucesso!"/>}
    </div>
  )
}

export default Requests