import React from 'react'
import './App.css'
import Board from './components/Board/Board'
import Header from './components/Header/Header';

function App() {
  return (
    <div className="app">
      <Header/>
      <Board/>
    </div>
  );
}

export default App;