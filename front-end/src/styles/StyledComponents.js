import styled, { css } from "styled-components";
import { device } from "./optionStyles";

export const StyledPage = styled.div`
  padding-inline: 2rem;
  padding-block: 1rem;
  min-height: 100%;
  /* overflow-x: hidden; */
  @media (max-width: ${device.md}) {
    padding-inline: 1rem;
  }
  @media (max-width: ${device.sm}) {
    padding-inline: 0.5rem;
  }
`;

export const StyledHeading = styled.h1`
  padding-block: 0.5em;
  ${(props) =>
    props.$color &&
    css`
      color: ${props.$color};
    `}
`;

export const StyledButton = styled.button`
  border-radius: 20px;
  padding: 0.2em 0.5em;
  &:hover {
    transform: scale(1.1);
  }
  ${(props) =>
    props.$bgcolor &&
    css`
      background-color: ${props.$bgcolor};
    `}
  ${(props) =>
    props.$border &&
    css`
      border: ${props.$border};
    `}
`;

export const StyledBox = styled.div`
  padding: 0.2em;
`;

export const StyledFlexBox = styled.div`
  padding: 0.2em;
  display: flex;
  gap: 1em;
  ${(props) =>
    props.$gap &&
    css`
      gap: ${props.$gap};
    `}
  ${(props) =>
    props.$direction &&
    css`
      flex-direction: ${props.$direction};
    `}
  ${(props) =>
    props.$justify &&
    css`
      justify-content: ${props.$justify};
    `}
    
    ${(props) =>
    props.$items &&
    css`
      align-items: ${props.$items};
    `}
    ${(props) =>
    props.$wrap &&
    css`
      flex-wrap: ${props.$wrap};
    `}
    ${(props) =>
    props.$flex &&
    css`
      flex: ${props.$flex};
    `}
`;

export const StyledLabel = styled.label``;

export const StyledFormRow = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  gap: 0.5em;
`;

// ref: https://dev.to/danireptor/how-to-style-and-customize-html-file-input-in-react-54fo
export const StyledUploader = styled.div`
  height: 25rem;
  flex: auto;
  border: var(--color-sky-100) 2px solid;
  border-radius: 15px;
  background-color: var(--color-sky-300);
  background-image: url("../../public/upload.svg");
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  overflow: hidden;
  ${(props) =>
    props.$upload &&
    css`
      background-image: ${`url(${props.$upload})`};
      background-color: var(--color-sky-300);
      background-position: center;
      background-size: cover;
      background-repeat: no repeat;
    `}
  & input {
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
  }
`;
