import styled from "styled-components";

const Progess = styled.div`
  width: 100%;
  height: 23px;
  background-color: #e0e0e0;
  position: relative;
  text-align: right;
`;

const Percent = styled.span`
  height: 100%;
  background-color: #f7e700;
  position: absolute;
  left: 0;
  top: 0;
  width: ${(term) => `${term.count}%`};
`;

const Number = styled.span`
  position: relative;
  line-height: 23px;
  font-weight: bold;
  color: #474747;
  padding-right: 6px;
  font-size: 12px;
`;

const Term = ({ term, idx }) => {
  return (
    <tr key={idx}>
      <td>{term.name}</td>
      <td>
        <Progess>
          <Percent {...term} />
          <Number>{term.count}%</Number>
        </Progess>
      </td>
      <td>{term.count}</td>
    </tr>
  );
};

export default Term;
