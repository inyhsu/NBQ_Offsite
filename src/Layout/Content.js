import styled from "styled-components";

import Term from '../Content/Term'
import Terms from "../terms.json";

const ContentWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  h2 {
    margin: 0;
    font-size: 14px;
    color: #9e9e9e;
    text-transform: uppercase;
    padding: 6px;
  }
  table {
    width: 100%;
    border-spacing: 0;
    thead tr {
      text-transform: uppercase;
      font-size: 12px;
      th {
        border-bottom: 1px solid #e0e0e0;
        padding-bottom: 4px;
        &:first-child {
          width: 25%;
          text-align: left;
        }
        &:last-child {
          width: 25%;
          text-align: right;
        }
      }
    }
    tbody tr {
      td {
        padding: 10px 0;
      }
      td:first-child {
        width: 25%;
        font-weight: bold;
      }
      td:last-child {
        width: 25%;
        text-align: right;
      }
    }
  }
`;

const TabelWrapper = styled.div`
  flex: 1 1 auto;
  overflow-y: auto;
  padding: 0 15px;
  height: 0;
`;

const Content = () => {
  return (
    <ContentWrapper>
      <h2>top terms</h2>
      <TabelWrapper>
        <table>
          <thead>
            <tr>
              <th>Terms</th>
              <th>% of Total Posts</th>
              <th># Of Posts</th>
            </tr>
          </thead>
          <tbody>
            {Terms.map((t, i) => (
                <Term term={t} idx={i} key={i}/>
            ))}
          </tbody>
        </table>
      </TabelWrapper>
    </ContentWrapper>
  );
};

export default Content;
