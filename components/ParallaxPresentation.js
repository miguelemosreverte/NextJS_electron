import React from 'react';

import {Parallax} from 'react-materialize';
import Explanation from './Explanation'


export default class MainGrid extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
            return (
              <div>
                <Parallax imageSrc="../static/images/watson.jpg"/>
                <Explanation title= "IBM Watson" text="Análisis de comunidades de Twitter" />

                <Parallax imageSrc="../static/images/twitter2.png"/>

              </div>
          )

  }
}
