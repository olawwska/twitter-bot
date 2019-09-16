import React from 'react';
import './App.css';
import InfiniteScroll from 'react-infinite-scroll-component';


import Photo from '../Photo/Photo';
import Header from '../Header/Header';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pictures: []
    }
  }
  componentDidMount() {
      fetch('/twitterImages')
          .then(res => res.json())
          .then(data => {
              console.log(data);
              this.setState({
                  pictures: data
              })
          });
  }

  photoCreate = (photos) => {
      console.log('działa');
    photos.map((picture) => {
        return <Photo src={picture}/>
    })
  };

  render(){
      return <div>
          <Photo src={this.state.pictures[0]}/>
          {this.photoCreate(this.state.pictures)}
      </div>
  }
}

export default App;
