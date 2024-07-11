import { NavLink } from "react-router-dom";
import { urlport } from "../../services/config";
import { pageSizeOptions } from "../../utils/constants";
import { StyledHeading } from "../../ui/Heading";
import Box, { StyledBox } from "../../ui/Box";
import { StyledFlexBox } from "../../ui/FlexBox";
import styled from "styled-components";
import { css } from "@emotion/react";
import { StyledButton } from "../../ui/Button";

const StyledSpan = styled.span`
  cursor: pointer;
  font-weight: lighter;
  text-decoration: underline;
`;

const StyledList = styled.div`
  display: flex;
  flex-flow: wrap;
  gap: 1em;
`;

const StyledListItem = styled.div`
  padding: 0.2em 0.5em;
  flex: auto;
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

export default function RecipeList({
  recipes,
  totCount,
  totPages,
  nextPage,
  prevPage,
  page,
  isPending,
  handlePageSize,
}) {
  if (isPending) return <h2>Searching...</h2>;

  return (
    <StyledBox>
      <StyledHeading as="h2">Total Recipes: {totCount}</StyledHeading>
      <StyledFlexBox justify="flex-end" items="center">
        Show:
        {pageSizeOptions.map((size) => (
          <StyledSpan key={size} onClick={() => handlePageSize(size)}>
            0 - {size} results
          </StyledSpan>
        ))}
      </StyledFlexBox>
      <div>
        <StyledList>
          {recipes.map((recipe) => (
            <StyledListItem key={recipe.id}>
              <StyledHeading as="h3">
                <span>{`${recipe.id}. `}</span>
                {recipe.name}
              </StyledHeading>
              {/* temp style */}
              <img
                src={`${urlport}${recipe.image}`}
                alt={`${recipe.image}`}
                width="150"
              />
              <p>
                <span>Difficulty: </span>
                {recipe.difficulty.name}
              </p>
              <NavLink to={`/search/${recipe.id}`}>Details</NavLink>
            </StyledListItem>
          ))}
        </StyledList>
      </div>
      <StyledFlexBox justify="space-between" items="center">
        <span>Page: {page} </span>
        <StyledFlexBox>
          <StyledButton onClick={prevPage} disabled={page === 1}>
            prevPage
          </StyledButton>
          <StyledButton onClick={nextPage} disabled={page === totPages}>
            nextPage
          </StyledButton>
        </StyledFlexBox>
      </StyledFlexBox>
    </StyledBox>
  );
}
