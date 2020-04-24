import styled from "styled-components"

export const ExploreWrapper = styled.main`
  width: 100vw;
  height: 90vh;
  display: flex;
  background-color: ${props => props.theme.colors.background};
`
export const Navigator = styled.aside`
  width: 30vw;
  height: 100%;
  padding: 1vw 0 0 5vw;
`
export const Content = styled.section`
  width: 70vw;
  height: 95%;
  background-color: ${props => props.theme.colors.greyBackground};
  border-radius: 30px 0 0 30px;
`
export const Head = styled.h2`
  font-size: 3em;
  color: ${props => props.theme.colors.fontColor};
`
export const List = styled.section`
  display: flex;
  display: -webkit-flex;
  flex-flow: column;
  -webkit-flex-flow: column;
  margin: 5vw 0 0;
`
export const Statement = styled.button`
  border: none;
  font-size: 1.2em;
  line-height: 2em;
  cursor: pointer;
  background: none;
  color: ${props => props.theme.colors.fontColor};
`
