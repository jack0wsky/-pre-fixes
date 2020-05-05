import React from "react"
import { FooterWrapper, Note, Link, Emoji, Github } from "./footer.styled"
import { useSelector } from "react-redux"
import heartIcon from "../../static/green-heart.png"
import githubIcon from "../../static/github.png"
import githubWhite from "../../static/github-white@300x.png"

const Footer = () => {
  const darkMode = useSelector(state => state.darkMode)
  return (
    <FooterWrapper>
      <Note>
        Made with <Emoji height={20} src={heartIcon} alt="green-heart" /> by{" "}
        <Link target="_blank" href="https://45human.pl">
          45human
        </Link>
      </Note>
      <Github target="_blank" href="https://github.com/jack0wsky/-pre-fixes">
        <Emoji
          height={20}
          src={darkMode ? githubWhite : githubIcon}
          alt="github"
        />
        Github
      </Github>
    </FooterWrapper>
  )
}

export default Footer
