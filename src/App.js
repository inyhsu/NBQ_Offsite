import './App.css';
import styled from 'styled-components';

import Header from './Layout/Header'

const Card = styled.div`
  width: 400px;
  height: 300px;
  border: 1px solid #e0e0e0;
`

function App() {
  return (
    <div className="App">
      <Card>
        <Header title="card"/>
      </Card>
    </div>
    
  );
}

export default App;
