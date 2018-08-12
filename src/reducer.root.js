import { combineReducers } from 'redux';

import pulseReducer from './ducks/pulse.duck';

const rootReducer = combineReducers({ pulse: pulseReducer });

export default rootReducer;
