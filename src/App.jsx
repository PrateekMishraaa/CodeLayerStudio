import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import HomePage from "./Pages/HomePage.jsx"
import About from "./Pages/About.jsx"
import Price from "./Pages/Price.jsx"

import Contact from "./Pages/Contact.jsx"
import Services from './Pages/Services.jsx'
import AllPrice from './Pages/AllPrice.jsx'
import Technologies from './Pages/Technologies.jsx'
import SignUp from './Pages/SignUp.jsx'
const App = () => {
  return (
 <>
  <Router>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/technologies' element={<Technologies/>}/>
      <Route path='/our-services' element={<Services/>}/>
      <Route path='/packages' element={<Price/>}/>
      <Route path='/contact-us' element={<Contact/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/Prices' element={<AllPrice/>}/>
    </Routes>
  </Router>
 </>
  )
}

export default App
