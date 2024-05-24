import {useState, useEffect} from 'react'

const API = "http://localhost:3000";

function SelectDrink({handleChange}) {
    const [drinks, setDrinks] = useState([])

    useEffect(()=> {
        fetch(`${API}/bebidas`, {
            method: "GET",
            headers : {
                "Content-type" : "application/json",
            },
        })
        .then((resp) => resp.json())
        .then((data) => {
            setDrinks(data)
        })
        .catch((error) => console.log(error))
    }, [])

  return (
    <select className="inputs"  name="drink"onChange={handleChange}>
        <option value="">Selecione a sua bebida</option>
        {drinks.map((drink) => (
            <option key={drink.id} value={drink.name}>
                {drink.name}
            </option>
        ))

        }
    </select>
  )
}

export default SelectDrink