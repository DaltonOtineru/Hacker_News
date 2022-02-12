import React from 'react';
import headerAd from '../../img/headerAd.webp';

import '../../css/topad.css';

const TopAd = () => {
  return (
    <div className="top--ad">
      <img src={headerAd} alt="advertisement" className="top--ad--img" />
    </div>
  );
};

export default TopAd;
