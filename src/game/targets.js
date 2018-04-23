
import _ from 'lodash';

export const genTarget = (lvl) => {
    return {
        name: 'Bot' + _.uniqueId(),
        level: lvl,
        armor: 10 * lvl + 5 * lvl % 2,
        armor_current: 10 * lvl + 5 * lvl % 2,
        dmg: 1 * lvl,
        reward: {cards: 420 * lvl},
        onTick: shotAtPlayer,
        modules: []
    };
};

function shotAtPlayer(state) {
    console.log(state.player.armor_current, state.target.dmg);
    if (state.player.armor_current < state.target.dmg) {
        state.player.armor_current = 0;
        state.game_end = true;
    }
    else {
        state.player.armor_current -= state.target.dmg
    }
    return state;
}