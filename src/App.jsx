import React from 'react'
import Nav from './Nav/Nav'
import Home from './Home/Home'
import About from './About/About'
import Services from './Services/Services'
import Work from './Work/Work'
// import Footer from './Footer/Footer'
function App() {
  return (
    <div>
      <Nav />
      <Home />
      <About />
      <Services />
      <Work />
      {/* <Footer /> */}
    </div>
  )
}

export default App