import styled, { css } from "styled-components";
import { FaSearch } from "react-icons/fa";
import { device } from "../../styles/optionStyles";
import useFilters from "./useFilters";
import {
  StyledBox,
  StyledButton,
  StyledFlexBox,
  StyledFormRow,
  StyledHeading,
  StyledLabel,
} from "../../styles/StyledComponents";
import useCustomContext from "../../hooks/useCustomContext";
import { FilterContext } from "../../contexts/SearchContext";

const StyledSearchBox = styled(StyledFlexBox)`
  padding-inline: 1em;
  max-width: 100%;
  height: 100%;
  flex-direction: column;
  border: var(--color-yellow-100) 3px solid;
  border-radius: 15px;
  @media (max-width: ${device.md}) {
    display: none;
  }
`;

const StyledForm = styled.form`
  height: 100%;
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
    background-color: var(--color-grey-300);
    cursor: pointer;
  }
  & svg {
    width: 100%;
  }
`;

const StyledFilter = styled.label`
  padding: 0.5em 0.8em;
  border: var(--color-orange-100) solid 1px;
  border-radius: 15px;
  background-color: var(--color-yellow-100);
  font-size: 0.8em;
  cursor: pointer;
  ${(props) =>
    props.$checked &&
    css`
      background-color: var(--color-sky-500);
    `}
  & label {
    font: inherit;
    cursor: inherit;
  }
  & input {
    display: none;
  }
`;

export default function SearchBox() {
  const { cuisines, diets, difficulties } = useFilters();

  // const cuisines = [{ id: 1, name: "cuisineName" }];
  // const diets = [{ id: 1, name: "cuisineName" }];
  // const difficulties = [{ id: 1, name: "cuisineName" }];

  const {
    filters: { cuisineId = "", dietId = "", difficultyId = "", q = "" },
    setFilter,
    handleSubmit,
    resetFilters,
  } = useCustomContext(FilterContext);

  return (
    <StyledSearchBox>
      <StyledHeading as="h2">Search Recipe </StyledHeading>
      <StyledForm onSubmit={handleSubmit}>
        <StyledFormRow>
          <StyledLabel htmlFor="q">Search by name</StyledLabel>
          <StyledSearchInput>
            <input
              type="text"
              name="q"
              id="q"
              value={q}
              onChange={(e) => setFilter("q", e.target.value)}
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
                <StyledFilter
                  $checked={parseInt(cuisineId) === parseInt(cuisine.id)}
                  htmlFor={cuisine.name}
                  key={cuisine.id}
                >
                  {cuisine.name}
                  <input
                    type="radio"
                    id={cuisine.name}
                    name="cuisineId"
                    value={cuisine.id}
                    onClick={(e) => setFilter("cuisineId", e.target.value)}
                  />
                </StyledFilter>
              ))}
            </StyledFlexBox>
          </StyledBox>
          <StyledBox>
            <StyledHeading as="h4">Dietary Preference</StyledHeading>
            <StyledFlexBox $wrap="wrap">
              {diets.map((diet) => (
                <StyledFilter
                  $checked={parseInt(dietId) === parseInt(diet.id)}
                  htmlFor={diet.name}
                  key={diet.id}
                >
                  {diet.name}
                  <input
                    type="radio"
                    id={diet.name}
                    name="dietId"
                    value={diet.id}
                    onClick={(e) => setFilter("dietId", e.target.value)}
                  />
                </StyledFilter>
              ))}
            </StyledFlexBox>
          </StyledBox>
          <StyledBox>
            <StyledHeading as="h4">Difficulty Level</StyledHeading>
            <StyledFlexBox $wrap="wrap">
              {difficulties.map((difficulty) => (
                <StyledFilter
                  $checked={parseInt(difficultyId) === parseInt(difficulty.id)}
                  htmlFor={difficulty.name}
                  key={difficulty.id}
                >
                  {difficulty.name}
                  <input
                    type="radio"
                    id={difficulty.name}
                    name="difficultyId"
                    value={difficulty.id}
                    onChange={(e) => setFilter("difficultyId", e.target.value)}
                  />
                </StyledFilter>
              ))}
            </StyledFlexBox>
          </StyledBox>
        </StyledFlexBox>
        <StyledFlexBox $justify="flex-end" $flex="auto">
          <StyledButton
            $bgcolor="var(--color-grey-300)"
            $border="var(--color-grey-100) 1px solid"
            onClick={resetFilters}
            type="reset"
          >
            Reset Filters
          </StyledButton>
          <StyledButton
            $bgcolor="var(--color-orange-300)"
            $border="var(--color-orange-100) 1px solid"
            type="submit"
          >
            Apply Filters
          </StyledButton>
        </StyledFlexBox>
      </StyledForm>
    </StyledSearchBox>
  );
}
