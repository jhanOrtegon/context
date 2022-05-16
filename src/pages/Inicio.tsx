import React, { useContext, useState } from 'react'
import { ExampleContext } from '../Context/ExampleContext';

const Inicio = () => {

    const [formValues, setFormValues] = useState({
        apellido: ''
    })

    const { dataExampleContext, setDataExampleContext } = useContext(ExampleContext)

    const handleSubmit = (e: any) => {
        e.preventDefault()
        setDataExampleContext!({ ...dataExampleContext, ...formValues })
    }


    return (
        <div>
            <h1>Inicio</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="apellido" onChange={(e) => {
                    setFormValues({ ...formValues, [e.target.name]: e.target.value })
                }} />
            </form>
            <hr />
            <h1>{JSON.stringify(dataExampleContext)}</h1>
        </div>
    )
}

export default Inicio