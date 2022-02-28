import styled, { css } from "styled-components";

interface HeadingProps {
    uppercase?: boolean
}

export const HeadingTitle = styled.h2<HeadingProps>`
  ${({ theme, uppercase }) => css`
    color: ${theme.colors.text};
    font-size: 34px;
    font-weight: 700;
    text-transform: ${uppercase ? 'uppercase' : 'none'}
    padding: 0;
    margin: 0;
    line-height:1;
  `}
`