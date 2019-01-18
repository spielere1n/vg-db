import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axios from 'axios';

class App extends Component {

  getResponse(props) {
    return(
      axios.get('http://localhost:4000/')
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        })
    );
  }

  render() {
    return (
      <div className="App" getresponse={props.getResponse}>
        
      </div>
    );
  }
}

export default App;
