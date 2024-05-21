import {useState, useEffect} from 'react'

const API = 'http://localhost:3000/acompanhamento'
//recebimento de dados de acompanhamentos
function SelectAccompaniments({handleChange}) {
const [accompaniments, setAccompaniments] = useState([])

useEffect(() => {
  fetch(`${API}`, {
    method: "GET",
    headers: {
      "Content-type" : "application/json",
    },
  })
  .then((resp) => resp.json())
  .then((data) => {
    setAccompaniments(data)
  })
  .catch((error) => console.log(error))
},[])


  return (
    <select name="accompaniments2"  className="inputs" onChange={handleChange} >
      <option value="">escolha seu acompanhamento</option>
      {accompaniments.map((accompaniment) => (
        <option key={accompaniment.id} value={accompaniment.name}>{accompaniment.name}</option>
      ))}
    </select>
  )
}

export default SelectAccompaniments