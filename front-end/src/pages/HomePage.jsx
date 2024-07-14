import { NavLink } from "react-router-dom";
import usePrefetchRecipes from "../features/recipes/usePrefetchRecipes";
import { StyledPage } from "../styles/StyledComponents";
import styled, { keyframes } from "styled-components";

const gradient = keyframes` 
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`;

const pulse = keyframes`
  0% {
		transform: scale(1);
	}
	50% {
		transform: scale(1.05);
	}
	100% {
		transform: scale(1);
	}
`;

const StyledHomePage = styled(StyledPage)`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background-color: var(--color-yellow-300);
  background: linear-gradient(
    -45deg,
    var(--color-blue-900),
    var(--color-sky-500),
    var(--color-yellow-100),
    var(--color-orange-300),
    var(--color-red-700)
  );
  background-size: 400% 400%;
  animation: ${gradient} 15s ease infinite;
  height: 100vh;
`;

const StyledImgWrapper = styled.div`
  width: 70%;
  max-height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  & img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
  }
`;

const StyledHomeLink = styled(NavLink)`
  padding: 1rem 2rem;
  border: var(--color-orange-100) 2px solid;
  border-radius: 30px;
  background-color: var(--color-orange-500);
  font-size: 2rem;
  color: var(--color-yellow-100);
  animation: ${pulse} 2.5s ease infinite;
`;

export default function HomePage() {
  usePrefetchRecipes();
  return (
    <StyledHomePage as="main">
      <div>
        <h1>Discover Recipes</h1>
      </div>
      <StyledImgWrapper>
        <img src="chef.svg" alt="" />
      </StyledImgWrapper>
      <StyledHomeLink to="/search">Explore</StyledHomeLink>
    </StyledHomePage>
  );
}
