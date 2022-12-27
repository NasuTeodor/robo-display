import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Assembly from './Assembly';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Assembly />} />
      </Routes>
    </Router>
  );
}

export default App;
