import './styles/global.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import Projects from './components/Projects/Projects'
import BeforeAfter from './components/BeforeAfter/BeforeAfter'
import WorkProcess from './components/WorkProcess/WorkProcess'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />

        <WorkProcess />

        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
