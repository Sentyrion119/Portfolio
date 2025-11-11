import './index.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header.tsx'
import Portfolio from './pages/Portfolio';

function App() {
    return (
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={<Portfolio />} />
            </Routes>
        </Router>
    )
}

export default App;

