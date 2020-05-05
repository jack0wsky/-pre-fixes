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
import NoPrefixes from "../noPrefixes/noprefixes"

const ExploreStyle = ({
  selectedVendor,
  textArea,
  copyCode,
  changeSyntax,
  handleSyntax,
  copied,
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
          {selectedVendor.properties.length > 0 ? (
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
          ) : (
            <NoPrefixes func={false} type="prefixes" />
          )}
          <Hint>{copied}</Hint>
        </Props>
      ) : (
        <Props>
          {selectedVendor.scss.length > 0 ? (
            selectedVendor.scss.map(scss => {
              return (
                <pre key={scss.key}>
                  <Code>{scss.code}</Code>
                </pre>
              )
            })
          ) : (
            <NoPrefixes func={true} />
          )}
        </Props>
      )}
    </Content>
  )
}

export default ExploreStyle
