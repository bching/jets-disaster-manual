import React, {Component} from 'react';

import earthquakeText from './json/earthquakeText.json';

const reportVocab = earthquakeText.reportVocab;
const tvVocabJson = earthquakeText.tvRikai.vocab;

const tvPhraseJson = earthquakeText.tvRikai.phrase;
const tvPhraseArr = [];
Object.keys(tvPhraseJson).forEach(key => {
  tvPhraseArr.push(tvPhraseJson[key]);
});

const scenarioTwoVocab = earthquakeText.scenario2.vocab;
const scenarioTwoPhrases = earthquakeText.scenario2.phrase;

function RenderObjectsOfList(props) {
  const scen2Arr = Object.keys(props.content).map((key, index) => {
    let wordList = [];
    wordList = props.content[key].map((word, index) => {
      return( <div key={index}>{word}</div> );
    });

    return(
        <div className={props.className} key={index}>
          {wordList}
        </div>
      );
  });

  return(
    <div className="vocab-grid">
      {scen2Arr}
    </div>
  );
}

class EarthquakeContent extends Component {
  render() {
    let toggle = "";
    if(this.props.toggle === true) {
      toggle = "-active"
    }

    return (
      <div className={"sub-row" + toggle}>
        <div className="chapter-content">
          <h2>自分を守る編</h2>

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

            <div className="flex-vertical">
              <p className="static-box round-border light-green-border light-green-background">{earthquakeText.tvScenario.one}</p>
              <p className="static-box round-border dark-red-border">{earthquakeText.tvScenario.two}</p>
            </div>

            <p className="static-box center-text square-border light-green-border">{earthquakeText.tvScenario.three}</p><br/>

            <RenderObjectsOfList
              content={reportVocab}
              className="round-border light-green-background"></RenderObjectsOfList>

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

            <p className="static-box center-text square-border light-green-border">{earthquakeText.tvRikai.header}</p><br/>

            <RenderObjectsOfList
              content={tvVocabJson}
              className="round-border light-green-background"
            />

            <RenderObjectsOfList
              content={tvPhraseJson}
              className="round-border salmon-background"
            />

            <p className="red-thin-round-border red-background">
              <b>Quick notes:</b><br/>
              {earthquakeText.quickNotes.point1}<br/>
              {earthquakeText.quickNotes.point2}<br/>
              {earthquakeText.quickNotes.point3}
            </p>

            <h2>自分を守る編（２）</h2>
            <p className="round-border light-brown-border light-brown-background">
              {earthquakeText.scenario2.one}<br/>
              {earthquakeText.scenario2.two}
            </p>
            <p className="round-border dark-red-border">
              {earthquakeText.scenario2.action}
            </p>
            <p className="square-border light-green-border">
              {earthquakeText.scenario2.vocabHeader}
            </p>

            <RenderObjectsOfList
              content={scenarioTwoVocab}
              className="round-border light-green-background"
            />

            <RenderObjectsOfList
              content={scenarioTwoPhrases}
              className="round-border salmon-background"
            />

        </div>
      </div>
    );
  }
}

export default EarthquakeContent;
