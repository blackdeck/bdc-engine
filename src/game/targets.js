
import _ from 'lodash';

export const genTarget = (level) => {
  const target = {
    name: `Bot${_.uniqueId()}`,
    level,
    armor: 10 * level + 5 * level % 2,
    armor_current: 10 * level + 5 * level % 2,
    dmg: 1 * level,
    reward: { cards: 420 * level },
    onTick: 'shotAtPlayer',
    modules: [],
  };
  console.log(target);
  return target;
};

export const functions = {
  shotAtPlayer(state) {
    console.log(state.player.armor_current, state.target.dmg);
    if (state.player.armor_current < state.target.dmg) {
      state.player.armor_current = 0;
      state.game_end = true;
    } else {
      state.player.armor_current -= state.target.dmg
    }
    return state;
  },
};
