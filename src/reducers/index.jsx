import { createAction, handleActions } from "redux-actions";
export const LOGIN_START = "LOGIN_START";
export const LOGIN_REQUEST = "LOGIN_REQUESET";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";
export const LOGOUT_REQUEST = "LOGOUT_REQUEST";

export const loginStart = createAction(LOGIN_START);
export const loginSuccess = createAction(LOGIN_SUCCESS);
export const loginFailed = createAction(LOGIN_FAILED);
export const loginRequest = createAction(LOGIN_REQUEST);
export const logoutRequest = createAction(LOGOUT_REQUEST);
const initState = {
  isAuth: false,
  isError: false,
  isChecking: false,
};

const rootReducer = handleActions(
  {
    [LOGIN_START]: (state) => ({ ...state, isChecking: true }),
    [LOGIN_SUCCESS]: (state, action) => ({
      isAuth: true,
      isError: false,
      isChecking: false,
    }),
    [LOGIN_FAILED]: (state, action) => ({
      isAuth: false,
      isError: true,
      isChecking: false,
    }),
    [LOGOUT_REQUEST]: (state, action) => initState,
  },
  initState
);
export default rootReducer;
