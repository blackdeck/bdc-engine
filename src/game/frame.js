
import _ from 'lodash';

import {rules} from './rules';
import {modes} from './modes';
import {modules} from './modules';

export const frame = (state) => {
    if (modes[state.mode].onFrame) state = modes[state.mode].onFrame(state);

    _.each(rules, (item) => {
        if (item.onFrame) state = item.onFrame(state);
    });
    _.each(modules, (item) => {
        if (item.onFrame) state = item.onFrame(state);
    });

    return state;
};