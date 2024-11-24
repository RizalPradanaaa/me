import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Project from './components/Project'
import Sertificate from './components/Sertificate'
import Skills from './components/Skills'
import { ThemeProvider } from './components/theme-provider'

function App() {
  return (
    <div className='font-custom scroll-smooth'>
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <Navbar/>
        <About/>
        <Skills/>
        <Project/>
        <Sertificate/>
        <Contact/>
        </ThemeProvider>
    </div>
  )
}

export default App
