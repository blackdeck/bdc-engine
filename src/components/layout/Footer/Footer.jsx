import React from 'react';

import './Footer.css';

const Footer = () => (
  <div className="footer">
    <span className="pull-left">
      <a href="/" title="Hard Reset For Developers">
        New game
      </a>
    </span>
    &nbsp;
    <a target="_blank" rel="noopener noreferrer" href="/">
      <img
        alt=""
        src="http://www.advanceduninstaller.com/7b12b396d38166a899fff585e466e50d-icon.ico"
      />
      &nbsp; Telegram
    </a>
    &nbsp;&nbsp;&nbsp;
    <a target="_blank" rel="noopener noreferrer" href="/">
      <img
        alt=""
        src="https://static.filehorse.com/icons-web/educational-software/wikipedia-icon-32.png"
      />
      &nbsp; Wiki
    </a>
    &nbsp;&nbsp;&nbsp;
    <a target="_blank" rel="noopener noreferrer" href="/">
      <img
        alt=""
        src="https://images-na.ssl-images-amazon.com/images/I/418PuxYS63L.png"
      />
      &nbsp; Reddit
    </a>
    &nbsp;&nbsp;&nbsp;
    <a rel="noopener noreferrer" href="/">
      <img alt="" src="https://image.flaticon.com/icons/svg/81/81924.svg" />
      &nbsp; Support
    </a>
  </div>
);

export default Footer;

// TODO add propTypes
