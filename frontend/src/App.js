import React from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Template from './pages/home';
import Support from './pages/support';
import Terms from './pages/terms';
import Website from './pages/website';

function CatchAll() {
  const currentPath = window.location.pathname;
  return <div>{currentPath}</div>;
}
function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Template/>}/>
        <Route path="support" element={<Support/>}/>
        <Route path="terms" element={<Terms/>}/>
        <Route path="website" element={<Website/>}/>
        <Route path="*" element={<CatchAll/>}/>
        </Routes>
    </Router>
  )
}

export default App;
