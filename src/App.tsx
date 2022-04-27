import React from 'react';
import './App.css';
import UsersManagement from './solvedTask/UsersManagement';
import {Instruction} from './solvedTask/Instruction'

function App() {
  return (
    <div className="App">        
      <Instruction />
      <UsersManagement />
    </div>
  );
}

export default App;
