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
                <Button>${price.toFixed(2)}</Button>
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
  min-height: calc(100vh - 200px);
  background-position: center;
  background-repeat: no-repeat;
  padding-bottom:30px ;
`;

const FoodCards = styled.div`
display:flex;
flex-wrap: wrap;
row-gap: 20px;
column-gap: 32px;
justify-content: center;
align-items: center;
padding-top:40px ;
margin: 0px 20px;
.food_info{
  display:flex;
  flex-direction:column;
  justify-content: space-between;
  align-items: end;
}
`;

const FoodCard = styled.div`
padding: 10px;
h3{
font-weight: 600;
font-size: 16px;
padding-bottom: 20px;
}

p{
font-weight: 400;
font-size: 12px;
}

display:flex;
width: 340px;
height: 167px;
opacity: 1px;
left: 720px;
border-radius: 19.45px;
border-width: 0.66px;



background: radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(165, 239, 255, 0.2) 0%, rgba(110, 191, 244, 0.0447917) 77.08%, rgba(70, 144, 213, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;



border: 0.66px solid;

border-image-source: radial-gradient(80.38% 222.5% at -13.75% -12.36%, #98F9FF 0%, rgba(255, 255, 255, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
radial-gradient(80.69% 208.78% at 108.28% 112.58%, #EABFFF 0%, rgba(135, 38, 183, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;


backdrop-filter: blur(13.368392944335938px)


`