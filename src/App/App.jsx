import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import Slider from '../Pages/Slider/Slider';
import ProgressInfo from '../Pages/ProgressInfo/ProgressInfo';
import './App.scss';
import MainPageTable from '../Pages/MainPageTable/MainPageTable';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFoundPage from '../Pages/NotFoundPage/NotFoundPage';
function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route
					path="/"
					element={<MainPageTable />}
				/>
				<Route
					path="/flashcard"
					element={<Slider />}
				/>
				<Route
					path="/results"
					element={<ProgressInfo />}
				/>
				<Route
					path="*"
					element={<NotFoundPage />}
				/>
			</Routes>
			<Footer />
		</Router>
	);
}
export default App;
