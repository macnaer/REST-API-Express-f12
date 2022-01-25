export const LoadUsers = (users) => {
  return {
    type: "USERS_LOAD",
    payload: users,
  };
};

