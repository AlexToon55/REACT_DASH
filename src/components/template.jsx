import React from 'react';

import Nav from './nav.jsx';
import Footer from './footer.jsx';

// this is our main template component, all routes are rendered at {props.children}

const templateStyle = {
  paddingTop: '40px',
  paddingLeft: '20px',
  paddingRight: '20px',
};

const footerHeight = '45px';

// the bottom margin of the body is the footer height
document.body.style.marginBottom = footerHeight;

const Template = (props) => {
  return (
    <div>
      <main>
        <Nav brandImage="img/logo.png" color="black" />
        <div style={templateStyle}>
          {props.children}
        </div>
      </main>
      <Footer color="black" />
    </div>
  );
};

export default Template;
