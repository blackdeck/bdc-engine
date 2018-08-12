import React from 'react';
import PropTypes from 'prop-types';

/**
 * Pulse state view (temporary)
 */
const PulseView = ({ frame, tick, isPulsing }) => (
  <ul>
    <li>
      Tick:
      {tick}
    </li>
    <li>
      Frame:
      {frame}
    </li>
    <li>
      Pulse enabled:
      {String(isPulsing)}
    </li>
  </ul>
);

PulseView.propTypes = {
  frame: PropTypes.number.isRequired,
  tick: PropTypes.number.isRequired,
  isPulsing: PropTypes.bool.isRequired,
};

export default PulseView;
