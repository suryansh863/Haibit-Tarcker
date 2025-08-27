import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HabitTracker from './pages/HabitTracker';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HabitTracker />} />
      </Routes>
    </Router>
  );
}

export default App;
