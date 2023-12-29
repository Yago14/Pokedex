import { Home } from "./pages/Home"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Details } from "./pages/details/Details"


function App() {

  

  return (
    <>
    
     
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/details/:name" element={<Details/>} />
        </Routes>
      </BrowserRouter>
     

    </>
  )
}

export default App
