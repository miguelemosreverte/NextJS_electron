import React from 'react';

import ReusableSlide from './ReusableSlide'
import {Slider, Slide, Card, MediaBox, Carousel} from 'react-materialize';


import MySummary from './MySummaryComponent'
import MySunburstChart from './MySunburstChartComponent'
import GambaProfile from '../data/profiles/fullProfile.json';

export default class MySliderComponent extends React.Component {
  constructor(props) {
    super(props);


  }

  render() {
            return (

              <Carousel style={{
  width:"900px",
  height:"500px"}}  >

              {Object.keys(this.props.json).map(username => (

                <div className='red'>
                  <h2>First Panel</h2>
                  <p className='white-text'>


                    {username}
                    <MediaBox src={'https://twitter.com/' + username + '/profile_image?size=original'} caption="A demo media box1" width="650"/>
                    <MySummary json={GambaProfile}/>
                    <MySunburstChart json={GambaProfile}/>
                  </p>
                </div>


            ))}


              </Carousel>


            );
  }
}
