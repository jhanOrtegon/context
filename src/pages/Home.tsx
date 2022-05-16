import React, { useContext } from 'react'
import { ExampleContext } from '../Context/ExampleContext';

const Home = () => {
    const data = useContext(ExampleContext)

    return (
        <div>
            <h1>Home</h1>
            {
                JSON.stringify(data.dataExampleContext)
            }
        </div>
    )
}

export default Home
