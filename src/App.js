import React from 'react';

import { useState } from 'react';

import Form from './components/Form';
import Header from './components/Header';
import Wall from './components/Wall';

import './index.css';

const App = () => {

  const [data, setData] = useState([]);
  
  const dataAdd = (tobeAdded) => {
    setData([...data, tobeAdded]);
  }

  const deleteNote = () => {
    console.log('deletou');
    
  }

  return (
    <div className="App"> 
      
      <Header/>
      
      <section className='main'>
        <Form dataSubimited={tobeAdded => dataAdd(tobeAdded)} />
        <Wall data={data} deleteNote={deleteNote}/>
      </section>

    </div>
  );
}

export default App;
