
//import _ from 'lodash';

export const oneclickers = {
    thinking: {name: 'Thinking',    cost: {ideas: 10}, locked: false,                       onClick: (state) => { state.thinking = true; return state; }},
    drawing: {name: 'Drawing',      cost: {cards: 10}, locked: (state) => !state.thinking,   onClick: (state) => { state.drawing = true; return state; }},
    making: {name: 'Making',        cost: {decks: 10}, locked: (state) => !state.drawing,    onClick: (state) => { state.making = true; return state; }},
    packing: {name: 'Packing',      cost: {games: 10}, locked: (state) => !state.making,     onClick: (state) => { state.packing = true; return state; }},
    creativity: {name: 'creativity', cost: {ideas: 100}, locked: (state) => !state.packing,  onClick: (state) => { state.creativity = true; return state; }},
    design: {name: 'design',        cost: {cards: 100}, locked: (state) => !state.creativity, onClick: (state) => { state.design = true; return state; }},
    producing: {name: 'producing',  cost: {decks: 100}, locked: (state) => !state.design,    onClick: (state) => { state.producing = true; return state; }},
    selling: {name: 'selling',      cost: {games: 100}, locked: (state) => !state.producing, onClick: (state) => { state.selling = true; return state; }},
};