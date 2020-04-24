import styled from "styled-components"

export const SearchWrapper = styled.main`
  width: 30vw;
  height: auto;
  position: absolute;
  transition: all 0.3s cubic-bezier(0.77, 0.2, 0.05, 1);
  bottom: 5vw;
  opacity: ${props => (props.search === "" ? 0 : 1)};
  right: 5vw;
  background-color: ${props => props.theme.colors.resultBackground};
  border-radius: 10px;
  z-index: 999;
  overflow: hidden;
  box-shadow: 0 1px 3px -19px rgba(0, 0, 0, 0.039),
    0 2.5px 7.2px -19px rgba(0, 0, 0, 0.057),
    0 4.6px 13.5px -19px rgba(0, 0, 0, 0.07),
    0 8.3px 24.1px -19px rgba(0, 0, 0, 0.083),
    0 15.5px 45.1px -19px rgba(0, 0, 0, 0.101),
    0 37px 108px -19px rgba(0, 0, 0, 0.14);
`
export const Result = styled.section`
  width: 100%;
  height: 90%;
  padding: 1vw;
  color: ${props => props.theme.colors.fontColor};
`
export const CodeArea = styled.section`
  font-family: "JetBrains Mono", serif;
  border-radius: 20px;
  padding: 1vw;
  width: 100%;
  background-color: rgb(35, 150, 149, 0.15);
  position: relative;
  display: flex;
  flex-flow: column;

  p {
    font-family: inherit;
    line-height: 1.5em;
  }
`
export const Textarea = styled.code`
  font-family: inherit;
  resize: none;
  border: none;
  background: none;
  font-size: 1em;
  height: auto;
  color: ${props => props.theme.colors.code};
  :focus {
    outline: none;
  }
`
export const Suggestions = styled.div`
  margin: 1vw 0 0;
  display: flex;
  flex-flow: column;
  -webkit-flex-flow: column;
  height: auto;
`
export const CloseResult = styled.div`
  width: 100%;
  height: 40px;
  background-color: ${props => props.theme.colors.resultBackground};
  padding: 10px;
  display: flex;
  align-items: center;
  -webkit-align-items: center;
`
export const Control = styled.button`
  border: none;
  background-color: #b42700;
  height: 15px;
  width: 15px;
  border-radius: 20px;
  cursor: pointer;
`
export const CopyIcon = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  width: 2vw;
  height: 2vw;
  border: none;
  background: none;
`
export const Icon = styled.img`
  width: 100%;
  height: 100%;
  cursor: pointer;
  opacity: 0.3;
`
