import styled, { css } from "styled-components";
import { FaSearch } from "react-icons/fa";
import { device } from "../../styles/optionStyles";
import useFilters from "./useFilters";
import {
  StyledBox,
  StyledFlexBox,
  StyledFormRow,
  StyledHeading,
  StyledLabel,
} from "../../styles/StyledComponents";

const StyledSearchBox = styled(StyledFlexBox)`
  padding-inline: 1em;
  height: 100%;
  flex-direction: column;
  border: var(--color-yellow-100) 3px solid;
  border-radius: 15px;
  @media (max-width: ${device.md}) {
    display: none;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2em;
  & button {
    padding: 0.5em 1em;
    margin: 0.5em;
    align-self: flex-end;
    border-radius: 20px;
  }
`;

const StyledSearchInput = styled.span`
  width: 100%;
  display: flex;
  border: 2px black solid;
  border-radius: 15px;
  background-color: white;
  overflow: hidden;
  & input {
    all: initial;
    font: inherit;
    padding: 0.2em 0.5em;
  }
  & button {
    all: initial;
    margin-inline-start: auto;
    width: 3em;
    height: 3em;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-grey-500);
    cursor: pointer;
  }
  & svg {
    width: 100%;
  }
`;

const StyledFilter = styled.span`
  padding: 0.5em 0.8em;
  border: var(--color-orange-100) solid 1px;
  border-radius: 15px;
  background-color: var(--color-yellow-100);
  font-size: 0.8em;
  cursor: pointer;
  ${(props) =>
    props.checked &&
    css`
      color: red;
    `}
  & input, label {
    /* all: initial; */
    font: inherit;
    cursor: inherit;
  }
`;

export default function SearchBox({ handleSubmit, dispatch }) {
  const { cuisines, diets, difficulties, isPending } = useFilters();

  if (isPending) return <h1>Loading</h1>;

  function handleChange(e, key) {
    console.log("handleChange", key, e.target.value);
    dispatch({
      type: "setFilter",
      payload: { key, value: e.target.value },
    });
  }

  return (
    <StyledSearchBox>
      <StyledHeading as="h2">Search Recipe </StyledHeading>
      <StyledForm onSubmit={handleSubmit}>
        <StyledFormRow>
          <StyledLabel>Search by name</StyledLabel>
          <StyledSearchInput>
            <input
              type="text"
              name="q"
              onChange={(e) => handleChange(e, "q")}
            />
            <button type="submit">
              <FaSearch />
            </button>
          </StyledSearchInput>
        </StyledFormRow>
        <StyledFlexBox $direction="column">
          <StyledHeading as="h3">Filters</StyledHeading>
          <StyledBox>
            <StyledHeading as="h4">Cuisines</StyledHeading>
            <StyledFlexBox $wrap="wrap">
              {cuisines.map((cuisine) => (
                <span key={cuisine.id}>
                  <StyledFilter>
                    <label htmlFor={cuisine.id}>{cuisine.name}</label>
                    <input
                      type="radio"
                      //if checked false, auto left out from formdata
                      id={cuisine.id}
                      name="cuisineId"
                      value={cuisine.id}
                      onChange={(e) => handleChange(e, "cuisineId")}
                    />
                  </StyledFilter>
                </span>
              ))}
            </StyledFlexBox>
          </StyledBox>
          <StyledBox>
            <StyledHeading as="h4">Dietary Preference</StyledHeading>
            <StyledFlexBox $wrap="wrap">
              {diets.map((diet) => (
                <span key={diet.id}>
                  <label htmlFor={diet.id}>{diet.name}</label>
                  <input
                    type="radio"
                    id={diet.id}
                    name="dietId"
                    value={diet.id}
                    onChange={(e) => handleChange(e, "dietId")}
                  />
                </span>
              ))}
            </StyledFlexBox>
          </StyledBox>
          <StyledBox>
            <StyledHeading as="h4">Difficulty Level</StyledHeading>
            <StyledFlexBox $wrap="wrap">
              {difficulties.map((difficulty) => (
                <span key={difficulty.id}>
                  <label htmlFor={difficulty.id}>{difficulty.name}</label>
                  <input
                    type="radio"
                    id={difficulty.id}
                    name="difficultyId"
                    value={difficulty.id}
                    onChange={(e) => handleChange(e, "difficultyId")}
                  />
                </span>
              ))}
            </StyledFlexBox>
          </StyledBox>
        </StyledFlexBox>
        <button type="submit">Apply Filters</button>
      </StyledForm>
    </StyledSearchBox>
  );
}
