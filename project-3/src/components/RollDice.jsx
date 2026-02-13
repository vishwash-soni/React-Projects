import styled from "styled-components";
const RollDice = ({currentDice,roleDice}) => {
    

    

    

  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        <img src={`./images/dice/dice_${currentDice}.png`} alt="" />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
};

export default RollDice;

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;

  .dice{
    cursor: pointer;
  }

  p {
    font-weight: 500;
    font-style: Medium;
    font-size: 24px;
    line-height: 100%;
    letter-spacing: 0%;
  }
`;
