import "./App.css";
import styled from "styled-components";

import Header from "./Layout/Header";
import SecondHeader from "./Layout/SecondHeader";
import Content from "./Layout/Content";

import React, { useState } from "react";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 300px;
  border: 1px solid #e0e0e0;
`;

function App() {
  const [hideSecondHeader, setSecondHeader] = useState(false);
  const [showContent, setContent] = useState(true);
  console.log(showContent)
  return (
    <div className="App">
      <Card>
        <Header title="card" />
        {
          !hideSecondHeader? (
            <SecondHeader
            hideSecondHeader={hideSecondHeader}
            handleSetSecondHeader={setSecondHeader}
            showContent={showContent}
            handleSetContent={setContent}
          />
          ):
          null
        }
        {
          showContent? (
            <Content />
          ): null
        }
      </Card>
    </div>
  );
}

export default App;
