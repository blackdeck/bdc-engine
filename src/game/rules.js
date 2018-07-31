import _ from 'lodash';

export const rules = {
  matrix_show: {
    onFrame: state => {
      state.matrix_show =
        Math.random()
          .toString(36)
          .substring(2, 15) +
        Math.random()
          .toString(36)
          .substring(2, 15);
      return state;
    },
  },

  ideas_rule: {
    onTick: state => {
      state.ideas++;
      return state;
    },
  },
  cards_rule: {
    onTick: state => {
      if (state.ideas > 4 && _.random(1, 2) === 1) {
        state.ideas -= 4;
        state.cards++;
      }
      return state;
    },
  },
  decks_rule: {
    onTick: state => {
      if (state.cards > 4 && _.random(1, 16) === 1) {
        state.cards -= 4;
        state.decks++;
      }
      return state;
    },
  },
  games_rule: {
    onTick: state => {
      if (state.decks > 4 && _.random(1, 128) === 1) {
        state.decks -= 4;
        state.games++;
      }
      return state;
    },
  },
};
