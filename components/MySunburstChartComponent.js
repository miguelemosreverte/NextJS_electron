import React from 'react';

export default class MySunburstChart extends React.Component {
  constructor(props) {
    super(props);

  }
  componentDidMount(){
     this.chart.focus();
     var PersonalitySunburstChart = require('personality-sunburst-chart');
     var chart = new PersonalitySunburstChart({
       'element': this.chart,
       'version': 'v2'
     });
     chart.show(this.props.json, '../static/images/GAMBA-FM-LOGO-BLACK.jpg');
  }

  render() {
            return (
                      <div className="container">
                        <div className="row">
                          <div className="col-sm-6 col-xs-12">
                            <div ref={(input) => { this.chart = input; }} />
                          </div>
                        </div>
                      </div>
            );
  }
}
