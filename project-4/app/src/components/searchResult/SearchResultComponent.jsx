import styled from "styled-components";
import {BASE_URL} from "../../App"
import { Button } from "../../App";

const SearchResultComponent = ({ data }) => {
    console.log(BASE_URL)
  return (
    <FoodCardsContainer>
      <FoodCards>
        {data?.map(({name,text,image,price}) => (
          <FoodCard key={name}>
            <div className="food_img">
                <img src={BASE_URL + image} alt="img" />
            </div>
            <div className="food_info">
                <div className="info">
                    <h3>{name}</h3>
                    <p>{text}</p>
                </div>
                <Button>{price.toFixed(2)}</Button>
            </div>

          </FoodCard>
        ))}
      </FoodCards>
    </FoodCardsContainer>
  );
};


export default SearchResultComponent;
 

const FoodCardsContainer = styled.section`
  background-image: url("./bg.png");
  background-size: cover;
  height: calc(100vh - 200px);
  background-position: center;
  background-repeat: no-repeat;
`;

const FoodCards = styled.div``;

const FoodCard = styled.div`

`