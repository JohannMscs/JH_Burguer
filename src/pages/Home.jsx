import {useState, useEffect} from 'react'
import Banner from '../assets/components/Banner'
import FormBurguer from '../assets/components/FormBurguer'


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
    <div className="">

      <Banner/>

      <h2>Monte seu lanche. Faça seu Hamburguer, crie a batata do seu jeito e escolha seu refrigerante</h2>
      <section className="w-full flex items-center justify-center">
      <FormBurguer/>
      </section>
{/*
        <ul>
          {lanches && lanches.map((lanche) => (
            <li key={lanche.id}>
                {lanche.name} - R${lanche.price}

            </li>
          ))}  
        </ul>
        */}

    </div>
  )
}

export default Home