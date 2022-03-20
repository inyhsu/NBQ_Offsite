import styled from "styled-components";

const FooterWrapper = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  background-color: #4e4a4a;

  color: #fff;
  font-weight: bold;
  height: 25px;
  line-height: 25px;
`;

const Footer = () => {
  return <FooterWrapper>Footer</FooterWrapper>;
};

export default Footer;
