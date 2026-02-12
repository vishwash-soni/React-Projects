import styled from "styled-components";

const StartGame = () => {
  return (
    <Container>
      <div>
        <img src="./images/dices.png" alt="Dices image" />
      </div>
      <div className="content">
        <h1>DICE GAME</h1>
        <div className="playbtn">
          <Button>Play Now</Button>
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

const Button = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 18px;
  gap: 10px;

  width: 220px;
  height: 44px;

  background: #000000;
  color: white;
  border-radius: 5px;
  font-size: 16px;
  transition: 0.2s background ease-in;
  &:hover {
    background-color: white;
    color: black;
    transition: 0.2s background ease-in;
  }
`;
