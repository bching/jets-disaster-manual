import React, {Component} from 'react';

const earthquakeText = {
  opening: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
}

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
          <p className="blue-round-border">{earthquakeText.opening}</p>
        </div>
      </div>
    );
  }
}

export default EarthquakeContent;
