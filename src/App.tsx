import React from 'react';
import classes from './App.module.css';
import resets from './components/_resets.module.css';
import Header from './components/Header/Header'; // Assuming Header is the default export
import './App.css'; // Import your CSS file

function App() {
  return (
    <div className='App-header'>
      <Header />
    </div>
  );
}

export default App;
