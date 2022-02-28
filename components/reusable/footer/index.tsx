import styled, { css } from "styled-components"

const Background = styled.div`
  ${({ theme }) => css`
   background-color: ${theme.colors.text};
   padding: 40px 0px;
  `}
`

const Copyright = styled.h2`
  color:rgba(255,255,255,.39);
  font-size: 15px;
  font-weight: 300;
  text-align:center;
`

export const Footer = () => {
  return (
    <Background>
      <Copyright>
        Copyright 2022 © Elton Luiz da Silva Filho - Cursos e Treinamentos
      </Copyright>
    </Background>
  )
}