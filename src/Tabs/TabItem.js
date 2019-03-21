import styled from 'styled-components';

const TabItem = styled.li`
  display: inline-block;
  box-sizing: border-box;
  list-style: none;
  height: 60px;
  padding: 0 20px;
  line-height: 60px;
  border-bottom: 3px solid #6200ee;
  color: #c5a1f8;
  transition: background ease-in 0.4s, border ease-in 0.4s, color ease-in 0.4s;
  cursor: pointer;
  margin-bottom: -1px;
  background: #6200ee;
  :hover {
    background: #873df2;
    transition: background ease-out 0.9s, border ease-out 0.4s,
      color ease-out 0.4s;
    border-bottom: 3px solid #873df2;
  }
  ${props => {
    if (props.active) {
      return `
      cursor: auto;
      border-bottom: 3px solid white;
      color: white;
      transition: background 0.4s, border ease-out 0.3s, color ease-out 0.3s;
      :hover {
      background: #6200ee;
      transition: background ease-out 0.4s, border ease-out 0.4s, color ease-out 0.4s;
      border-bottom: 3px solid white;
  }
  `;
    }
  }}
`;

export default TabItem;
