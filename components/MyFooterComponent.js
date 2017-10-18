import React from 'react';
import {Footer, MediaBox, Row, Col} from 'react-materialize';

export default class MyFooterComponent extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
            return (

              <Footer className='example' style={{"backgroundColor": "orange accent-2"}}>
                  <Row>
                      <h5>IBM Watson: Twitter Personality Insights</h5>
                      <p>
                        Tweets de la Radio Gamba son analizados por Watson.
                      </p>
                      <p>Éstos son los resultados.</p>
                  </Row>
                  <Row>
                      <Col><MediaBox src="../static/images/diapos/IBM-watson-analytics.png" width="120"/></Col>
                      <Col><MediaBox src="../static/images/diapos/gambafm.png" width="80"/></Col>
                      <Col><MediaBox src="../static/images/diapos/spark-logo-trademark.png" width="150"/></Col>
                      </Row>
                      <Row>
                      <Col><MediaBox src="../static/images/diapos/Scala-logoText.png" width="80"/></Col>
                      <Col><MediaBox src="../static/images/diapos/nifi.png" width="150"/></Col>
                      <Col><MediaBox src="../static/images/diapos/logo-universidad-blas-pascal.png" width="80"/></Col>
                  </Row>
              </Footer>

            );
  }
}
