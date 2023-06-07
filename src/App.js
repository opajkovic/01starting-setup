import React, {useCallback, useState} from 'react';

import './App.css';
import DemoOutput from './components/UI/Button/Demo/DemoOutput';
import Button from './components/UI/Button/Button';

function App() {
  const [showParagraf, setShowParagraf] = useState(false);

  const toggleParagrafHandler = useCallback(() => {
    setShowParagraf(prevShowParagraf => !prevShowParagraf)
  },[]);

  console.log("App running");

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput  show={false} />
      <Button onClick={toggleParagrafHandler} >Toggle Paragraf</Button>
    </div>
  );
}

export default App;
