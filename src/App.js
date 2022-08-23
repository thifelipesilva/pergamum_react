import React from 'react';

import { useState } from 'react';

import Form from './components/Form';
import Header from './components/Header';
import Wall from './components/Wall';

import './index.css';

const App = () => {

  const [data, setData] = useState([]);
  
  const dataAdd = (data) => {
    
    setData([ data]);
  }

  return (
    <div className="App"> 
      
      <Header/>
      
      <section className='main'>
        <Form dataSubimited={data => dataAdd(data)} />
        <Wall data={data}/>
      </section>

    </div>
  );
}

export default App;
