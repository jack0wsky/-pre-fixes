import styled from "styled-components"
import { medium } from "../breakpoints/breakpoints"

export const NoVendorWrapper = styled.main`
  width: 40%;
  height: 100%;

  @media all and (max-width: ${medium}) {
    width: 100%;
  }
`
export const Message = styled.p`
  font-size: 1em;
  padding: 15px 30px 15px;
  border-radius: 15px;
  background-color: ${props => props.theme.colors.infoColor};
  color: ${props => props.theme.colors.fontColor};
`
