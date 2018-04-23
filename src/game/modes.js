
export const modes = {
    fast:  {name: 'Fast', onClick: (state) => { state.mode = 'fast'; return state; }, onFrame: (state) => { if (state.player.stamina > 0) { state.player.stamina--; } else { state.mode = 'slow'; } return state; }},
    slow:  {name: 'Slow', onClick: (state) => { state.mode = 'slow'; return state; }},
    regen: {name: 'Regen', onClick: (state) => { state.mode = 'regen'; return state; }, onFrame: (state) => { if (state.player.stamina < 1000) { state.player.stamina++; } else { state.mode = 'slow'; } return state; }}
};