import { IS_AUTH } from "../Actions/action.type";

const initialState = {
  isAuth: false,
};

export const AuthReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case IS_AUTH:
      return {
        ...state,
        isAuth: payload,
      };

    default:
      return state;
  }
};
