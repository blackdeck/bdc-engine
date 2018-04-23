
import _ from 'lodash';

import {rules} from './rules';
import {automators} from './automators';

export const tick = (state) => {
    _.each(rules, (item) => {
        if (item.onTick) state = item.onTick(state);
    });

    _.each(automators, (item) => {
        if (item.onTick) state = item.onTick(state);
    });

    console.log(state.target);
    state = state.target.onTick(state);
    //if (state.target.onTick) state = state.target.onTick(state);

    return state;
};