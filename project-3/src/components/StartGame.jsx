import styled from "styled-components";
import { Button } from "./styled/Button";
const StartGame = ({ toggle }) => {
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
  .playbtn {
    width: 100%;
    display: flex;
    justify-content: end;
  }
  @media (max-width: 1300px) {
    flex-direction: column;
    margin-bottom: 70px;
    img {
      width: 400px;
    }
    .playbtn {
      justify-content: center;
    }

    .content {
      h1 {
        font-size: 70px;
      }
    }
  }

  @media (max-width: 660px) {
    max-width: 1180px;
    img {
      width: 400px;
    }

    .content {
      h1 {
        font-size: 50px;
      }
    }

    flex-direction: column;
    .playbtn {
      justify-content: center;
    }
  }

  @media (max-width: 460px) {
    max-width: 1180px;
    img {
      width: 200px;
    }

    .content {
      h1 {
        font-size: 25px;
        text-align: center;
        white-space: nowrap;
      }
    }

    flex-direction: column;
    .playbtn {
      justify-content: center;
    }
  }
`;
