import React from 'react';

import {Row, Col} from 'react-materialize';

import {Card, CardTitle, Button} from 'react-materialize';
import ParallaxPresentation from './ParallaxPresentation'


import MySunburstChart from '../MySunburstChartComponent'
import MySummary from '../MySummaryComponent'
import MySliderComponent from '../MySliderComponent'
import MyCard from './MyCard'




import GambaProfile from '../../data/profiles/fullProfile.json';
import GambaUsers from '../../data/profiles/all/profile_1.json';

export default class MainGrid extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
            return (

              <Card className='purple '>
              <div style={{position: "relative", left: "0.5%", width:"99.999999999999%"}}>
              <Card className='purple darken-4'>
              <div style={{position: "relative", left: "0.5%", width:"99.999%"}}>
                  <Card className='grey lighten-4'>
                    <Row>
                            <Col s={6} className='grid-example'>
                                <Row>
                                  <Col s={12} className='grid-example'>
                                            Gamba Colectivo
                                            <MyCard json={GambaProfile} type={MySummary}/>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col s={12} className='grid-example'>
                                            Gamba Graph
                                            <MyCard json={GambaProfile} type={MySunburstChart}/>
                                  </Col>
                                </Row>

                            </Col>
                            <Col s={6} className='grid-example'>
                                <Row>
                                      <Col s={12} className='grid-example'>
                                              Gamba Graph
                                                <MySliderComponent json={GambaUsers}/>
                                      </Col>
                                </Row>
                            </Col>
                      </Row>
                  </Card>
                  </div>
                  </Card>
                  </div>

                </Card>


          )

  }
}
