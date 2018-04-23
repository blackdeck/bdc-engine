
import _ from 'lodash';

import {genModuleState} from '../game/modules';
import {genTarget} from '../game/targets';

const default_state = {

    ideas: 1000,
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


    player: {
        armor_current: 1000,
        armor: 1000,
        stamina: 1000
    },
    weapon: genModuleState('weapon'),
    repairer: genModuleState('repairer'),
    target: genTarget(1),

    weapon_upgrade: 0,
    armor_upgrade: 0,

    mode: 'slow',
    matrix_show: '',



    game_speed: 1000,
    frame_rate: 30,
    game_speed_multiplier: 1,
    frame: 0,
    tick: 0,
    game_paused: true,
    game_end: false
};

export const getDefaultState = () => {
    return _.cloneDeep(default_state);
};