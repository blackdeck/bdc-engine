import config from '../config/default'; // TODO use config library

const { framesInTick } = config.pulse;

/**
 * Get tick number from frame number
 *
 * @param frameNumber
 * @returns {number}
 */
export const getTick = frameNumber => Math.floor(frameNumber / framesInTick); // TODO maybe it needs more precise lib instead of just dividing
