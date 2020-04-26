import React from "react"
import {
  Content,
  Title,
  TextArea,
  SwitchCode,
  StyleText,
  StyleSyntax,
  Props,
  Code,
  CodeComment,
  Hint,
} from "./exploreTab.styled"

const ExploreStyle = ({
  selectedVendor,
  textArea,
  copyCode,
  changeSyntax,
  handleSyntax,
}) => {
  return (
    <Content>
      <Title>{selectedVendor.style}</Title>
      <TextArea id="codeToCopy" value={textArea} readOnly />
      <SwitchCode>
        {changeSyntax ? (
          <StyleText>CSS</StyleText>
        ) : (
          <StyleSyntax onClick={() => handleSyntax()}>CSS</StyleSyntax>
        )}
        {changeSyntax ? (
          <StyleSyntax onClick={() => handleSyntax()}>
            SCSS Function
          </StyleSyntax>
        ) : (
          <StyleText>SCSS Function</StyleText>
        )}
      </SwitchCode>
      {changeSyntax ? (
        <Props>
          <Code onClick={e => copyCode(e)}>
            {selectedVendor.properties.map(prop => {
              return (
                <span key={prop.key}>
                  {prop.prop}
                  <CodeComment>/*value*/</CodeComment>;
                </span>
              )
            })}
          </Code>
          <Hint>Click code to copy</Hint>
        </Props>
      ) : (
        <Props>
          {selectedVendor.scss.map(scss => {
            return (
              <pre key={scss.key}>
                <Code>{scss.code}</Code>
              </pre>
            )
          })}
        </Props>
      )}
    </Content>
  )
}

export default ExploreStyle
