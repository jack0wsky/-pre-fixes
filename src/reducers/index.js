import { combineReducers } from "redux"
import { DarkModeReducer } from "./isDarkMode"

const Reducer = combineReducers({
  darkMode: DarkModeReducer,
})

export default Reducer
