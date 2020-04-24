export const DarkModeReducer = (state = false, action) => {
  switch (action.type) {
    case "SET_DARKMODE": {
      return !state
    }
    default: {
      return state
    }
  }
}
