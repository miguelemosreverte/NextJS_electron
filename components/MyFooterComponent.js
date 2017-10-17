import React from 'react';
import {Footer, MediaBox, Row, Col} from 'react-materialize';

export default class MyFooterComponent extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
            return (

              <Footer
                className='example'
              >
              <Row>
                  <h5 className="white-text">IBM Watson: Twitter Personality Insights</h5>
                  <p className="grey-text text-lighten-4">Tweets from the Radio Gamba community were analyzed by Watson. </p>
                  <p className="grey-text text-lighten-4">These are the results.</p>
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
