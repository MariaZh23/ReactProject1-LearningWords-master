import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Slider from '../Slider/Slider'
import Table from '../Table/Table'
import ProgressInfo from '../ProgressInfo/ProgressInfo'
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
    <Route path="/table" element= { < Table/> } />
    <Route path="/flashcard" element= { < Slider/> } />
    <Route path="/results" element= { < ProgressInfo/> } />
    <Route path="*" element= { < NotFoundPage/> } />
    </Routes>
    <Footer />
    </Router> 
  )
}
export default App
