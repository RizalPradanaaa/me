import './App.css'
import About from './components/About'
import Navbar from './components/Navbar'
import Sertificate from './components/Sertificate'
import Skills from './components/Skills'

function App() {
  return (
    <div className='font-custom'>
    <Navbar/>
    <About/>
    <Skills/>
    <Sertificate/>
    </div>
  )
}

export default App
