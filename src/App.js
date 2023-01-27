import logo from './logo.svg'
import MainSection from './components/MainSection'
import Header from './components/Header'
import './App.css'
import Button from './components/Button'
import About from './components/About'
import Interest from './components/Interest'

function App() {
  return (
    <div className="buisnessCard">
      <MainSection />
      <Header />
      <Button />
      <About />
      <Interest />
    </div>
  )
}

export default App
