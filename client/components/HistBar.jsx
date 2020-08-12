import React from 'react';
import styled from 'styled-components';

var BarBorder = styled.div`
  margin: 30px 10px;
  height: 24px;
  width: 200px;
  border-style: solid;
  border-width: 1px;
`
var Fill = styled.div`
  height: 100%;
  width: ${props => props.pct}%;
  background-color: black;
`

var StyledHistBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

var HistBar = (props) => {
  var [rating, count] = props.pair;
  var pct = Math.round((count / props.n) * 100);
  return (
    <StyledHistBar>
      <p>{rating}&#9733;</p>
      <BarBorder>
        <Fill pct={pct}></Fill>
      </BarBorder>
      <p>{count}</p>
    </StyledHistBar>
  )
};

export default HistBar;