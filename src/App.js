import React from 'react';
import ContactForm from './ContactForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <div style={{ textAlign: 'center', marginBottom: '30px', color: '#333' }}>
        <h1 style={{ fontSize: '2.5em' }}>TripleByte Studio</h1>
      </div>
      <ContactForm />
    </div>
  );
}

export default App;