import _ from 'lodash/fp';
import { createSelector } from 'reselect';
import { getTick } from '../helpers/pulse.helper';

const getFrame = _.get('pulse.frame');
const getIsPulsing = _.get('pulse.isPulsing');

export const getPulse = createSelector(
  getFrame,
  getIsPulsing,
  (frame, isPulsing) => ({ frame, isPulsing, tick: getTick(frame) })
);
