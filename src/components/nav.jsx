import React from 'react';

const styles = {
  logo: {
    marginTop: '5px',
    marginLeft: '10px',
  },
  title: {
    paddingBottom: '10px',
  },
};

class Nav extends React.Component {

  render() {
    return (
      <nav>
        <div className="nav-wrapper" style={{ backgroundColor: this.props.color }}>
          <a href="https://facebook.github.io/react/docs/hello-world.html">
            <img alt="Dashboard" style={styles.logo} src="../public/img/react.png" height="50px" />
          </a>
          <span id="title" className="brand-logo center hide-on-med-and-down" style={styles.title}>
				React Router Dashboard
			</span>
        </div>
      </nav>
    );
  }
}

export default Nav;

Nav.propTypes = {
  color: React.PropTypes.string,
};
