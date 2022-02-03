const initialState = {
    UsersList: []
}

const DashboardReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case "USERS_LOAD":
            return {
                ...state,
                UsersList: actions.payload
            }
        case "USERS_DEL":
            return {
                ...state,
                UsersList: state.UsersList.filter((el) => el.id !== actions.payload)
            }
        default:
            return state;
    }
}

export default DashboardReducer;