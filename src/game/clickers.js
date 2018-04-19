
//import _ from 'lodash';

export const clickers = {
    ideas_clicker: {name: 'Think Ideas', locked: false, onClick: (state) => { state.ideas++; return state; }},
    cards_clicker: {name: 'Draw Cards', locked: (state) => state.ideas < 10, onClick: (state) => { if (state.ideas > 10) { state.ideas-=10; state.cards++; } return state; }},
    decks_clicker: {name: 'Make Decks', locked: (state) => state.cards < 10, onClick: (state) => { if (state.cards > 10) { state.cards-=10; state.decks++; } return state; }},
    games_clicker: {name: 'Pack Games', locked: (state) => state.decks < 10, onClick: (state) => { if (state.decks > 10) { state.decks-=10; state.games++; } return state; }}
};
