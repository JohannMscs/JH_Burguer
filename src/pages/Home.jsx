import Banner from '../assets/components/Banner'
import FormBurguer from '../assets/components/FormBurguer'


const Home = () => {



 
        
  return (
    <div className="">

      <Banner/>

      <h2>Monte seu lanche. Faça seu Hamburguer, crie a batata do seu jeito e escolha seu refrigerante</h2>
      <section className="w-full flex items-center justify-center">
      <FormBurguer/>
      </section>
    </div>
  )
}

export default Home