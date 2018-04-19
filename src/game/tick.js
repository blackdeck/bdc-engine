
import _ from 'lodash';

import {rules} from './rules';
import {automators} from './automators';

export const tick = (state) => {
    _.each(rules, (rule) => {
        if (rule.onTick) state = rule.onTick(state);
    });

    _.each(automators, (automator) => {
        if (automator.onTick) state = automator.onTick(state);
    });

    return state;
};