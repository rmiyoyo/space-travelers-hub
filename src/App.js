import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Mission from './pages/Mission';

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/missions" exact element={<Mission />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;