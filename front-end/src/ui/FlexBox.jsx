import styled, { css } from "styled-components";

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
`;
