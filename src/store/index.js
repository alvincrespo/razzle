import { createStore as reduxCreateStore } from "redux"
import { initialState } from "./initialState"
import { combineReducers } from "redux"

const skills = (state = [], action) => {
  switch (action.type) {
    case "ADD_SKILL":
      return [...state, action.skill]
    default:
      return state
  }
}

const reducer = combineReducers({ skills })

const createStore = () => reduxCreateStore(reducer, initialState)

export default createStore
