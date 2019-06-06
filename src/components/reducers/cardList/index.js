import { ADD_NEW_CARD } from "../../constantActions"

const initialState = {
  lists: []
}

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_NEW_CARD:
      state.push(payload)
      return (...state)

    default:
      return state;
  }
}