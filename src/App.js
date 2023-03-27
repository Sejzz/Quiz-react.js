
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/layout';
import Authenticate from './components/Authenticate';
import Login from './components/Login';
import Quiz from './components/Quiz';
import Result from './components/Result'
import { useState } from 'react';

function App() {
  
  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <div>
    
  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
       <Route element={<Authenticate/>}>
          <Route path="/" element={<Layout />}>
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/result" element={<Result />} />
          </Route>
          </Route>
       </Routes>
      
    </BrowserRouter >
   </div>
  );
}

export default App;
