import React from 'react';

import Nav from './nav.jsx';
import Footer from './footer.jsx';

// this is our main template component, all routes are rendered at {props.children}

const footerHeight = '0px';

// the bottom margin of the body is the footer height
document.body.style.marginBottom = footerHeight;

const Template = (props) => {
  return (
    <div>
      <main>
        <Nav brandImage="img/logo.png" color="black" />
        <div className="container">
          {props.children}
        </div>
      </main>
      <Footer color="black" />
    </div>
  );
};

export default Template;
