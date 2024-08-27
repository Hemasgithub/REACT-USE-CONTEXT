// src/App.jsx
import React from 'react';
import { MyContextProvider } from './context/MyContext';
import ChildComponent from './components/ChildComponent';

function App() {
  return (
    <MyContextProvider>
      <div className="App">
        <h1>React with Vite and Context API</h1>
        <ChildComponent />
      </div>
    </MyContextProvider>
  );
}

export default App;

