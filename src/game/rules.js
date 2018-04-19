
import _ from 'lodash';

export const rules = {
    ideas_rule: {onTick: (state) => { state.ideas++; return state; }},
    cards_rule: {onTick: (state) => { if (state.ideas > 10 && _.random(1, 10) === 1) { state.ideas-=10; state.cards++;} return state; }},
    decks_rule: {onTick: (state) => { if (state.cards > 10 && _.random(1, 100) === 1) { state.cards-=10; state.decks++;} return state; }},
    games_rule: {onTick: (state) => { if (state.decks > 10 && _.random(1, 1000) === 1) { state.decks-=10; state.games++;} return state; }}
};