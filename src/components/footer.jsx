import React from 'react';

const styles = {
  footer: {
    height: 45,
    backgroundColor: 'black',
    textAlign: 'center',
    paddingTop: '10px',
    width: '100%',
  },
  logo: {
    paddingTop: '10px',
  },
};

class Footer extends React.Component {

  render() {
    return (
      <footer className="page-footer" style={styles.footer}>
        <div className="row" style={{ height: 15 }}>
          <div className="col s3">
            <a className="white-text hide-on-small-only" />
          </div>
          <div className="col s6">
            <div>
              <div className="center-align" style={styles.logo} />
            </div>
          </div>
          <div className="col s3">
            <a className="white-text right hide-on-small-only">By Calum Bell</a>
          </div>
        </div>
      </footer>
    );
  }
}
Footer.propTypes = {
  color: React.PropTypes.string,
};
Footer.defaultProps = {
  color: 'black',
};

export default Footer;
