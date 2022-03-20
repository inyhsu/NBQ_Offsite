import "./App.css";
import styled from "styled-components";

import Header from "./Layout/Header";
import SecondHeader from "./Layout/SecondHeader";

import React, { useState } from "react";

const Card = styled.div`
  width: 400px;
  height: 300px;
  border: 1px solid #e0e0e0;
`;

function App() {
  const [hideSecondHeader, setSecondHeader] = useState(false);

  return (
    <div className="App">
      <Card>
        <Header title="card" />
        {
          !hideSecondHeader? (
            <SecondHeader
            hideSecondHeader={hideSecondHeader}
            handleSetSecondHeader={setSecondHeader}
          />
          ):
          null
        }
      </Card>
    </div>
  );
}

export default App;
