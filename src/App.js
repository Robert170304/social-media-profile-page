import React from 'react';
import './App.css'
import NavigateForms from './components/NavigateForms';
import {Routes, Route} from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute'

function App() {

  return (
      <div className="App flex flex-col items-center w-full bg-slate-800">
      <Routes>
        <Route path='/' element={<NavigateForms />}/>
        <Route path='/profile' element={<ProtectedRoute />}  />
      </Routes>
      </div>
  );
}

export default App;
