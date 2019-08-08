import { createStore as reduxCreateStore } from "redux"
import { initialState } from "./initialState"
import { combineReducers } from "redux"

const counter = (state = {}, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 }
    default:
      return state
  }
}

const reducer = combineReducers({ counter })

const createStore = () => reduxCreateStore(reducer, initialState)

export default createStore
