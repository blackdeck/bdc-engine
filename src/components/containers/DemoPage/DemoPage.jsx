import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import PulseView from '../../presentional/PulseView';
import { getPulse } from '../../../selectors/pulse.selector';
import { startPulse, stopPulse, framePulse } from '../../../ducks/pulse.duck';

/**
 * Just temporary demo page
 */
class DemoPage extends PureComponent {
  render() {
    const {
      frame,
      tick,
      isPulsing,
      startPulse,
      stopPulse,
      framePulse,
    } = this.props;

    return (
      <section>
        <PulseView {...{ frame, tick, isPulsing }} />
        <button onClick={startPulse}>Start pulse</button>
        <button onClick={stopPulse}>Stop pulse</button>
        <button onClick={framePulse}>(debug) next frame</button>
      </section>
    );
  }
}

export default connect(
  getPulse,
  { startPulse, stopPulse, framePulse }
)(DemoPage);
