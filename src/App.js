import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main.jsx';

import './scss/main.scss';

function App() {
  return (
    <div className="App">
      <main className="main">
        <BrowserRouter>
          <Routes>
            <Route exact element={<Main />} path="/" />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
