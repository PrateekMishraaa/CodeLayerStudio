import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import HomePage from "./Pages/HomePage.jsx"
import About from "./Pages/About.jsx"
import Price from "./Pages/Price.jsx"
// import Projects from "./Pages/Projects.jsx"
import Contact from "./Pages/Contact.jsx"
import Services from './Pages/Services.jsx'
import AllPrice from './Pages/AllPrice.jsx'
const App = () => {
  return (
 <>
  <Router>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/about' element={<About/>}/>
      {/* <Route path='/projects' element={<Projects/>}/> */}
      <Route path='/our-services' element={<Services/>}/>
      <Route path='/packages' element={<Price/>}/>
      <Route path='/contact-us' element={<Contact/>}/>
      <Route path='/Prices' element={<AllPrice/>}/>
    </Routes>
  </Router>
 </>
  )
}

export default App
