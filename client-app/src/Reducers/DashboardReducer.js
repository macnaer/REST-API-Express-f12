const initialState = {
    UsersList: []
}

const DashboardReducer = (state = initialState, actions) =>{
    switch(actions.type){
        case "USERS_LOAD":
            return{
                ...state,
                UsersList: actions.payload
            }
        default:
            return state;
    }
}

export default DashboardReducer;