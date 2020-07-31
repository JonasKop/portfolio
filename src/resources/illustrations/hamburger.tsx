import React, { ReactElement } from 'react';

export default function Hamburger(): ReactElement {
  return (
    <svg width="30" height="23" viewBox="0 0 30 23" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line
        x1="1.5"
        y1="1.5"
        x2="28.5"
        y2="1.5"
        stroke="#FEC576"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <line
        x1="1.5"
        y1="11.5"
        x2="28.5"
        y2="11.5"
        stroke="#FEC576"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <line
        x1="21.5"
        y1="21.5"
        x2="28.5"
        y2="21.5"
        stroke="#FEC576"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
