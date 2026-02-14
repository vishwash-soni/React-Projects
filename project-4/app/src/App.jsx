import styled from "styled-components";
import { useEffect, useState } from "react";
import SearchResultComponent from "./components/searchResult/SearchResultComponent";


export const BASE_URL = `http://localhost:9000`;

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFoodData = async () => {
      try {
        setLoading(true);

        const response = await fetch(BASE_URL);
        const json = await response.json();

        setData(json);
      } catch (err) {
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchFoodData();
  }, []);

  if (error) return <div>{error}</div>;
  if (loading) return <div>Loading...</div>;

  return (
    <Container>
      <TopContainer>
        <div className="logo">
          <img src="./logo.svg" alt="logo" />
        </div>
        <div className="search">
          <input type="text" placeholder="Search Food..." />
        </div>
      </TopContainer>

      <FilterContainer>
        <Button>All</Button>
        <Button>Breakfast</Button>
        <Button>Lunch</Button>
        <Button>Dinner</Button>
      </FilterContainer>

      <SearchResultComponent data = {data}></SearchResultComponent>
      
    </Container>
  );
};

export default App;


const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;
  background-color: #323334;
`;

const TopContainer = styled.section`
  min-height: 140px;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  align-items: center;

  .search {
    input {
      width: 285px;
      height: 40px;
      background-color: transparent;
      opacity: 1;
      border-radius: 5px;
      border: 1px solid red;
      font-family: Inter;
      font-weight: 400;
      font-style: Regular;
      font-size: 16px;
      line-height: 100%;
      padding-left: 12px;
    }
  }
`;

const FilterContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 12px;
  align-items: center;
  padding-bottom: 30px;
`;
export const Button = styled.button`
  width: 96;
  height: 31;
  border-radius: 5px;
  padding-top: 6px;
  padding-right: 12px;
  padding-bottom: 6px;
  padding-left: 12px;
  background-color: #ff4343;
  border: none;

  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: 0%;
  color: white;
`;


