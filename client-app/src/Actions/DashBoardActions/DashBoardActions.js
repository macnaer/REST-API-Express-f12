export const LoadUsers = (users) => {
  return {
    type: "USERS_LOAD",
    payload: users,
  };
};
export const UserDel = (id) => {
  return {
    type: "USERS_DEL",
    payload: id,
  };
};
