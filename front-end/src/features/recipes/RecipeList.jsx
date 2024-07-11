import { NavLink } from "react-router-dom";
import { urlport } from "../../services/config";
import styled, { css } from "styled-components";
import { pageSizeOptions } from "../../utils/constants";
import {
  StyledHeading,
  StyledButton,
  StyledFlexBox,
} from "../../styles/StyledComponents";

const StyledResultsBox = styled.div`
  display: grid;
  grid-template-rows: auto auto 1fr auto;
`;

const StyledOption = styled.button`
  all: initial;
  font: inherit;
  cursor: pointer;
  text-decoration: underline;
  ${(props) =>
    props.current === "true" &&
    css`
      color: var(--color-grey-900);
    `}
`;

const StyledList = styled.div`
  display: grid;
  max-height: 100%;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-auto-rows: minmax(250px, max-content);
  gap: 1em;
`;

const StyledListItem = styled.div`
  padding: 0.2em 0.5em;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  background-color: var(--color-yellow-100);
  & img {
    max-width: 100%;
    height: 150px;
    object-fit: cover;
  }
`;

//to be optimized
const StyledDescBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`;

export default function RecipeList({
  recipes,
  totCount,
  totPages,
  nextPage,
  prevPage,
  page,
  isPending,
  pageSize,
  handlePageSize,
}) {
  if (isPending) return <h2>Searching...</h2>;

  return (
    // <StyledFlexBox direction="column">
    <StyledResultsBox>
      <StyledHeading as="h2">Total Recipes: {totCount}</StyledHeading>

      <StyledFlexBox justify="flex-end" items="center">
        Show:
        {pageSizeOptions.map((size) => (
          <StyledOption
            key={size}
            onClick={() => handlePageSize(size)}
            disabled={pageSize === size}
            current={pageSize === size ? "true" : "false"}
          >
            0 - {size} results
          </StyledOption>
        ))}
      </StyledFlexBox>

      <StyledList>
        {recipes.map((recipe) => (
          <StyledListItem key={recipe.id}>
            <img src={`${urlport}${recipe.image}`} alt={`${recipe.image}`} />
            <StyledDescBox direction="column" items="center">
              <div>
                <StyledHeading as="h3">{recipe.name}</StyledHeading>
                <p>
                  <span>Difficulty: </span>
                  {recipe.difficulty.name}
                </p>
              </div>
              <NavLink to={`/search/${recipe.id}`}>Details</NavLink>
            </StyledDescBox>
          </StyledListItem>
        ))}
      </StyledList>

      <StyledFlexBox justify="space-between" items="center">
        <span>Page: {page} </span>
        <StyledFlexBox>
          <StyledButton onClick={prevPage} disabled={page === 1}>
            Prev
          </StyledButton>
          <StyledButton onClick={nextPage} disabled={page === totPages}>
            Next
          </StyledButton>
        </StyledFlexBox>
      </StyledFlexBox>
    </StyledResultsBox>
    // </StyledFlexBox>
  );
}
