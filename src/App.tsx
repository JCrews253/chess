import React from 'react'
import './App.css'
import Board from './components/Board/Board'
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';

function App() {
  return (
    <div className="app">
      <Header/>
      <div className="main">
        <Board/>
        <SideBar/>
      </div>
    </div>
  );
}

export default App;
