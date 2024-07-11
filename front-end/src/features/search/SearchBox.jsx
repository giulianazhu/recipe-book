import styled from "styled-components";
import useFilters from "./useFilters";
import { device } from "../../styles/optionStyles";
import { StyledHeading } from "../../ui/Heading";
import { StyledBox } from "../../ui/Box";

const StyledSearchBox = styled(StyledBox)`
  @media (max-width: ${device.md}) {
    display: none;
  }
`;

export default function SearchBox({ handleSubmit }) {
  const { cuisines, diets, difficulties, isPending } = useFilters();
  if (isPending) return <h1>Loading</h1>;

  return (
    <StyledSearchBox>
      <StyledHeading as="h2">Search Recipe </StyledHeading>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Search</label>
        <input type="text" name="name" />
        <div>
          <h4>Filters</h4>
          <ul>
            <h5>Cuisines</h5>
            {cuisines.map((cuisine) => (
              // temp style to all li items
              <li key={cuisine.id} style={{ display: "inline" }}>
                <label htmlFor={cuisine.id}>{cuisine.name}</label>
                <input
                  type="radio"
                  //if checked false, auto left out from formdata
                  id={cuisine.id}
                  name="cuisineId"
                  value={cuisine.id}
                />
              </li>
            ))}
          </ul>
          <ul>
            <h5>Dietary Preference</h5>
            {diets.map((diet) => (
              <li key={diet.id} style={{ display: "inline" }}>
                <label htmlFor={diet.id}>{diet.name}</label>
                <input
                  type="radio"
                  id={diet.id}
                  name="dietId"
                  value={diet.id}
                />
              </li>
            ))}
          </ul>
          <ul>
            <h5>Difficulty Level</h5>
            {difficulties.map((difficulty) => (
              <li key={difficulty.id} style={{ display: "inline" }}>
                <label htmlFor={difficulty.id}>{difficulty.name}</label>
                <input
                  type="radio"
                  id={difficulty.id}
                  name="difficultyId"
                  value={difficulty.id}
                />
              </li>
            ))}
          </ul>
        </div>
        <button>Search</button>
      </form>
    </StyledSearchBox>
  );
}
