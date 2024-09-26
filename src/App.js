import React from 'react';
import './App.css';
import ImageFetcher from './ImageFetcher';
import LoginForm from './login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>HOSTEL MANAGEMENT</h1>
      </header>
      <section >
        
          <LoginForm />
 
      </section>
      <section>
        <ImageFetcher />
      </section>
    </div>
  );
}

export default App;
