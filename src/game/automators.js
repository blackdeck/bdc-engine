
import _ from 'lodash';

export const automators = {
    ideas_miner: {name: 'Ideas Miner', locked: (state) => state.ideas < 10, onClick: (state) => { state.ideas-=10; state.ideas_miner++; return state; }, onTick: (state) => { state.ideas += _.random(0, state.ideas_miner); return state; }},
    cards_miner: {name: 'Cards Miner', locked: (state) => state.cards < 10, onClick: (state) => { state.cards-=10; state.cards_miner++; return state; }, onTick: (state) => { state.cards += _.random(0, state.cards_miner); return state; }},
    decks_miner: {name: 'Decks Miner', locked: (state) => state.decks < 10, onClick: (state) => { state.decks-=10; state.decks_miner++; return state; }, onTick: (state) => { state.decks += _.random(0, state.decks_miner); return state; }},
    games_miner: {name: 'Games Miner', locked: (state) => state.games < 10, onClick: (state) => { state.games-=10; state.games_miner++; return state; }, onTick: (state) => { state.games += _.random(0, state.games_miner); return state; }}
};