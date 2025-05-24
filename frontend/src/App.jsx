import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Botao from './components/Botao/Botao'
import SearchBar from './components/SearchBar/SearchBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <SearchBar></SearchBar>
      <Botao></Botao>
      <Footer></Footer>
    </>
  )
}

export default App
