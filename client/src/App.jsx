import { Routes, Route, useLocation } from 'react-router-dom'
import Landing from './Views/Landing/Landing.jsx'
import Navbar from './Components/Navbar/Navbar';
import Home from './Views/Home/Home.jsx'
import Details from "./Views/Details/Details"

import Formulario from "./Views/Formulario/Formulario"
import '../src/styles/index.css'

function App() {
  const path = useLocation().pathname
  return (
    <div>
      {path !== '/' && <Navbar/>}
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />
        <Route path='/detail/:id' element = {<Details/>}/>

        <Route path='/formulario' element = {<Formulario/>}/>
      </Routes>
    </div>
  )
}

export default App
