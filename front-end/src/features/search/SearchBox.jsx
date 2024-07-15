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
import Error from "../../layouts/Error";
import { formatQueries } from "../../utils/utils";
import { useNavigate } from "react-router-dom";
import useFilterContext from "../../contexts/useFilterContext";

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
    background-color: var(--color-sky-300);
  }
  ${(props) =>
    props.$checked &&
    css`
      background-color: var(--color-sky-500);
      transform: scale(1.05);
    `}
  & label {
    cursor: inherit;
  }
  & input {
    /* display: none; */ //works but just in case...
    /* visibility: hidden;doesnt remove the radio button space*/
    opacity: 0; //fallback for older browers??? but like visibility does not remove taken space
    appearance: none;
  }
`;

const StyledSearchButton = styled(StyledButton)`
  font-size: 0.8em;
  flex: auto;
`;

export default function SearchBox({ type, handleToggle }) {
  const { cuisines, diets, difficulties, isPending, isError, error } =
    useFilters();

  const navigate = useNavigate();

  const { filters, setFilter, resetFilters } = useFilterContext();

  function handleSubmit(e) {
    e.preventDefault();
    navigate(`/search?${formatQueries(filters)}`);
  }

  if (isPending) return <h1>Loading...</h1>;
  if (isError)
    return <Error>{error?.message ?? "Error: Try again later"}</Error>;

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
              value={filters?.q ?? ""}
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
                  htmlFor={cuisine.name}
                  key={cuisine.name}
                  $checked={filters.cuisineId === cuisine.id}
                >
                  {cuisine.name}
                  <input
                    type="radio"
                    id={cuisine.name}
                    name="cuisineId"
                    value={cuisine.id}
                    checked={filters.cuisineId === cuisine.id}
                    onChange={() => setFilter("cuisineId", cuisine.id)}
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
                  htmlFor={diet.name}
                  key={diet.name}
                  $checked={filters.dietId === diet.id}
                >
                  {diet.name}
                  <input
                    type="radio"
                    id={diet.name}
                    name="dietId"
                    value={diet.id}
                    checked={filters.dietId === diet.id}
                    onChange={() => setFilter("dietId", diet.id)}
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
                  htmlFor={difficulty.name}
                  key={difficulty.name}
                  $checked={filters.difficultyId === difficulty.id}
                >
                  {difficulty.name}

                  <input
                    type="radio"
                    id={difficulty.name}
                    name="difficultyId"
                    value={difficulty.id}
                    checked={filters.difficultyId === difficulty.id}
                    onChange={() => setFilter("difficultyId", difficulty.id)}
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
            onClick={() => {
              resetFilters();
            }}
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
