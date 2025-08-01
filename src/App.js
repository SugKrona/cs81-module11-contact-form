import React from 'react';
import ContactForm from './ContactForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <img
          src="/images/TBSLOGO.png"
          alt="TripleByte Studio Logo"
          style={{ width: '400px', height: 'auto' }}
        />
      </div>
      <ContactForm />
    </div>
  );
}

export default App;