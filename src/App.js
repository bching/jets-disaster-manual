import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

// function TableRow() {
//   return ()
// }

class TableContents extends Component {
  // renderRow() {
  //   return(
  //     <TableRow
  //       onClick={() => expand}
  //     />
  //   );
  // }

  render() {
    return(
      <div>
        <div className="content-row">
          <span>Earthquake</span>
          <div className="content-row-img">
            <img alt="" src="/imgs/earthquake.jpeg"/>
          </div>
        </div>
        <div className="content-row">
          <span>Volcano</span>
          <div className="content-row-img">
            <img alt="" src="/imgs/volcano.png"/>
          </div>
        </div>
        <div className="content-row">
          <span>Landslide</span>
          <div className="content-row-img">
            <img alt="" src="/imgs/landslide.png"/>
          </div>
        </div>
        <div className="content-row">
          <span>Tsunami</span>
          <div className="content-row-img">
            <img alt="" src="/imgs/tsunami.png"/>
          </div>
        </div>
        <div className="content-row">
          <span>About</span>
        </div>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="landing-page">
        <div className="header">
          <h1>Japan Disaster Handbook</h1>
        </div>
        <div className="table-contents-rows">
          <TableContents />
        </div>
      </div>
    );
  }
}

export default App;
