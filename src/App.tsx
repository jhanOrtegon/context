import { useState } from "react";
import { ExampleContext } from "./Context/ExampleContext";
import AppRouters from "./Routers/AppRouters";

function App() {

  const initialState = {
    name: 'jhanCarlos',
    apellido: 'ortegon'
  }

  const [dataExampleContext, setDataExampleContext] = useState(initialState)

  return (
    <ExampleContext.Provider value={{ dataExampleContext, setDataExampleContext }}>
      <AppRouters />
    </ExampleContext.Provider>
  );
}

export default App;
