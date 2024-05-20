import {useState ,useEffect} from 'react'

const API = "http://localhost:3000/adicionais";
function SelectAdditionals() {
  
  useEffect(()=>{
    fetch(`${API}`)
  },[])

  return (
    <div>SelectAdditionals</div>
  )
}

export default SelectAdditionals