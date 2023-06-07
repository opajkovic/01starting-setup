import React, {useState} from 'react';

import './App.css';

function App() {
  const [showParagraf, setShowParagraf] = useState(false);

  const toggleParagrafHandler = () => {
    setShowParagraf(prevShowParagraf => !prevShowParagraf)
  }

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {showParagraf && <p>This is new!</p>}
      <button onClick={toggleParagrafHandler} >Toggle Paragraf</button>
    </div>
  );
}

export default App;
