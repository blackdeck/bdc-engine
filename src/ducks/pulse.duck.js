import _ from 'lodash/fp';
import { interval } from 'rxjs';
import { switchMap, mapTo, takeUntil } from 'rxjs/operators';
import { createAction } from 'redux-actions';
import { ofType } from 'redux-observable';

import config from '../config/default';

export const FRAME_PULSE = 'FRAME_PULSE';
export const START_PULSE = 'START_PULSE';
export const STOP_PULSE = 'STOP_PULSE';

export const framePulse = createAction(FRAME_PULSE);
export const startPulse = createAction(START_PULSE);
export const stopPulse = createAction(STOP_PULSE);

export const pulseEpic = (action$, state$) =>
  action$.pipe(
    ofType(START_PULSE),
    switchMap(() =>
      interval(config.pulse.frameDurationMs).pipe(
        takeUntil(action$.ofType(STOP_PULSE)),
        mapTo(framePulse())
      )
    )
  );

export const pulseInitialState = {
  frame: 0,
  isPulsing: false,
};

export default function pulseReducer(pulse = pulseInitialState, action) {
  switch (action.type) {
    case FRAME_PULSE:
      return _.set('frame', pulse.frame + 1, pulse);
    case START_PULSE:
      return _.set('isPulsing', true, pulse);
    case STOP_PULSE:
      return _.set('isPulsing', false, pulse);
    default:
      return pulse;
  }
}
