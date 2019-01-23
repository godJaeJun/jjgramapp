// Imports

import { API_URL } from "../../constant";
import { AsyncStorage } from "react-native";

// Actions

const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";
const SET_USER = "SET_USER";

// Action Creators

function setLogIn(token) {
  return {
    type: LOG_IN,
    token
  };
}

function setUser(user) {
  return {
    type: SET_USER,
    user
  };
}

function logOut() {
  return { type: LOG_OUT };
}

// API Actions
function login(username, password) {
  return dispatch => {
    fetch(`${API_URL}/rest-auth/login/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
        password
      })
    })
      .then(response => response.json())
      .then(json => {
        if (json.token) {
          dispatch(setLogIn(json.token));
        }
        if (json.user) {
          dispatch(setUser(json.user));
        }
      });
  };
}

// Initial State

const initialState = {
  isLoggedIn: false
};

// Reducer

function reducer(state = initialState, action) {
  switch (action.type) {
    case LOG_IN:
      return applyLogIn(state, action);
    case LOG_OUT:
      return applyLogOut(state, action);
    case SET_USER:
      return applySetUser(state, action);
    default:
      return state;
  }
}

// Reducer Functions

function applyLogIn(state, action) {
  const { token } = action;
  return {
    ...state,
    isLoggedIn: true,
    token
  };
}

async function applyLogOut(state, action) {
  await AsyncStorage.clear();
  return {
    ...state,
    isLoggedIn: false,
    token: ""
  };
}

function applySetUser(state, action) {
  const { user } = action;
  return {
    ...state,
    profile: user
  };
}

// Exports

const actionCreators = {
  login
};

export { actionCreators };
// Default Reducer Export

export default reducer;