import React from "react"
import { NoVendorWrapper, Message } from "./noprefixes.styled"

const NoPrefixes = ({ type, func }) => {
  return (
    <NoVendorWrapper>
      <Message>
        {func
          ? `We don't have any functions for this property. Check other for SCSS Functions.`
          : `This styling property works in all browser without ${type} or it simply
        isn't in our database`}
      </Message>
    </NoVendorWrapper>
  )
}

export default NoPrefixes
