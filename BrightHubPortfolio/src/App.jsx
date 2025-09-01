import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Home'
import  About from './Pages/About'
import Services from './Pages/Services'
// import Projects from './Pages/Projects'
import Contact from './Pages/Contact'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
            <section id='home'><Home/></section>
          <section id='about'><About/></section>
          <secton id='Services'><Services/></secton>
          {/* <section id='projects'><Projects/></section> */}
          {/* <section id='projects'><Projects/></section> */}
          <section id='contact'><Contact/></section> 
        </div>
    </>
  )
}

export default App
