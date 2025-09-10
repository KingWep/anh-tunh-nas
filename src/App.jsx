import React from 'react'
import Nav from './component/Nav'
import Main from './component/Main'
import Footer from './component/Footer'
import Mainlayout from './layout/Mainlayout'
import { BrowserRouter } from 'react-router-dom'
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Mainlayout/>
      </BrowserRouter>
    </div>
  )
}
