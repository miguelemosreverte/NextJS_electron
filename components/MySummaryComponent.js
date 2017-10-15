import React from 'react';

export default class MySummary extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    var PersonalityTextSummaries = require('personality-text-summary');
     // locale is one of {'en', 'es', 'ja', 'ko'}.  version refers to which version of Watson Personality Insights to use, v2 or v3.
     var v3EnglishTextSummaries = new PersonalityTextSummaries({ locale: 'es', version: 'v3' });

     // retrieve the summary for a specified personality profile (json)
     var textSummary  = v3EnglishTextSummaries.getSummary(this.props.json);
     this.summary.innerHTML = (textSummary);
     this.summary.style.fontSize = "30px";
  }

  render() {
            return (
                      <div className="container">
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <div ref={(input) => { this.summary = input; }} />

                      </div>
            );
  }
}
