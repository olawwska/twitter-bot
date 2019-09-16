import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pictures: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:5012/twitterImages', {
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
        .then(r => console.log(r))
  }
  render(){
    return (
        <div className="App">
          test
        </div>
    )
  }

}

export default App;
