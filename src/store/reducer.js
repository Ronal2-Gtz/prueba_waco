import { READ_USERS } from "./actionTypes";

const initialState = {
  characters: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case READ_USERS:
      return { ...state, characters: action.payload };
    default: {
      return state;
    }
  }
}
