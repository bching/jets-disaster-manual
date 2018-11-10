import React, {Component} from 'react';

import earthquakeText from './json/earthquakeText.json';

class EarthquakeContent extends Component {
  render() {
    let toggle = "";
    if(this.props.toggle === true) {
      toggle = "-active"
    }

    return (

      <div className={"sub-row" + toggle}>
        <h2>自分を守る編</h2>
        <div className="chapter-content">

          <p className="static-box round-border blue-border">{earthquakeText.goal}</p><br/>

          <p className="static-box round-border blue-border blue-background">{earthquakeText.scenario.one}</p><br/>
          <p className="static-box round-border blue-border blue-background">{earthquakeText.scenario.two}</p><br/>

          <p className="static-box round-border light-brown-border light-brown-background">{earthquakeText.question}</p><br/>
          <p className="static-box">{earthquakeText.actionOne}</p><br/>
          <div className="flex-center">
            <p className="static-box round-border dark-red-border">{earthquakeText.actionOneResult}</p><br/>
            <div className="speech-bubble"><h2>良い行動</h2></div>
          </div>
          <p className="static-box">{earthquakeText.actionTwo}</p><br/>
          <div className="flex-center">
            <p className="round-border dark-red-border">{earthquakeText.actionTwoResult}</p>
            <div className="speech-bubble"><h2>悪い行動</h2></div>
          </div>

          <p className="red-thin-round-border light-red-background">{earthquakeText.youtubeBox.emergencyInfo}<br/>
            <b>{earthquakeText.youtubeBox.linkOne.leadText}</b><a href={earthquakeText.youtubeBox.linkOne.link}>{earthquakeText.youtubeBox.linkOne.link}</a><br/>
            <b>{earthquakeText.youtubeBox.linkTwo.leadText}</b><a href={earthquakeText.youtubeBox.linkTwo.link}>{earthquakeText.youtubeBox.linkTwo.link}</a></p>
        </div>

        <div className="flex-vertical">
          <p className="static-box round-border light-green-border light-green-background">{earthquakeText.tvScenario.one}</p>
          <p className="static-box round-border dark-red-border">{earthquakeText.tvScenario.two}</p>
        </div>
        <p className="static-box center-text square-border light-green-border">{earthquakeText.tvScenario.three}</p><br/>

        <div className="vocab-grid">
          <div className="round-border light-green-background">
            {earthquakeText.reportVocab.earthquake.eng}<br/>
            {earthquakeText.reportVocab.earthquake.say}<br/>
            {earthquakeText.reportVocab.earthquake.hira}<br/>
            {earthquakeText.reportVocab.earthquake.kanji}
          </div>
          <div className="round-border light-green-background">
            {earthquakeText.reportVocab.intensity.eng}<br/>
            {earthquakeText.reportVocab.intensity.say}<br/>
            {earthquakeText.reportVocab.intensity.hira}<br/>
            {earthquakeText.reportVocab.intensity.kanji}
          </div>
          <div className="round-border light-green-background">
            {earthquakeText.reportVocab.magnitude.eng}<br/>
            {earthquakeText.reportVocab.magnitude.say}<br/>
            {earthquakeText.reportVocab.magnitude.hira}<br/>
            {earthquakeText.reportVocab.magnitude.kanji}
          </div>
          <div className="round-border light-green-background">
            {earthquakeText.reportVocab.epicenter.eng}<br/>
            {earthquakeText.reportVocab.epicenter.say}<br/>
            {earthquakeText.reportVocab.epicenter.hira}<br/>
            {earthquakeText.reportVocab.epicenter.kanji}
          </div>
          <div className="round-border light-green-background">
            {earthquakeText.reportVocab.countOne.one}<br/>
            {earthquakeText.reportVocab.countOne.two}<br/>
            {earthquakeText.reportVocab.countOne.three}<br/>
            {earthquakeText.reportVocab.countOne.four}<br/>
            {earthquakeText.reportVocab.countOne.five}
          </div>
          <div className="round-border light-green-background">
            {earthquakeText.reportVocab.countTwo.six}<br/>
            {earthquakeText.reportVocab.countTwo.seven}<br/>
            {earthquakeText.reportVocab.countTwo.eight}<br/>
            {earthquakeText.reportVocab.countTwo.nine}
          </div>
          <div className="round-border light-green-background">
            {earthquakeText.reportVocab.countAmp.fiveMin}<br/>
            {earthquakeText.reportVocab.countAmp.fiveMax}<br/>
            {earthquakeText.reportVocab.countAmp.sixMin}<br/>
            {earthquakeText.reportVocab.countAmp.sixMax}
          </div>
          <div className="round-border light-green-background">
            {earthquakeText.reportVocab.countDec.one}<br/>
            {earthquakeText.reportVocab.countDec.two}<br/>
            {earthquakeText.reportVocab.countDec.three}
          </div>
        </div>

        <p className="round-border dark-red-border">
          <b>{earthquakeText.definitionRed.mag}</b>{earthquakeText.definitionRed.magnitudeDef}<br/>
          <b>{earthquakeText.definitionRed.shindo}</b>{earthquakeText.definitionRed.shindoDef}<br/>
          <a href={earthquakeText.definitionRed.link}>{earthquakeText.definitionRed.link}</a>
        </p>

        <div className="flex-row">
          <p className="round-border red-background">{earthquakeText.eqRecordRow.kobe}</p>
          <p className="round-border red-background">{earthquakeText.eqRecordRow.tohoku}</p>
          <p className="round-border red-background">{earthquakeText.eqRecordRow.kumamoto}</p>
        </div>
      </div>
    );
  }
}

export default EarthquakeContent;
