import React from 'react';
import './Photo.css'


class Photo extends React.Component {
  render(){

    return (
          <div>
            <img src={this.props.src} alt={this.props.alt}></img>
          </div>
    )
  }
}
export default Photo;
