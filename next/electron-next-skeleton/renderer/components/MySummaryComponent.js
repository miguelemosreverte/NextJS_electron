import React from 'react';

export default class MySummary extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    var addScript = document.createElement('script');
    addScript.src = '/static/js/JSON/printSummary.js';
    document.body.appendChild(addScript);
  }

  render() {
            return (
                      <div className="container">

                        <script src="/static/js/JSON/getJSON.js"></script>

                        <textarea rows="10" cols="80" readOnly id="summary">
                        </textarea>


                        <p><a href="start">Home</a> </p>
                      </div>
            );
  }
}
