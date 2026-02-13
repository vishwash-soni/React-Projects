import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";
import styled from "styled-components";
import { use, useState } from "react";
import { Button,OutLineBtn } from "./styled/Button";
import Rules from "./Rules";

const GamePlay = () => {
  const [selectedNum, setSelectedNum] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [score, setScore] = useState(0);
  const [error, setError] = useState("");
  const [showRules,setShowRules] = useState(false)

  const genetareRandomFunc = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const roleDice = () => {
    const randomNum = genetareRandomFunc(1, 6);
    setCurrentDice(randomNum);

    if(!selectedNum){
        setError("You have not selected any number");
        return;
    }
    if(selectedNum === randomNum){
        setScore((prev)=> prev+randomNum)
    }else{
        setScore((prev)=> prev-2)
    }
    setSelectedNum(undefined)
  };

  const resetScore = ()=>{
    setScore(0);
  }

  

  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score = {score}></TotalScore>
        <NumberSelector
        setError = {setError}
            error = {error}
          selectedNum={selectedNum}
          setSelectedNum={setSelectedNum}
        ></NumberSelector>
      </div>
      <RollDice
        currentDice={currentDice}
        roleDice={roleDice}
      ></RollDice>
      <div className="btns">
        <OutLineBtn onClick={resetScore}>Reset Score</OutLineBtn>
         <Button
         onClick={()=>!setShowRules((prev)=>!prev)}
         >{showRules ? "Hide " : "Show "}Rules</Button>
      </div>
      <div className="rules">
        {showRules ? <Rules /> : null}
      </div>
    </MainContainer>
    
  );
};

export default GamePlay;

const MainContainer = styled.div`
  .top_section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 30px;
  }
  .btns{
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    gap:10px;
    margin-top: 20px;
  }
  .rules{
    display:flex;
    align-items:center;
    justify-content:center;
    margin:20px 0px;
  }
`;
