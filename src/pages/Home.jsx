import {useState, useEffect} from 'react'
import Banner from '../assets/components/Banner'
import FormBurguer from './FormBurguer'



const Home = () => {

  function postRequest(request){


    fetch('http://localhost:3000/requests', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(request),
    })
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data)
    })
    .catch((err) => console.log(err))
  }
 const arr = "jose"
        
  return (
    <div className="">

      <Banner/>

      <h2>Monte seu lanche. Faça seu Hamburguer, crie a batata do seu jeito e escolha seu refrigerante</h2>
      <section className="w-full flex items-center justify-center">
      <FormBurguer postRequests={postRequest} arr={arr}/>
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