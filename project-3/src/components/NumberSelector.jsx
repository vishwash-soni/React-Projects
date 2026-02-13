import styled from "styled-components";
const NumberSelector = ({setError, error, selectedNum, setSelectedNum }) => {
  const nums = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler = (value)=>{
    selected(value)
    setError("");
  }
  const selected = (num) => {
    setSelectedNum(num);
  };

  return (
    <NumberSelectorContainer>
      <div className="error">
        <p>{error}</p>
      </div>

      <div className="flex">
        {nums.map((value, idx) => {
          return (
            <Box
              isSelected={value === selectedNum}
              onClick={()=>numberSelectorHandler(value)}
              key={idx}
            >
              {value}
            </Box>
          );
        })}
      </div>
      <div className="select_num">
        <p>Select Number</p>
      </div>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const Box = styled.div`
  /* DiceSelectetBTN */

  width: 72px;
  height: 72px;

  background: white;
  color: black;
  border: 1px solid black;
  /* Inside auto layout */
  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 700;
  font-style: Bold;
  font-size: 24px;
  line-height: 100%;
  letter-spacing: 0%;

  background-color: ${(props) =>
    props.isSelected === true ? "black" : "white"};
  color: ${(props) => (props.isSelected === true ? "white" : "black")};
`;

const NumberSelectorContainer = styled.div`
    .error{
        display:flex;
        justify-content:end;
    }
  .error p {
    font-weight: 400;
    font-style: Regular;
    font-size: 24px;
    color: red;
  }
  .select_num {
    display: flex;
    justify-content: end;
  }
  .flex {
    display: flex;
    gap: 24px;
  }
  p {
    font-size: 24px;
    font-weight: 700;
  }
`;
