import { useParams } from "react-router-dom";
import useRecipe from "./useRecipe";
import { urlport } from "../../services/config";
import Comment from "../comments/Comment";
import { styled } from "styled-components";
import { device } from "../../styles/optionStyles";
import {
  StyledBox,
  StyledFlexBox,
  StyledHeading,
} from "../../styles/StyledComponents";
import { calcArrObjValAvg } from "../../utils/utils";
import StarRating from "../../ui/StarRating";
import Loader from "../../layouts/Loader";
import Error from "../../layouts/Error";

const StyledRecipePage = styled.div`
  padding-inline: 15%;
  padding-block: 1rem;
  min-height: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  overflow-x: hidden;
  @media (max-width: ${device.md}) {
    padding-inline: 10%;
  }
  @media (max-width: ${device.sm}) {
    padding-inline: 1%;
  }
`;

const StyledImgWrapper = styled.div`
  width: 100%;
  height: 60vh;
  border-radius: 15px;
  overflow: hidden;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const StyledRecipeWrap = styled(StyledFlexBox)`
  padding: 0.2em;
  border-radius: 15px;
  width: 90%;
  background-color: var(--color-yellow-100);
  & section {
    display: flex;
    flex-flow: column;
    gap: 1em;
    padding-inline: 0.5em;
  }
`;

const StyledRating = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2em;
`;

const StyledList = styled.ol`
  padding: 0.5em 2em;
  display: flex;
  flex-flow: column;
  gap: 0.5em;
`;

export default function RecipeDetails() {
  const { id: recipeId } = useParams();

  const { data, isPending, isError, error } = useRecipe(recipeId);
  0;

  const {
    name = "",
    ingredients = [],
    instructions = "",
    image = "",
    comments = [],
    cuisine = {},
    diet = {},
    difficulty = {},
  } = data;

  const avgRating = calcArrObjValAvg(comments, "rating");
  const instructionSteps = instructions?.split(". ") ?? [];

  if (isPending) return <Loader />;
  if (isError)
    return <Error>{error?.message ?? "Error: Try again later"}</Error>;

  return (
    <StyledRecipePage>
      <StyledRecipeWrap $direction="column">
        <StyledImgWrapper>
          <img src={`${urlport}${image}`} alt="" />
        </StyledImgWrapper>
        <section>
          <StyledHeading>{name}</StyledHeading>
          <StyledFlexBox $direction="column">
            <StyledRating>
              Rating:
              <StarRating
                readOnly={true}
                value={parseInt(avgRating)}
                size="large"
              />
              {avgRating}
            </StyledRating>
            <span>Cuisine: {cuisine.name}</span>
            <span>Dietary preference: {diet.name}</span>
            <span>Difficulty Level: {difficulty.name}</span>
          </StyledFlexBox>
          <StyledBox>
            <StyledHeading as="h3">Ingredients</StyledHeading>
            <StyledBox>
              {ingredients.map((ing) => (
                <div key={ing}>{ing}</div>
              ))}
            </StyledBox>
          </StyledBox>
          <div>
            <StyledHeading as="h3">Instructions</StyledHeading>
            <StyledList>
              {instructionSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </StyledList>
          </div>
          <Comment comments={comments} recipeId={recipeId} />
        </section>
      </StyledRecipeWrap>
    </StyledRecipePage>
  );
}
