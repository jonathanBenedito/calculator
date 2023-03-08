import React, { useState } from 'react';
import Calculator from './components/calculator';
import './styles/reset/style.css';
import './styles/global/style.css'

function App() {

  return (
    <div className="main">
      <Calculator />
    </div>
  );
}

export default App;
