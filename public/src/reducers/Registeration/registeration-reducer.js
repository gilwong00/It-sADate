import _ from 'lodash';
//import { LOGIN } from '../../actions/Types';
import { ON_SIGNIN, ON_SIGNUP } from '../../actions/actions';

const INITIAL_STATE = {
    signIn: '',
    signUp: ''
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ON_SIGNIN:
            return Object.assign({}, state, action.payload);
        case ON_SIGNUP:
            return Object.assign({}, state, action.payload);
    default:
        return state;
    }
};
