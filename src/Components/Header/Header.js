import React from 'react';

import Twitter from '../../Icons/Twitter';
import './Header.css'


class Header extends React.Component {
  render(){

    return (
          <div className='header'>
              <div className='header__logo'>
                  <Twitter width="100px" height="100px" />
                  <h1>{this.props.text}</h1>
              </div>
          </div>
    )
  }
}
export default Header;
