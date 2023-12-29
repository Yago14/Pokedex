import { Home } from "./pages/Home"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Details } from "./pages/details/Details"
import { ThemeProvider } from "./contexts/theme-contex"
import { ThemeTogglerButton } from "./components/theme-toggler-button/Toggler-button"

function App() {

  

  return (
    <div >
    
     
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/details/:name" element={<Details/>} />
        </Routes>
      </BrowserRouter>
     

    </div>
  )
}

export default App
