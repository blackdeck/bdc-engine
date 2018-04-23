
import _ from 'lodash';

export const automators = {
    ideas_miner: {name: 'Ideas Miner', cost: {ideas: 8}, locked: (state) => !state.creativity,  onClick: (state) => { state.ideas_miner++; return state; }, onTick: (state) => { state.ideas += _.random(0, state.ideas_miner); return state; }},
    cards_miner: {name: 'Cards Miner', cost: {cards: 8}, locked: (state) => !state.design,      onClick: (state) => { state.cards_miner++; return state; }, onTick: (state) => { state.cards += Math.round(_.random(0, state.cards_miner/2)); return state; }},
    decks_miner: {name: 'Decks Miner', cost: {decks: 8}, locked: (state) => !state.producing,   onClick: (state) => { state.decks_miner++; return state; }, onTick: (state) => { state.decks += Math.round(_.random(0, state.decks_miner/4)); return state; }},
    games_miner: {name: 'Games Miner', cost: {games: 8}, locked: (state) => !state.selling,     onClick: (state) => { state.games_miner++; return state; }, onTick: (state) => { state.games += Math.round(_.random(0, state.games_miner/8)); return state; }}
};