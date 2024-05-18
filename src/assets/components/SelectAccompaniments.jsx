import {useState, useEffect} from 'react'

const API = 'http://localhost:3000/acompanhamento'

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
  .catch((err) => console.log(err))
},[])
  return (
    <select name="accompaniments2" id="accompanimnets2" className="inputs" onChange={handleChange} >
      <option value="carne"> carne</option>
      <option value="salada">salada</option>
    </select>
  )
}

export default SelectAccompaniments