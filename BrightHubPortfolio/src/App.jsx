import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Home'
import  About from './Pages/About'
import Services from './Pages/Services'
import Blog from './Pages/Blog'
import Contact from './Pages/Contact'
import Why from './Why'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
            <section id='home'><Home/></section>
          <section id='about'><About/></section>
          <section id='Services'><Services/></section>
          <section><Why/></section>
          <section id='blog'><Blog/></section>
          <section id='contact'><Contact/></section> 
        </div>
    </>
  )
}

export default App
