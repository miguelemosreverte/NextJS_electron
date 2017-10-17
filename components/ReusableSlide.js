import React from 'react';

import {Slide} from 'react-materialize';

export default class ReusableSlide extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
            return (
              <Slide
                src= {this.props.image}
                title={this.props.title}
                >
                {this.props.text}
                {this.props.children}
              </Slide>
            );
  }
}
