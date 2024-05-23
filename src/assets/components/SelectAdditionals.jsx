import { useState, useEffect } from "react";

const API = "http://localhost:3000/adicionais";
function SelectAdditionals({ handleChange, nameSelect }) {
  const [additionals, setAdditionals] = useState([]);

  useEffect(() => {
    fetch(`${API}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setAdditionals(data);
      });
  }, []);

  return (
    <select className=" text-gray-400 block mt-2 border-2 
    border-gray-800 rounded-md text-center md:w-32 h-10" onChange={handleChange} name={nameSelect}>
      <option value="">Escolha seu adicional</option>
      {additionals.map((additional) => (
        <option key={additional.id} value={additional.name}>
          {additional.name}
        </option>
      ))}
    </select>
  );
}

export default SelectAdditionals;
