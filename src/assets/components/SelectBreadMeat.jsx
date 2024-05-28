import {useState, useEffect} from 'react'

function SelectBreadMeat({handleChange, API}) {
    const [breads, setBreads] = useState([])
    const [meats, setMeats] = useState([])
//requisição dos dados do banco de pães
    useEffect(() => {
        fetch(`${API}/pao`, {
            method: "GET",
            headers: {
                'Content-type' : 'application/json',
            },
        })
        .then((resp) => resp.json())
        .then((data) => (
            setBreads(data)
        ))
        .catch((error) => console.log(error))
    }, [])
//requisição dos dados do banco de carnes
        useEffect(() => {
            fetch(`${API}/carne`, {
                method: "GET",
                headers: {
                    'Content-type' : 'application/json',
                },
            })
            .then((resp) => resp.json())
            .then((data) => {
                setMeats(data)
            })
            .catch((error) => console.log(error))
        }, [])



  return (
    <section>
        <article>
            <label className="font-semibold"> Escolha o seu pão</label>
            <select name="bread" className="inputs" onChange={handleChange}>
                <option value="slee">Selecione seu pão</option>
                {breads.map((bread) => (
                    <option key={bread.id} value={bread.type}>{bread.type}</option>
                ))}
            </select>
        </article>
        <article>
            <label className="font-semibold"> Escolha a sua carne</label>
            <select name="meat" className="inputs" onChange={handleChange}>
            <option value=""> Selecione sua carne</option>
            {meats.map((meat) => (
                <option key={meat.id} value={meat.tpye}>{meat.type}</option>
            ))}
            </select>
        </article>
    </section>
  )
}

export default SelectBreadMeat