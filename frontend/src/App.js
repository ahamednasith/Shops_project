import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Template from './pages/template';
import Support from './pages/support';
import Terms from './pages/terms';

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Template/>}/>
        <Route path="support" element={<Support/>}/>
        <Route path="terms" elements={<Terms/>}/>
      </Routes>
    </Router>
  )
}

export default App;
