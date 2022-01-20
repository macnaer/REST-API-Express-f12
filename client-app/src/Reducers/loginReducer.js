const initialSate = {
  isAuth: false,
  userProdileInfo: null,
};

const loginReducer = (state = initialSate, action) => {
  console.log('with reducer => ' ,action.payload);
  switch (action.type) {
    case "LOGIN_USER":
      return {
        ...state,
        isAuth: true,
        userProdileInfo: action.payload,
      };
    default:
      return state;
  }
};

export default loginReducer;
