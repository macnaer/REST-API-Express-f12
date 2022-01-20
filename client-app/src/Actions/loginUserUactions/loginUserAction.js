export const loginUserAction = (user) => {
  return {
    type: "LOGIN_USER",
    payload: user,
  };
};

export const loginUserByTokenAction = (user) => {
  return {
    type: "LOGIN_USER_BY_TOKEN",
    payload: user,
  };
};

export const logoutUserAction = () => {
  return {
    type: "LOGOUT_USER",
  };
};
