import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'


import Home from './routes/Home'
import Pricing from './routes/Pricing'
import Navbar from './componets/Navbar'
import Training from './routes/Training'
import Contact from './routes/Contact'


const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/pricing' element={<Pricing/>}/>
        <Route path='/training' element={<Training/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
