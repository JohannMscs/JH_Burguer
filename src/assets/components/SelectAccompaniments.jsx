import {useState, useEffect} from 'react'


const SelectAccompaniments = ({handleChange, API}) => {
const [accompaniments, setAccompaniments] = useState([])

//recebimento de dados de acompanhamentos
useEffect(() => {
  fetch(`${API}/acompanhamento`, {
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
    <select name="accompaniments"  className="inputs" onChange={handleChange} >
      <option value="">escolha seu acompanhamento</option>
      {accompaniments.map((accompaniment) => (
        <option key={accompaniment.id} value={accompaniment.name}>{accompaniment.name}</option>
      ))}
    </select>
  )
}

export default SelectAccompaniments