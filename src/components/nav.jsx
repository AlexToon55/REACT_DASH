import React from 'react';

const imgStyle = {
  marginTop: '0px',
  marginLeft: '15px',
};

const titleStyle = {
  paddingBottom: '10px',
};

class Nav extends React.Component {

  render(props) {
    return (
      <nav>
        <div className="nav-wrapper" style={{ backgroundColor: this.props.color }}>
          <a className="brand-logo">
            <img alt="Dashboard" style={imgStyle} src="" height="65px" />
          </a>
          <a id="title" className="brand-logo center hide-on-med-and-down" style={titleStyle}>
				React Router Dashboard
			</a>
        </div>
      </nav>
    );
  }
}

export default Nav;

Nav.propTypes = {
  color: React.PropTypes.string,
};
