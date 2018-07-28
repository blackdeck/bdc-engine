
//import _ from 'lodash';

export const clickers = {
  ideas_clicker: {
    name: 'Think Ideas', cost: false, locked: state => !state.thinking, onClick: (state) => { state.ideas++; return state; },
  },
  cards_clicker: {
    name: 'Draw Cards', cost: { ideas: 4 }, locked: state => !state.drawing, onClick: (state) => { state.cards++; return state; },
  },
  decks_clicker: {
    name: 'Make Decks', cost: { cards: 4 }, locked: state => !state.making, onClick: (state) => { state.decks++; return state; },
  },
  games_clicker: {
    name: 'Pack Games', cost: { decks: 4 }, locked: state => !state.packing, onClick: (state) => { state.games++; return state; },
  },
};
