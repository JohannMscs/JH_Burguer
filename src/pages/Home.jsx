import {useState, useEffect} from 'react'


const url = "http://localhost:3000/lanches"

const Home = () => {
    const [lanches, setLanches] = useState("")

useEffect(() => {
    async function fetchData(){
        const res = await fetch(url)
        const data = await res.json()

        setLanches(data)
        console.log(data)
    }
    fetchData()
}, [])

        
  return (
    <div>

        <ul>
          {lanches && lanches.map((lanche) => (
            <li key={lanche.id}>
                {lanche.name} - R${lanche.price}

            </li>
          ))}  
        </ul>

    </div>
  )
}

export default Home