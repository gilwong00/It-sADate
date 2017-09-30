import { combineReducers } from 'redux';
import registrationReducer from './Registration/registration-reducer';

const rootReducer = combineReducers({
	registration: registrationReducer
});

export default rootReducer;
