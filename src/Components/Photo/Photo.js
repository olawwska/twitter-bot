import React from 'react';
import '../App/App.css';

import styles from './Photo.module.css';


class Photo extends React.Component {
  render(){

    return (
        <img src={this.props.src}></img>

    )
  }
}
export default Photo;
