import {useState, useEffect} from 'react'

const API = import.meta.env.VITE_API
const API_LOCAL = "http://localhost:3000/requests"

function SelectStatus({states, id}) {
    const [statusUpdate, setStatusUpdate] = useState([])
    const [snackDelete, setSnackDelete] = useState([])
    const [updateSnack, setUpdateSnack] = useState([])

    useEffect(() => {
        fetch(`${API}/status`, {
            method: "GET",
            headers: {
                "Content-type" : "application/json",
            },
        })
        .then((resp) => resp.json())
        .then((data) => {
            setStatusUpdate(data)
        })
        
    }, [])

    //atualização automática ao mudar o status dos pedidos 
    const handleSelect =  (event) => {
        const newStatus = event.target.value
        setUpdateSnack(newStatus)

        fetch(`${API_LOCAL}/${id}`,{
            method: "PATCH",
            headers : {
                "Content-type" : "application/json",
            },
            body: JSON.stringify({status: newStatus})
        })
    }

    //deleta os dados 
    const deleteSnack = () => {
        fetch(`${API_LOCAL}/${id}`,{
            method: "DELETE",
            headers: {
                "Content-type" : "application/json",
            },
        })
        .then((resp) => resp.json())
        .then(() => {
            setSnackDelete(snackDelete.filter((snackDelete) => snackDelete.id !== id))
            window.location.reload()
        })
    }
  return (
    <div className="flex flex-col md:flex ">
        <select value="status" onChange={handleSelect} className="h-16 w-40 border-b-2 border-black lg:w-28" >
            <option value="">{updateSnack == ''? states : updateSnack}</option>
            {statusUpdate.map((update) => (
                <option key={update.id} value={update.state}>
                    {update.state}
                </option>
            ))}
        </select>
        <button onClick={deleteSnack} className="bg-red-400 border-2 border-red-600 rounded-sm m-2">Delete</button>

        
    </div>
  )
}

export default SelectStatus