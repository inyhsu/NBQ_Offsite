import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab as brandIcons } from "@fortawesome/free-brands-svg-icons";
import React, { useState } from "react";

const SecondHeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  background: #4e4a4a;
  position: relative;
`;
const TabStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  color: #ffffff;
  font-weight: bold;
  &.is-active {
    color: #000000;
    background-color: #ffffff;
  }
`;
const SecondHeaderRight = styled.button`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  border: 0;
  background-color: transparent;
  border-left: 1px solid #666666;
  font-weight: bold;
  font-size: 16px;
  text-transform: uppercase;
  outline: none;
  cursor: pointer;
  color: #ffffff;
`;

const SecondHeader = ({hideSecondHeader, handleSetSecondHeader, showContent, handleSetContent}) => {
  const tabs = [
    { id: "a" },
    { id: "b", icon: "faTwitter" },
    { id: "c", icon: "faFacebook" },
    { id: "d", icon: "faInstagram" },
    { id: "e", icon: "faYoutube" },
  ];
  const [activeTab, setActiveTab] = useState("a");

  const handleTab = (id) =>{
    //set active tab
    setActiveTab(id)

    //check if card should show content
    if(id === 'a'){
      showContent = true;
    }else{
      showContent = false;
    }
    handleSetContent(showContent)
  }

  //render each Tab
  const renderTab = () =>
    tabs.map((t, i) => {
      return (
        <TabStyled
          key={i}
          className={activeTab === t.id ? "is-active" : ""}
          onClick={() => handleTab(t.id)}
        >
          {t.id === "a" ? (
            "ALL"
          ) : (
            <FontAwesomeIcon icon={t.id !== "a" ? brandIcons[t.icon] : ""} />
          )}
        </TabStyled>
      );
    });

    //hide SecondHeader when click
    const HandleSecondHeaderHide = () =>{
       handleSetSecondHeader(!hideSecondHeader)
    }

  return (
    <>
      <SecondHeaderWrapper>
          {renderTab()}
        <SecondHeaderRight onClick={() => HandleSecondHeaderHide()}>hide</SecondHeaderRight>
      </SecondHeaderWrapper>
    </>
  );
};

export default SecondHeader;
