
import _ from 'lodash';

import {actions} from './actions';
import {rules} from './rules';

export const frame = (state) => {
    if (actions[state.mode].onFrame) state = actions[state.mode].onFrame(state);

    _.each(rules, (rule) => {
        if (rule.onFrame) state = rule.onFrame(state);
    });

    return state;
};