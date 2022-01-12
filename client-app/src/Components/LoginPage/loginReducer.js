const initialSate = {
    userLogin: false,
}

const loginReduser = (state= initialSate, action) => {
    switch(action.type){
        case "LOGIN_USER":
            return{
                ...state,
                userLogin: true
            }
        default:
            return state;
    }
}

export default loginReduser;
