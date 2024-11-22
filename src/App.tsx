import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Project from './components/Project'
import Sertificate from './components/Sertificate'
import Skills from './components/Skills'

function App() {
  return (
    <div className='font-custom'>
    <Navbar/>
    <About/>
    <Skills/>
    <Project/>
    <Sertificate/>
    <Contact/>
    </div>
  )
}

export default App
