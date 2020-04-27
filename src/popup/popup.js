import React from "react"
import { PopupWrapper, PopupMessage, CloseBtn } from "./popup.styled"

const Popup = ({ copied, handleClosePopup }) => {
  return (
    <PopupWrapper onClick={() => handleClosePopup()} copied={copied}>
      <PopupMessage>
        Code is copied to your clipboard{" "}
        <CloseBtn onClick={() => handleClosePopup()}>
          <svg
            width={"100%"}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>cancel</title>
            <g fill="none">
              <path
                d="M6.757 17.243L12 12m5.243-5.243L12 12m0 0L6.757 6.757M12 12l5.243 5.243"
                stroke="#fff"
                strokeLinecap="round"
                strokeWidth="2"
              />
            </g>
          </svg>
        </CloseBtn>
      </PopupMessage>
    </PopupWrapper>
  )
}

export default Popup
