import { combineEpics } from 'redux-observable';

import { pulseEpic } from './ducks/pulse.duck';

const rootEpic = combineEpics(pulseEpic);

export default rootEpic;
