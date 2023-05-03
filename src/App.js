import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import ColorChanger from './ColorChanger';
import ContactForm from './ContactForm';
import TextInput from './TextInput';

const HelloCapt = ({ color }) => {
  const style = { color };
  return <h1 style={style}>Hello Captain Halen!</h1>;
}

const App = () => {
  const [textColor, setTextColor] = useState('#ffff00');

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

          <HelloCapt color={textColor} />

        <div>
          <ColorChanger setTextColor={setTextColor} />
        </div>

        <div>
          <ContactForm />
        </div>

        <div>
          <TextInput />
        </div>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
