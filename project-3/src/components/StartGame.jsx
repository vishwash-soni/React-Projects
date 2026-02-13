import styled from "styled-components";
import { Button } from "./styled/Button";
const StartGame = ({toggle}) => {
  return (
    <Container>
      <div>
        <img src="./images/dices.png" alt="Dices image" />
      </div>
      <div className="content">
        <h1>DICE GAME</h1>
        <div className="playbtn">
          <Button onClick={toggle}>Play Now</Button>
        </div>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  max-width: 1180px;
  height: 100vh;
  .content {
    h1 {
      font-size: 96px;
      white-space: nowrap;
    }
  }
  .playbtn{
    width:100%;
    display:flex;
    justify-content:end;
  }
`;


