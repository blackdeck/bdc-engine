
const default_state = {

    ideas: 0,
    cards: 0,
    decks: 0,
    games: 0,

    ideas_rule: 0,
    cards_rule: 0,
    decks_rule: 0,
    games_rule: 0,

    ideas_clicker: 0,
    cards_clicker: 0,
    decks_clicker: 0,
    games_clicker: 0,

    ideas_miner: 0,
    cards_miner: 0,
    decks_miner: 0,
    games_miner: 0,

    thinking: false,
    drawing: false,
    making: false,
    packing: false,
    creativity: false,
    design: false,
    producing: false,
    selling: false,


    stamina: 1000,
    mode: 'slow',
    matrix_show: '',


    game_speed: 1000,
    frame_rate: 30,
    game_speed_multiplier: 1,
    game_paused: true,
    frame: 0,
    tick: 0
};

export const getDefaultState = () => {
    return JSON.parse(JSON.stringify(default_state));
};