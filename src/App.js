import React, { useState } from 'react';

//import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showMessage = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      showMessage('Dark mode has been enabled.', 'success');
      document.title = 'Text Utils - Dark mode';
    } else {
      setMode('light');
      showMessage('Light mode has been enabled.', 'success');
      document.title = 'Text Utils - Light mode';
    }
  };

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} aboutText="About Us" />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm enterText="Enter your text here" />          
      </div>
    </>
  );
}

export default App;
