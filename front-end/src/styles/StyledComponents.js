import styled, { css } from "styled-components";
import { device } from "./optionStyles";

export const StyledPage = styled.div`
  padding-inline: 2rem;
  padding-block: 1rem;
  min-height: 100%;
  overflow-x: hidden;
  @media (max-width: ${device.md}) {
    padding-inline: 1rem;
  }
  @media (max-width: ${device.sm}) {
    padding-inline: 0.5rem;
  }
`;

export const StyledHeading = styled.h1`
  padding-block: 0.5em;
`;

export const StyledButton = styled.button`
  border-radius: 20px;
  padding: 0.2em 0.5em;
`;

export const StyledBox = styled.div`
  padding: 0.2em;
`;

export const StyledFlexBox = styled.div`
  padding: 0.2em;
  display: flex;
  gap: 1em;
  ${(props) =>
    props.direction &&
    css`
      flex-direction: ${props.direction};
    `}
  ${(props) =>
    props.justify &&
    css`
      justify-content: ${props.justify};
    `}
    
    ${(props) =>
    props.items &&
    css`
      align-items: ${props.items};
    `}
    ${(props) =>
    props.wrap &&
    css`
      flex-wrap: ${props.wrap};
    `}
`;

export const StyledFormRow = styled.div`
  width: 100%;
  display: flex;
  flex-flow: wrap;
  align-items: center;
  gap: 1em;
`;

export const StyledLabel = styled.label``;

export const StyledInput = styled.input`
  padding: 0.3em 0.5em;
  width: 100%;
  border-radius: 15px;
`;
