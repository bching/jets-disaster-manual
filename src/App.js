import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import AboutContent from "./content/aboutContent.js";
import EarthquakeContent from "./content/earthquakeContent.js";

class TableContents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subRows: {
        "about": true,
        "earthquake": false,
      },
    };
  }

  toggleSubRow(toggledRow = null) {
    if(toggledRow === null) {
      return;
    }
    const toggledRows = {"about": false, "earthquake": false};
    toggledRows[toggledRow] = true;
    this.setState({subRows: toggledRows});
    // Object.entries(this.state.subRows).map(row => {
    //   const key = row[0];
    //   if(key === toggledRow) {
    //     this.setState(subRows[key]: true);
    //   } else {
    //     this.setState(subRows[key]: false);
    //   }
    // });
  }

  //TODO: Finish the toggle sub row by passing in id of sub row
  // we will only have one sub row toggled at a time, so when user clicks
  // a sub row we will iterate through a parent sub row object for other
  // toggled sub rows to set false.
  render() {
    return(
      <div className="table-content-rows">
        <div className="content-row" onClick={() => this.toggleSubRow("about")}>
          <span>About</span>
        </div>
        <AboutContent toggle={this.state.subRows.about}/>

        <div className="content-row" onClick={() => this.toggleSubRow("earthquake")}>
          <span>Earthquake</span>
          <div className="content-row-img">
            <img alt="" src={process.env.PUBLIC_URL + "/imgs/earthquake.jpeg"}/>
          </div>
        </div>
        <EarthquakeContent toggle={this.state.subRows.earthquake}/>

        <div className="content-row">
          <span>Volcano</span>
          <div className="content-row-img">
            <img alt="" src={process.env.PUBLIC_URL + "/imgs/volcano.png"}/>
          </div>
        </div>

        <div className="content-row">
          <span>Landslide</span>
          <div className="content-row-img">
            <img alt="" src={process.env.PUBLIC_URL + "/imgs/landslide.png"}/>
          </div>
        </div>

        <div className="content-row">
          <span>Tsunami</span>
          <div className="content-row-img">
            <img alt="" src={process.env.PUBLIC_URL + "/imgs/tsunami.png"}/>
          </div>
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
        <TableContents />
      </div>
    );
  }
}

export default App;
