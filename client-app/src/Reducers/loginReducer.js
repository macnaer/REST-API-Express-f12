const initialSate = {
  isAuth: false,
  userProdileInfo: null,
};

const loginReducer = (state = initialSate, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return {
        ...state,
        isAuth: true,
        userProdileInfo: action.payload,
      };

    case "LOGIN_USER_BY_TOKEN":
      return {
        ...state,
        isAuth: true,
        userProdileInfo: action.payload,
      };

    case "LOGOUT_USER":
      return {
        ...state,
        isAuth: false,
        userProdileInfo: null,
      };

    default:
      return state;
  }
};

export default loginReducer;
