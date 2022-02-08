const initialSate = {
	user: {}
};

const getUserReducer = (state = initialSate, action) => {
  switch (action.type) {
    case "GET_USER_INFO":
      return {
        ...state, user: {...action.payload},
      };
   
    default:
      return state;
  }
};

export default getUserReducer;
