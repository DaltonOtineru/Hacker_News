import React from 'react';

import headerAdvert from '../../img/headerAdvert.jpeg';
import headerAdvertMobile from '../../img/headerAdvertMobile.JPG';
import '../../css/topad.css';

const TopAd = () => {
  return (
    <div className="top--ad">
      <a href="/">
        <img
          src={headerAdvertMobile}
          alt="advertisement"
          className="top--ad--img"
        />
      </a>
    </div>
  );
};

export default TopAd;
