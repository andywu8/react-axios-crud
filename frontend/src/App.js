import './App.css';
import React from 'react';
import Create from './components/Create';
import Read from './components/Read';
import Update from './components/Update';

function App() {
  return (
    <>
      <div>
        React Crud App
      </div>
      <Create />
      <Read />
      <Update />
    </>
  );
}

export default App;
