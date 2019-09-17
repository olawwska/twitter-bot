import React from 'react';
import './App.css';

import Photo from '../Photo/Photo';
import Header from '../Header/Header';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        loading: true,
        title: 'Loading...',
        pictures: []
    }
  }

  componentDidMount() {
    fetch('/twitterImages')
      .then(res => res.json())
      .then(data => {
          this.setState({
              loading: false,
              title: 'Twitter Poland',
              pictures: data
          })
      })
        .catch(err => {
            this.setState({
                loading: false,
                title: 'Brak informacji...'
            })
        })
    }

  photoCreate = (photos) => {
    return photos.map((picture) => {
         return <Photo src={picture}
                        key={picture}
                        alt={picture}/>
    })
  };

  render(){
      const {loading, title, pictures} = this.state;

      if (loading) {
          return <Header text={title}/>;
      }

      return <div>
          <Header text={title}/>
          <div className={'main-section'}>
              <div className={'main-section__container'}>
                  <div>
                      {this.photoCreate(pictures)}
                  </div>
              </div>
          </div>
          <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a></div>
      </div>
    }
}

export default App;
