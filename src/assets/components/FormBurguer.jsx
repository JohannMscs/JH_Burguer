import { useState } from "react";
import burguer from "../../img/hamburger.png"

function FormBurguer() {
  const [clientname, setClientName] = useState("");
  const [bread, setBread] = useState("")
  const [meat, setMeat] = useState("")
  console.log(clientname, bread, meat)
  
  return (
    <div className="mt-10 mb-3 p-3 flex flex-col items-center bg-orange-300 md:w-80 md:ml-6 md:border-4 md:border-orange-800 md:rounded-md ">
        <img src={burguer} alt="" className="w-11" />
      <form action="" id="form-burguer" className="">
        <div className="div-container">
          <label htmlFor="clientName">Nome do cliente</label>
          <input
            type="text"
            id="clientName"
            placeholder="Digite seu nome"
            onChange={(e) => setClientName(e.target.value)} className="inputs"/>
        </div>
        <div className="div-container">
            <label htmlFor="bread">Escolha o seu pão</label>
            <select name="bread" id="bread" onChange={(e) => setBread(e.target.value)} className="inputs">
                <option value="">Selecione o seu pão</option>
                <option value="Integral">Integral</option>
            </select>
        </div>
        <div className="div-container">
            <label htmlFor="meat">Escolha sua carne
                <select name="meat" id="meat" onChange={(e) => setMeat(e.target.value)} className="inputs">
                    <option value="">Selecione a sua carne</option>
                    <option value="Picanha">Picanha</option>
                </select>
            </label>
        </div>
        <div className="div-container">
                <label htmlFor="additional">Adicionais</label>
                <div>
                    <input type="checkbox" /> bacon
                    <input type="checkbox" />cebola
                </div>

                <div>
                    <input type="submit" value="criar" />
                </div>
                
        </div>
      </form>
    </div>
  );
}

export default FormBurguer;
