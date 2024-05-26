import {useState, useEffect} from 'react'

const API = "http://localhost:3000"

function SelectStatus({states, id }) {
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

    //atualização automática ao mudar o status do select 
    const handleSelect =  (event) => {
        const newStatus = event.target.value
        setUpdateSnack(newStatus)

        fetch(`${API}/requests/${id}`,{
            method: "PATCH",
            headers : {
                "Content-type" : "application/json",
            },
            body: JSON.stringify({status: newStatus})
        })
    }

    //deleta os dados 
    const deleteSnack = () => {
        fetch(`${API}/requests/${id}`,{
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
        <select value="status" onChange={handleSelect} className="h-16 w-36 border-b-2 border-black md:w-28" >
            <option value="">{updateSnack == ''? states : updateSnack}</option>
            {statusUpdate.map((update) => (
                <option key={update.id} value={update.state}>
                    {update.state}
                </option>
            ))}
        </select>
        <button onClick={deleteSnack}>Delete</button>

        
    </div>
  )
}

export default SelectStatus