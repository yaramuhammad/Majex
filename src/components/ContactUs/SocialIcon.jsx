import React from 'react';

function SocialIcon({ src }) {
  return (
    <img loading="lazy" src={src} alt="Social media icon" className="shrink-0 w-8 aspect-square" />
  );
}

export default SocialIcon;