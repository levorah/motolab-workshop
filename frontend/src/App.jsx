import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom'
import Footer from './components/footer'
import Header from './components/header'
import Home from './pages/home'
import Services from './pages/services'
import About from './pages/about'
import Contact from './pages/contact'

function App() {

  return (
    <>

      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <div className="flex-grow bg-gray-100">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </>
  )
}

export default App
