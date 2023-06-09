import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { colors } from "../../styles/color";
import { PuzzleIco } from "../../assets/icon";
import typo from "../../styles/typo";

const PartPageBtn = ({ props }) => {
  const [questList, setQuestList] = useState(props);

  //   colors
  let puzzleColor = colors.copper1;
  let borderColor = colors.copper2;
  let bgColor = colors.white;

  return (
    <Container>
      {questList.map((item, index) => {
        if (item.solved === true) {
          puzzleColor = colors.brown;
          borderColor = colors.brown;
          bgColor = colors.beige;
        } else {
          puzzleColor = colors.copper1;
          borderColor = colors.copper2;
          bgColor = colors.white;
        }
        return (
          <Background
            borderColor={borderColor}
            bgColor={bgColor}
            key={index + "part"}
            onClick={()=>{
              console.log('move to '+item.title+' page')
            }}
          >
            <PuzzleIco fill={puzzleColor} />
            <TitleBox>
              <typo.body.Body01>{item.title}</typo.body.Body01>
            </TitleBox>
          </Background>
        );
      })}
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  flex-wrap: wrap;
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  justify-content: center;
`;
const Background = styled.div`
  display: flex;
  width: 160px;
  height: 102px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  border: 1px solid
    ${(props) => (props.borderColor ? props.borderColor : colors.copper2)};
  background: ${(props) => (props.bgColor ? props.bgColor : colors.white)};

  /* dropShadow1 */
  box-shadow: 2px 4px 8px 0px rgba(0, 0, 0, 0.1);
`;
const TitleBox = styled.div`
  display: flex;
  width: 136px;
  flex-direction: column;
  word-break: keep-all;
  text-align: center;
`;
export default PartPageBtn;
