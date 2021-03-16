import React from 'react';
import { useTrail, animated } from 'react-spring';
import PropTypes from 'prop-types';

const browser = navigator.userAgent.toLowerCase().indexOf('chrome') > -1 ? 'chrome' : 'other';

/* eslint-disable global-require */

if (browser === 'chrome') {
  require('./ChromeStyles.css');
} else {
  // require('./styles.css');
}

/* eslint-enable global-require */

/* eslint-disable react/no-array-index-key */

const fast = { tension: 1200, friction: 40 };
const slow = { mass: 10, tension: 200, friction: 50 };
const trans = (x, y) => `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`;

export default function Goo() {
  const [trail, set] = useTrail(3, () => ({ xy: [0, 0], config: (i) => (i === 0 ? fast : slow) }));

  return (
    <>
      <div native className="hooks-main-2" onMouseMove={(e) => set({ xy: [e.clientX, e.clientY] })}>
        {trail.map((props, index) => (
          <animated.div
            className={`cir2${index}`}
            key={index}
            style={{ transform: props.xy.interpolate(trans) }}
          />
        ))}
      </div>
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="30" />
          <feColorMatrix in="blur" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 30 -7" />
        </filter>
      </svg>
      <div native className="hooks-main" onMouseMove={(e) => set({ xy: [e.clientX, e.clientY] })}>
        {trail.map((props, index) => (
          <animated.div key={index} style={{ transform: props.xy.interpolate(trans) }} />
        ))}
      </div>
    </>
  );
}

Goo.propTypes = {
  xy: PropTypes.node,
};

/* eslint-enable react/no-array-index-key */
