import { useState } from 'react'
import './App.css'
import {Route,Routes} from 'react-router-dom'
import AddTicket from './pages/AddTicket'
import EditTicket from './pages/EditTicket'
import TicketList from './pages/TicketList'
import Navbar from './components/Navbar'

function App() {
  

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<TicketList/>}></Route>
        <Route path='/addticket' element={<AddTicket/>}></Route>
        <Route path='/editticket/:id' element={<EditTicket/>}></Route>
      </Routes>
    </>
  )
}

export default App
