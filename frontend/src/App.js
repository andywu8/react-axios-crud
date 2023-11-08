import './App.css';
import React from 'react';
import Create from './components/Create';
import Read from './components/Read';
import Update from './components/Update';
import List from './components/List';


function App() {
  return (
    <>
      <div>
        React Crud App
      </div>
      <Create />
      <List />
      <Read />
      <Update />

    </>
  );
}

export default App;
