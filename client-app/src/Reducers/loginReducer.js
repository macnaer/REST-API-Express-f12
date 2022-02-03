const initialSate = {
  isAuth: false,
  userProfileInfo: { Role: '' }
};

const loginReducer = (state = initialSate, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return {
        ...state,
        isAuth: true,
        userProfileInfo: action.payload,
      };

    case "LOGIN_USER_BY_TOKEN":
      return {
        ...state,
        isAuth: true,
        userProfileInfo: action.payload,
      };

    case "LOGOUT_USER":
      return {
        ...state,
        isAuth: false,
        userProfileInfo: initialSate.userProfileInfo
      };

    default:
      return state;
  }
};

export default loginReducer;
