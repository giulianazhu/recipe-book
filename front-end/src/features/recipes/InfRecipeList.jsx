import { NavLink, useNavigate, useSearchParams } from "react-router-dom";
import { urlport } from "../../services/config";
import styled, { css } from "styled-components";
import { pageSizeOptions } from "../../utils/constants";
import {
  StyledHeading,
  StyledButton,
  StyledFlexBox,
} from "../../styles/StyledComponents";
import React, { useEffect, useRef, useState } from "react";
import useInfFilterRecipes from "./useInfFilterRecipes";
import Error from "../../layouts/Error";
import { scrollTop } from "../../utils/utils";

const StyledResultsBox = styled.div`
  display: grid;
  grid-template-rows: auto auto 1fr auto;
  height: 100%;
`;

const StyledPageSizeOption = styled.button`
  all: initial;
  font: inherit;
  cursor: pointer;
  text-decoration: underline;
  &:hover {
    color: var(--color-grey-900);
  }
  ${(props) =>
    props.disabled &&
    css`
      color: var(--color-grey-900);
    `}
`;

const StyledContainer = styled.div`
  display: flex;
  flex-flow: column;
  gap: 2rem;
`;

const StyledList = styled.div`
  display: grid;
  max-height: 100%;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: minmax(250px, max-content);
  gap: 1em;
`;

const StyledListItem = styled.div`
  padding: 0.2em 0.5em;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  background-color: var(--color-yellow-100);
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  & img {
    max-width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 15px;
  }
  &:hover {
    transform: scale(1.05);
  }
`;

const StyledDescBox = styled.div`
  display: grid;
  grid-template-rows: auto, 1fr, auto;
  text-align: center;
  gap: 0.2em;
  & div {
    display: flex;
    flex-flow: column;
    gap: 0.5em;
    font-size: 0.8em;
  }
  & ${StyledButton} {
    border: var(--color-orange-100) 1px solid;
    border-radius: 10px;
    background-color: var(--color-orange-300);
    font-size: 0.9em;
  }
`;

const StyledDetailButton = styled(NavLink)`
  padding: 0.2em 0.5em;
  border: var(--color-orange-100) 1px solid;
  border-radius: 10px;
  background-color: var(--color-orange-300);
  font-size: 0.9em;
  &:hover {
    color: var(--color-yellow-100);
    background-color: var(--color-orange-500);
  }
`;

const StyledLoader = styled.button`
  align-self: center;
  border: initial;
  background-color: initial;
  text-decoration: underline;
  cursor: pointer;
  &:hover {
    color: var(--color-grey-900);
  }
`;

export default function InfRecipeList() {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(pageSizeOptions[0]);

  const [searchParams] = useSearchParams();
  const prevQueries = useRef(searchParams.toString());

  const navigate = useNavigate();

  useEffect(
    //to reset page back to 1 if query changed
    function () {
      // console.log(searchParams.toString());
      const currQueries = searchParams.toString();
      if (prevQueries !== currQueries) {
        setPage(1);
        prevQueries.current = currQueries;
      }
    },
    [searchParams]
  );

  const filters = {};
  for (const [key, value] of searchParams.entries()) {
    if (value && value !== "null") {
      filters[key] = value;
    } else continue;
  }

  const {
    data,
    isPending,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isError,
    error,
  } = useInfFilterRecipes(filters, page, pageSize);

  if (isPending) return <h1>Searching...</h1>;
  if (isError)
    return <Error>{error?.message ?? "Error: Try again later"}</Error>;

  // console.log(data);

  const { pageParams, pages } = data;

  let totCount = pages[0].totCount;

  return (
    <StyledResultsBox>
      <StyledHeading as="h2">Results: {totCount}</StyledHeading>

      <StyledFlexBox $justify="flex-end" $items="center">
        Show:
        {pageSizeOptions.map((size) => (
          <StyledPageSizeOption
            key={size}
            onClick={() => {
              setPageSize(size);
            }}
            disabled={pageSize === size}
          >
            0 - {size} results
          </StyledPageSizeOption>
        ))}
      </StyledFlexBox>
      <StyledContainer>
        <StyledList>
          {pages.map((page, index) => (
            <React.Fragment key={index}>
              {page.data.map((recipe) => (
                <StyledListItem
                  key={recipe.id}
                  onClick={() => navigate(`/search/${recipe.id}`)}
                >
                  <img
                    src={`${urlport}${recipe.image}`}
                    alt={`${recipe.image}`}
                  />
                  <StyledDescBox>
                    <StyledHeading as="h4">{recipe.name}</StyledHeading>
                    <div>
                      <p>{recipe.diet.name}</p>
                      <p>{recipe.difficulty.name}</p>
                    </div>
                    <StyledDetailButton to={`/search/${recipe.id}`}>
                      Details
                    </StyledDetailButton>
                  </StyledDescBox>
                </StyledListItem>
              ))}
            </React.Fragment>
          ))}
        </StyledList>
        <StyledLoader
          onClick={() => {
            hasNextPage ? fetchNextPage() : scrollTop();
          }}
          disabled={isFetchingNextPage}
        >
          {isFetchingNextPage
            ? "Loading more..."
            : hasNextPage
            ? "Load More"
            : "Back to Top"}
        </StyledLoader>
      </StyledContainer>
    </StyledResultsBox>
  );
}
