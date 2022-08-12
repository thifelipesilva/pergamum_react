
import { Container } from '@mui/system';
import { useState } from 'react';
import Form from './components/Form';
import Header from './components/Header';

const App = () => {

  const [data, setData] = useState([]);
  const dataAdd = (data) => {
    console.log(data);
    setData([...data, data]);
  }
  return (
    <div className="App"> 

      <Header/>
      <Container>
        <Form dataSubimited={data => dataAdd(data)} />
      </Container>
      
    </div>
  );
}

export default App;
