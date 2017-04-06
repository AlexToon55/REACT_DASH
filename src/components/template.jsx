import React from 'react';

import Nav from './nav.jsx';
import Footer from './footer.jsx';

// this is our main template component, all routes are rendered at {props.children}

const footerHeight = '-45px';

// the bottom margin of the body is the footer height
document.body.style.marginBottom = footerHeight;

const Template = (props) => {
  return (
    <div style={{ height: '100%' }}>
      <main style={{ height: '100%' }}>
        <Nav brandImage="img/logo.png" color="black" />
        <div className="container" style={{ marginTop: -64, marginBottom: footerHeight, minHeight: '100%' }}>
          {props.children}
        </div>
        <Footer color="black" />
      </main>
    </div>
  );
};

Template.propTypes = {
  children: React.PropTypes.any,
};

export default Template;
