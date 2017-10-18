import React from 'react';

import {Row, Col} from 'react-materialize';

import {Card, CardTitle, Button} from 'react-materialize';

import MySunburstChart from '../MySunburstChartComponent'
import MySummary from '../MySummaryComponent'
import MySliderComponent from '../MySliderComponent'
import MyCard from './MyCard'




import GambaProfile from '../../data/profiles/fullProfile.json';
import GambaUsers from '../../data/profiles/all/profiles.json';

export default class MainGrid extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
            return (
                  <Card className='light-blue' style={{"font-family": "Bangers", "font-size": "20px", "left":"1%", "width":"98%"}}>

                        <div style={{"text-align":"center", "font-size": "50px"}}>Panel Gamba</div>
                        <Row>
                            <Col s={6} className='grid-example'>
                                <Row>
                                  <Col s={12} className='grid-example' >
                                            <div className='white-text' > Resumen de personalidad Gamba </div>
                                            <div  style={{ "border": "0px #26a69a solid" }}>
                                            <MyCard json={GambaProfile} type={MySummary}  />
                                            </div>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col s={12} className='grid-example' >
                                            <div className='white-text' > Gráfico de personalidad Gamba </div>
                                            <div  style={{ "border": "0px #26a69a solid" }}>
                                            <MyCard json={GambaProfile} type={MySunburstChart} />
                                            </div>
                                  </Col>
                                </Row>

                            </Col>
                            <Col s={6} className='grid-example'>
                                <MySliderComponent json={GambaUsers}/>
                            </Col>
                      </Row>
                </Card>


          )

  }
}
