import './App.css'
import About from './components/About'
import Features from './components/Featuers'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Newsletter from './components/Newsletter'
import Pricing from './components/Pricing'
import Footer from './components/shared/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Features />
      <About />
      <Pricing />
      <Newsletter />
      <Footer />
    </>
  )
}

export default App
