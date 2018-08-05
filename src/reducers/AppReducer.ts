const initialState = {
    username: "Abhishek Saxena"
}

const AppReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case "AMEND_USERNAME":
            // let username = {...state.username};
            let username = Object.assign({}, state.username);
            username = action.payload;
            return username;
    }

    return state;
}

export default AppReducer;



