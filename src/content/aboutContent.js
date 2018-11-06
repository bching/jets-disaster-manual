import React, {Component} from 'react';

const aboutText = {
  opening: {
    leadText: "Quick Notes: ",
    text: "Japan is sitting on the Pacific Ring of Fire and causes frequent earthquakes, which often triggers tsunami and volcanic eruptions. Also due to the geographic, topographic, and climate conditions, there are frequent landslides with heavy rain and typhoons throughout the Japanese archipelago.",
   },
   imitationGame: {
     one: "状況設定",
     two: "ファシリテーターの指示・問い",
     three: {
       left: "覚えてほしい言葉",
       right: "覚えてほしい文",
     },
     four: "必要な知識",
     five: "Q & A",
     six: "JETの先生の解答例",
   },
}

class AboutContent extends Component {
  render() {
    let toggle = "";
    if(this.props.toggle === true) {
      toggle = "-active"
    }

    return (
      <div className={"sub-row" + toggle}>
        <div className="chapter-content">
          <p className="red-thin-round-border light-red-background"><b>{aboutText.opening.leadText}</b>{aboutText.opening.text}</p>

          <h2>Disaster Imagination Game</h2>
          <div className="flex-vertical">
            <div className="static-box round-border blue-background blue-round-border">{aboutText.imitationGame.one}</div>
            <div className="down"><i></i></div>
            <div className="static-box round-border light-orange-border light-brown-background ">{aboutText.imitationGame.two}</div>
            <div className="down"><i></i></div>
            <div className="flex-row">
              <div className="static-box round-border light-green-border light-green-background">{aboutText.imitationGame.three.left}</div>
              <div className="static-box round-border light-orange-border salmon-background">{aboutText.imitationGame.three.right}</div>
            </div>
            <div className="down"><i></i></div>
            <div className="static-box round-border dark-red-border light-pink-background">{aboutText.imitationGame.four}</div>
            <div className="down"><i></i></div>
            <div className="static-box round-border purple-border purple-background">{aboutText.imitationGame.five}</div>
            <div className="down"><i></i></div>
            <div className="static-box round-border dark-red-border">{aboutText.imitationGame.six}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutContent;
