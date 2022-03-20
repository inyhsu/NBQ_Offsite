import "./App.css";
import styled from "styled-components";

import Header from "./Layout/Header";
import SecondHeader from "./Layout/SecondHeader";
import Content from "./Layout/Content";
import Footer from "./Layout/Footer";

import React, { useState } from "react";

const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 300px;
  border: 1px solid #e0e0e0;
  text-transform: uppercase;
`;

function App() {
  const [hideSecondHeader, setSecondHeader] = useState(false);
  const [showContent, setContent] = useState(true);
  return (
    <div className="App">
      <Card>
        <Header title="card" />
        {!hideSecondHeader ? (
          <SecondHeader
            hideSecondHeader={hideSecondHeader}
            handleSetSecondHeader={setSecondHeader}
            showContent={showContent}
            handleSetContent={setContent}
          />
        ) : null}
        {showContent ? <Content /> : null}
        <Footer />
      </Card>
    </div>
  );
}

export default App;
