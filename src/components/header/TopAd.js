import React from 'react';
import headerAd from '../../img/headerAd.webp';

import '../../css/topad.css';

const TopAd = () => {
  return (
    <div className="top--ad">
      <a href="/">
        <img src={headerAd} alt="advertisement" className="top--ad--img" />
      </a>
    </div>
  );
};

export default TopAd;
