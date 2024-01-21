import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Slider from '../Slider/Slider'
import '../App/App.scss'
import MainPageTable from '../MainPageTable/MainPageTable'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NotFoundPage from '../NotFoundPage/NotFoundPage'
function App() {
  return (
    <Router>
    <Header />
    <Routes>
    <Route path="/" element= { < MainPageTable/> } />
    <Route path="/flashcard" element= { < Slider/> } />
    <Route path="*" element= { < NotFoundPage/> } />
    </Routes>
    <Footer />
    </Router>
  )
}
export default App
