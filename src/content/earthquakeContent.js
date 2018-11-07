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
          <p className="round-border blue-border">{earthquakeText.goal}</p>

          <div className="static-box round-border light-brown-border">{earthquakeText.question}</div><br/>
          <p className="static-box round-border dark-red-border">{earthquakeText.actionOne}</p><br/>
          <p className="static-box round-border dark-red-border">{earthquakeText.actionTwo}</p>

          <p className="red-thin-round-border light-red-background">{earthquakeText.youtubeBox.emergencyInfo}<br/>
            <b>{earthquakeText.youtubeBox.linkOne.leadText}</b><a href={earthquakeText.youtubeBox.linkOne.link}>{earthquakeText.youtubeBox.linkOne.link}</a><br/>
            <b>{earthquakeText.youtubeBox.linkTwo.leadText}</b><a href={earthquakeText.youtubeBox.linkTwo.link}>{earthquakeText.youtubeBox.linkTwo.link}</a></p>
        </div>
      </div>
    );
  }
}

export default EarthquakeContent;
