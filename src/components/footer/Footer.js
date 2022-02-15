import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/footerSocials.css';
import '../../css/footerLinks.css';
import '../../css/footerCopyright.css';

import FooterLinks from './FooterLinks';
import FooterCopyright from './FooterCopyright';
import FooterSocials from './FooterSocials';

const Footer = () => {
  return (
    <>
      <FooterSocials />
      <FooterLinks />
      <FooterCopyright />
    </>
  );
};

export default Footer;
