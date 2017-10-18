import React from 'react';

import ReusableSlide from './ReusableSlide'
import {Slider, Slide, Card, MediaBox, Row, Col} from 'react-materialize';


var Carousel = require('nuka-carousel');

import MySummary from './MySummaryComponent'
import MySunburstChart from './MySunburstChartComponent'
import GambaProfile from '../data/profiles/fullProfile.json';

import MyCard from './Grid/MyCard'

export default class MySliderComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){
    /*Object.keys(this.props.json).map( key => (
          console.log(this.props.json[key].profile)
        ))*/
  }

  render() {


            return (
                <div>
                <div  className='white-text'> Perfiles de usuarios Gamba </div>
                <Carousel style={{ "border": "0px #26a69a solid","height": "400px"}} >

                  {
                      Object.keys(this.props.json).map( key => (

                            <Row>
                                <Col s={4} className='grid-example'>
                                  <img src={'https://twitter.com/' + key + '/profile_image?size=original'} style={{"width":"100%","height": "50%", "marginTop":"5%"}} />
                                </Col>
                                <Col s={8} className='grid-example'>
                                    <MyCard json={this.props.json[key].profile} type={MySummary}/>
                                    <MyCard json={this.props.json[key].profile} type={MySunburstChart}/>
                                </Col>
                            </Row>





                    ))
                  }

                </Carousel>
                </div>


            );
  }
}
