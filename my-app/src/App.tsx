import React from 'react';
import classes from './App.module.css';
import resets from './components/_resets.module.css';
import Header from './components/Header/Header'; // Assuming Header is the default export

function App() {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <Header />
    </div>
  );
}

export default App;
