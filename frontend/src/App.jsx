import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Footer/Footer'
import Botao from './components/Botao/Botao'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Botao></Botao>
      <Footer></Footer>
    </>
  )
}

export default App
