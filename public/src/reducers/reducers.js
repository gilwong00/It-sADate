import { combineReducers } from 'redux';
import registerationReducer from './Registeration/registeration-reducer';

const rootReducer = combineReducers({
	registeration: registerationReducer
});

export default rootReducer;
