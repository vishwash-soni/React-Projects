import styled from "styled-components";

const Rules = () => {
  return (
    <RulesContainer>
      <h2>How to play dice game</h2>
      <ul>
        <li>Select any number</li>
        <li>Click on dice image</li>
        <li>
          after click on dice if selected number is equal to dice number you
          will get same point as dice{" "}
        </li>
        <li>if you get wrong guess then 2 point will be dedcuted </li>
      </ul>
    </RulesContainer>
  );
};

export default Rules;

const RulesContainer = styled.div`
  h2 {
    margin-bottom: 30px;
  }
  ul {
    padding: 0px;
  }
  li {
    list-style: none;
    line-height: 25px;

    font-weight: 500;
    font-style: Medium;
    font-size: 16px;
    letter-spacing: 0%;
  }
`;
