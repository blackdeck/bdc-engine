import { genTarget } from '../game/targets';

export const modules = {
  weapon: {
    name: 'Weapon',
    onClick: state => {
      if (state.weapon.current_state === 'stopped') {
        state.weapon.current_state = 'started';
        state.weapon.next_command = 'start';
        state.weapon.cooldown_timer = modules.weapon.base_cooldown;
      } else {
        state.weapon.next_command =
          state.weapon.next_command === 'start' ? 'stop' : 'start';
      }
      return state;
    },
    commands: {
      start: state => {
        state.weapon.current_state = 'started';
        state.weapon.cooldown_timer = modules.weapon.base_cooldown;
        return state;
      },
      stop: state => {
        state.weapon.current_state = 'stopped';
        return state;
      },
    },
    base_cooldown: 42,
    onFrame: state => {
      if (state.weapon.current_state === 'started') {
        state.weapon.cooldown_timer--;
        if (state.weapon.cooldown_timer === 0) {
          state = modules.weapon.onCycle(state);
          if (state.weapon.next_command === 'start') {
            state.weapon.cooldown_timer = modules.weapon.base_cooldown;
          } else {
            state.weapon.current_state = 'stopped';
          }
        }
      }
      return state;
    },
    onCycle: state => {
      if (state.target.armor_current < state.target.dmg) {
        state.target = genTarget(state.target.level + 1);
      } else {
        state.target.armor_current -= 1 + state.weapon_upgrade;
      }
      return state;
    },
  },
  repairer: {
    name: 'Repairer',
    onClick: state => {
      if (state.repairer.current_state === 'stopped') {
        state.repairer.current_state = 'started';
        state.repairer.next_command = 'start';
        state.repairer.cooldown_timer = modules.repairer.base_cooldown;
      } else {
        state.repairer.next_command =
          state.repairer.next_command === 'start' ? 'stop' : 'start';
      }
      return state;
    },
    commands: {
      start: state => {
        state.repairer.current_state = 'started';
        state.repairer.cooldown_timer = modules.repairer.base_cooldown;
        return state;
      },
      stop: state => {
        state.repairer.current_state = 'stopped';
        return state;
      },
    },
    base_cooldown: 66,
    onFrame: state => {
      if (state.repairer.current_state === 'started') {
        state.repairer.cooldown_timer--;
        if (state.repairer.cooldown_timer === 0) {
          state = modules.repairer.onCycle(state);
          if (state.repairer.next_command === 'start') {
            state.repairer.cooldown_timer = modules.repairer.base_cooldown;
          } else {
            state.repairer.current_state = 'stopped';
          }
        }
      }
      return state;
    },
    onCycle: state => {
      if (state.player.armor_current + 10 > state.player.armor) {
        state.player.armor_current = state.player.armor;
        state.repairer.next_command = 'stop';
      } else {
        state.player.armor_current += 2 * state.armor_upgrade;
      }
      return state;
    },
  },
};

export const genModuleState = name => {
  let module = modules[name];
  return {
    current_state: 'stopped',
    next_command: 'stop',
    cooldown: module.base_cooldown,
    cooldown_timer: 0,
  };
};
