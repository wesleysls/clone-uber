const initialState = {
    email: '',
    password: '',
    emailValid: false,
    passwordValid: false,
    status: 0
};

const AuthReducer = (state = initialState, action) => {

    if (action.type == 'changeStatus') {
        return { ...state, status: action.payload.status };
    }

    if (action.type == 'setEmailField') {
        let isvalid = false;
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (re.test(action.payload.email)) {
            isvalid = true;
        }
        return { ...state, email: action.payload.email, emailValid: isvalid };
    }

    if (action.type == 'setPasswordField') {
        let isvalid = false;
        if (action.payload.password.length > 7) {
            isvalid = true;
        }

        return { ...state, password: action.payload.password, passwordValid: isvalid };
    }

    return state;
}

export default AuthReducer;