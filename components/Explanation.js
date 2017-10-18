import React from 'react';



export default class Explanation extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
            return (
                <div className="section white">
                  <div className="row container">
                    <h2 className="header">{this.props.title}</h2>
                    <p className="grey-text text-darken-3 lighten-3">{this.props.text}</p>
                  </div>
                </div>
          )
  }
}
