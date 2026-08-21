import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import ReactGA from 'react-ga4'
import { GA_TRACKING_ID } from './config/siteConfig'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Portfolio from './pages/Portfolio'
import CaseStudy from './pages/CaseStudy'
import Contact from './pages/Contact'
import Resume from './pages/Resume'

// Initialize GA
if (GA_TRACKING_ID && GA_TRACKING_ID !== 'G-XXXXXXXXXX') {
  ReactGA.initialize(GA_TRACKING_ID)
}

// Page view tracking component
function PageViewTracker() {
  const location = useLocation()

  useEffect(() => {
    if (GA_TRACKING_ID && GA_TRACKING_ID !== 'G-XXXXXXXXXX') {
      ReactGA.send({ hitType: 'pageview', page: location.pathname + location.search })
    }
  }, [location])

  return null
}

export default function App() {
  return (
    <BrowserRouter basename="/">
      <ScrollToTop />
      <PageViewTracker />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/:slug" element={<CaseStudy />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
