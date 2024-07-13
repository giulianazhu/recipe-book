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
  ${(props) =>
    props.$type === "main" &&
    css`
      @media (max-width: ${device.md}) {
        display: none;
      }
    `}
  overflow-y: auto;
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
  display: flex;
  border: var(--color-grey-500) 2px solid;
  border-radius: 15px;
  background-color: white;
  overflow: hidden;
  & input {
    all: initial;
    padding: 0.2em 0em 0.2em 0.5em;
    width: 100%;
    font: inherit;
  }
  & button {
    //button wrapping search logo svg
    all: initial;
    margin-inline-start: auto;
    width: 50px;
    height: 50px;
    flex: 0 0 50px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-grey-300);
    cursor: pointer;
    &:hover {
      color: white;
    }
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
  &:hover {
    transform: scale(1.05);
  }
  ${(props) =>
    props.$checked &&
    css`
      background-color: var(--color-sky-500);
      transform: scale(1.05);
    `}
  & label {
    font: inherit;
    cursor: inherit;
  }
  & input {
    display: none;
  }
`;

const StyledSearchButton = styled(StyledButton)`
  font-size: 0.8em;
  flex: auto;
`;

export default function SearchBox({ type, handleToggle }) {
  const { cuisines, diets, difficulties, isPending } = useFilters();

  const {
    filters: { cuisineId = "", dietId = "", difficultyId = "", q = "" },
    setFilter,
    handleSubmit,
    resetFilters,
  } = useCustomContext(FilterContext);

  if (isPending) return <h1>loading</h1>;

  return (
    <StyledSearchBox $type={type}>
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
            <button type="submit" onClick={handleToggle}>
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
        <StyledFlexBox $justify="center" $flex="auto">
          <StyledSearchButton
            $bgcolor="var(--color-grey-300)"
            $border="var(--color-grey-100) 1px solid"
            onClick={resetFilters}
            type="reset"
          >
            Reset Filters
          </StyledSearchButton>
          <StyledSearchButton
            $bgcolor="var(--color-orange-300)"
            $border="var(--color-orange-100) 1px solid"
            type="submit"
            onClick={handleToggle}
          >
            Apply Filters
          </StyledSearchButton>
        </StyledFlexBox>
      </StyledForm>
    </StyledSearchBox>
  );
}
