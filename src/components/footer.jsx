import React from 'react';

const footerStyle = {
  paddingTop: '0px',
  marginTop: '0px',
  backgroundColor: 'black',
};

const logoStyle = {
  paddingTop: '5px',
};

class Footer extends React.Component {

  render() {
    return (
      <footer className="page-footer" style={footerStyle}>
        <div className="footer-copyright">
          <div className="row">
            <div className="col s3">
              <a className="white-text hide-on-small-only" />
            </div>
            <div className="col s6">
              <div>
                <div className="center-align" style={logoStyle}>
                  <img
                    alt="NodeJS"
                    className="valign hide-on-small-only"
                    src="../public/img/NodeJS_Icon.png"
                    height="40px"
                  />
                  <img
                    alt="Heroku"
                    className="valign hide-on-small-only"
                    src="../public/img/Heroku_Icon2.png"
                    height="40px"
                  />
                </div>
              </div>
            </div>
            <div className="col s3">
              <a className="white-text right hide-on-small-only">By Calum Bell</a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
Footer.propTypes = {
  color: React.PropTypes.string.isRequired,
};
Footer.defaultProps = {
  color: 'black',
};

export default Footer;
