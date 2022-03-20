import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";

const HeaderBackground = styled.header`
  height: 40px;
  line-height: 40px;
  text-align: center;
  background: #3e8acc;
  position: relative;
`;
const HeaderTitle = styled.h1`
  color: #fff;
  font-size: 16px;
  margin: 0;
`;
const HeaderRight = styled.button`
  cursor: pointer;
  padding: 10px 10px;
  background: transparent;
  border: none;
  position: absolute;
  right: 0px;
  top: 0px;
  bottom: 0px;
`;

const Header = ({ title }) => {
  return (
    <HeaderBackground>
      <HeaderTitle>{title}</HeaderTitle>
      <HeaderRight>
        <FontAwesomeIcon icon={faQuestion} color="#005BAD" />
      </HeaderRight>
    </HeaderBackground>
  );
};

export default Header;
