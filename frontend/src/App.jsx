import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Botao from './components/Botao/Botao'
import SearchBar from './components/SearchBar/SearchBar'
import InputField from './components/InputField/InputField'
import CartItem from './components/CartItem/CartItem'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <SearchBar/>
      <Botao/>
      <InputField  
      label="Nome"/>
      <Footer/>
      <CartItem 
      book={{
      id: 1,
      title: "Livro exemplo 1",
      author: "Autor exemplo 1",
      price: 49.99
      }} 
      onRemove={(id) => console.log('Remover livro', id)} 
      />
    </>
  )
}

export default App
