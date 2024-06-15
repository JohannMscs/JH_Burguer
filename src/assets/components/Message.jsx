
import {useState, useEffect} from 'react'

const Message = ({msg}) => {

const [visible, setVisible] = useState(false)

useEffect(() => {

if(!msg){
    setVisible(false)
    return
}
setVisible(true)
const timer = setTimeout(() => {
    setVisible(false)
}, 3000)
    return() => clearTimeout(timer)
}, [msg])

  return (
    <>
    
    {visible && (
       <div className="bg-green-300/70 w-52 h-12 m-2 absolute border-spacing-2 rounded-lg flex justify-center items-center">{msg}</div>
    )}
    
    </>
  )
}

export default Message