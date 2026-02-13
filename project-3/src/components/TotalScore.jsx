import styled from "styled-components";

const TotalScore = ({score}) => {
  return (
    <ScoreContainer>
      <h1>{score}</h1>
      <p>Total Score</p>
    </ScoreContainer>
  );
};

export default TotalScore;

const ScoreContainer = styled.div`
    max-width:200px;
    text-align: center;
  h1 {
    font-weight: 500;
    font-size:50px;
    color: #000000;
    line-height: 50px;
  }
  p {
    font-size: 24px;
    font-weight: 500;
  }
`;
