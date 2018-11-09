import React, {Component} from 'react';

const earthquakeText = {
  goal: "ゴール：（JETの先生）が災害の状況を正しく理解し、自分の身を守りながら安全に避難できる",
  scenario: {
    one: "３月のある晴れた日。休日の日中、自宅で一人でテレビをみている。",
    two: "テレビで緊急地震速報が入る。その後地震が発生。強い揺れ。震度は５強。",
  },
  question: "あなたはどうしますか。",
  actionOne: "１.１　あわてず身の安全を守ることができる場合",
  actionOneResult: "身を守る行動ができました",
  actionOneBubble: "良い行動",
  actionTwo: "１.２　何もできない場合",
  actionTwoResult: "身を守ることができませんでした",
  actionTwoBubble: "悪い行動",
  youtubeBox: {
    emergencyInfo:
      "緊急地震速報：突然テレビからチャイムの音が鳴り、" +
      "緊急地震速報が放送される。テレビの他に、ラジオ、携帯電話・スマートフォンにも伝えられる。",
    linkOne: {
      leadText: "Be familiar with the sound: ",
      link: "https://www.youtube.com/watch?v=mxPEAN2wao0",
    },
    linkTwo: {
      leadText: "Japanese cell phone EEW sound: ",
      link: "https://www.youtube.com/watch?v=DbRJAflnt8A",
    },
  },
  tvScenario: {
    one: "テレビ、携帯から緊急地震速報が発令されました。内容が理解できますか。",
    two: "テレビの緊急地震速報の内容が理解できた。",
    three: "テレビの速報を理解するために必要な言葉",
  },
  reportVocab: {
    earthquake: {
      eng: "Earthquake",
      say: "Jishin",
      hira: "じしん",
      kanji: "地震",
    },
    intensity: {
      eng: "Seismic Intensity",
      say: "Shindo",
      hira: "しんど",
      kanji: "震度",
    },
    magnitude: {
      eng: "Magnitude",
      say: "Magunichuudo",
      hira: "マグニチュード",
    },
    epicenter: {
      eng: "Epicenter",
      say: "Shingenchi",
      hira: "しんげんち",
      kanji: "震源地",
    },
    countOne: {
      one: "1 ichi",
      two: "2 ni",
      three: "3 san",
      four: "4 yon",
      five: "5 go",
    },
    countTwo: {
      six: "6 roku",
      seven: "7 nana",
      eight: "8 hachi",
      nine: "9 kyuu",
    },
    countAmp: {
      fiveMin: "5- go jaku",
      fiveMax: "5+ go kyoo",
      sixMin: "6- roku jaku",
      sixMax: "6+ roku kyoo",
    },
    countDec: {
      one: "7.3 nana ten san",
      two: "9.2 kyuu ten ni",
      three: "9.0 kyuu ten zero",
    },
  },
};

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

        <div className="vocab-grid">
          <div className="round-border">
            {earthquakeText.reportVocab.earthquake.eng}<br/>
            {earthquakeText.reportVocab.earthquake.say}<br/>
            {earthquakeText.reportVocab.earthquake.hira}<br/>
            {earthquakeText.reportVocab.earthquake.kanji}
          </div>
          <div className="round-border">
            {earthquakeText.reportVocab.intensity.eng}<br/>
            {earthquakeText.reportVocab.intensity.say}<br/>
            {earthquakeText.reportVocab.intensity.hira}<br/>
            {earthquakeText.reportVocab.intensity.kanji}
          </div>
          <div className="round-border">
            {earthquakeText.reportVocab.magnitude.eng}<br/>
            {earthquakeText.reportVocab.magnitude.say}<br/>
            {earthquakeText.reportVocab.magnitude.hira}<br/>
            {earthquakeText.reportVocab.magnitude.kanji}
          </div>
          <div className="round-border">
            {earthquakeText.reportVocab.epicenter.eng}<br/>
            {earthquakeText.reportVocab.epicenter.say}<br/>
            {earthquakeText.reportVocab.epicenter.hira}<br/>
            {earthquakeText.reportVocab.epicenter.kanji}
          </div>
          <div className="round-border">
            {earthquakeText.reportVocab.countOne.one}<br/>
            {earthquakeText.reportVocab.countOne.two}<br/>
            {earthquakeText.reportVocab.countOne.three}<br/>
            {earthquakeText.reportVocab.countOne.four}<br/>
            {earthquakeText.reportVocab.countOne.five}
          </div>
          <div className="round-border">
            {earthquakeText.reportVocab.countTwo.six}<br/>
            {earthquakeText.reportVocab.countTwo.seven}<br/>
            {earthquakeText.reportVocab.countTwo.eight}<br/>
            {earthquakeText.reportVocab.countTwo.nine}
          </div>
          <div className="round-border">
            {earthquakeText.reportVocab.countAmp.fiveMin}<br/>
            {earthquakeText.reportVocab.countAmp.fiveMax}<br/>
            {earthquakeText.reportVocab.countAmp.sixMin}<br/>
            {earthquakeText.reportVocab.countAmp.sixMax}
          </div>
          <div className="round-border">
            {earthquakeText.reportVocab.countDec.one}<br/>
            {earthquakeText.reportVocab.countDec.two}<br/>
            {earthquakeText.reportVocab.countDec.three}
          </div>
        </div>
      </div>
    );
  }
}

export default EarthquakeContent;
