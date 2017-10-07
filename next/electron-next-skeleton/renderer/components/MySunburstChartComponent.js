import React from 'react';

export default class MySunburstChart extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    var addScript = document.createElement('script');
    addScript.src = '/static/js/JSON/printChart.js';
    document.body.appendChild(addScript);
  }

  render() {
            return (
                      <div className="container">

                        //<script src="/static/js/sunburst-chart-2.1.3/dist/index.js"></script>
                        <script src="/static/js/JSON/getJSON.js"></script>

                        <h1>Personality Insights Sunburst Chart</h1>
                        <p className="lead">Use it to generate a sunburst chart visualization for your personality.</p>
                        <div className="row">
                          <div className="col-sm-6 col-xs-12">
                            <h2>Personality Profile</h2>
                            <div id="profile" className=""></div>
                          </div>
                          <div className="col-sm-6 col-xs-12">
                            <h2>Personality Sunburst Chart</h2>
                            <div id="sunburstChart">sunburstChart</div>
                          </div>
                        </div>

                        <p><a href="start">Home</a> </p>
                      </div>
            );
  }
}
