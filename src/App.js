import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import AboutContent from "./content/aboutContent.js";
import EarthquakeContent from "./content/earthquakeContent.js";
import TsunamiContent from "./content/tsunamiContent.js";
import LandslideContent from "./content/landslideContent.js";
import VolcanoContent from "./content/volcanoContent.js";

class TableContents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subRows: {
        "about": true,
        "earthquake": false,
        "tsunami": false,
        "landslide": false,
        "volcano": false,
      },
    };
  }

  toggleSubRow(toggledRow = null) {
    if(toggledRow === null) {
      return;
    }
    // const toggledRows = {"about": false, "earthquake": false};
    const toggledRows = this.state.subRows;
    toggledRows[toggledRow] = !toggledRows[toggledRow];
    this.setState({subRows: toggledRows});
  }

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

        <div className="content-row" onClick={() => this.toggleSubRow("volcano")}>
          <span>Volcano</span>
          <div className="content-row-img">
            <img alt="" src={process.env.PUBLIC_URL + "/imgs/volcano.png"}/>
          </div>
        </div>
        <VolcanoContent toggle={this.state.subRows.volcano}/>

        <div className="content-row" onClick={() => this.toggleSubRow("landslide")}>
          <span>Landslide</span>
          <div className="content-row-img">
            <img alt="" src={process.env.PUBLIC_URL + "/imgs/landslide.png"}/>
          </div>
        </div>
        <LandslideContent toggle={this.state.subRows.landslide}/>

        <div className="content-row" onClick={() => this.toggleSubRow("tsunami")}>
          <span>Tsunami</span>
          <div className="content-row-img">
            <img alt="" src={process.env.PUBLIC_URL + "/imgs/tsunami.png"}/>
          </div>
        </div>
        <TsunamiContent toggle={this.state.subRows.tsunami}/>

      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="landing-page">
        <div className="header">
          <h1>Disaster Preparedness Drill Book in Japanese</h1>
        </div>
        <TableContents />
      </div>
    );
  }
}

export default App;
