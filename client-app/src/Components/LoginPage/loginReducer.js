const initialSate = {
  userLogined: false,
};

const loginReducer = (state = initialSate, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return {
        ...state,
        userLogined: true,
      };
    default:
      return state;
  }
};

export default loginReducer;
