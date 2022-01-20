

export const loginUserAction = (user) => {
  return {
    type: "LOGIN_USER",
    payload: user,
  };
};
