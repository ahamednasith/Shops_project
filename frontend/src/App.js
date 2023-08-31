import React from 'react';
import {BrowserRouter as Router,Route,Routes, Navigate} from 'react-router-dom'
import Template from './pages/home';
import Support from './pages/support';
import Terms from './pages/terms';
import Website from './pages/website';

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Template/>}/>
        <Route path="support" element={<Support/>}/>
        <Route path="terms" element={<Terms/>}/>
        <Route path="website" element={<Website/>}/>
        <Route path="*" element={<Navigate to="/website" />} />
      </Routes>
    </Router>
  )
}

export default App;
