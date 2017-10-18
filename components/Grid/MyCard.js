import React from 'react';


import {Card, CardTitle, Button, Modal} from 'react-materialize';
import MySummary from '../MySummaryComponent'


import Icon from 'react-icons-kit';
//import icons
import { ic_fullscreen } from 'react-icons-kit/md/ic_fullscreen';
import { ic_file_download } from 'react-icons-kit/md/ic_file_download';
import { ic_refresh } from 'react-icons-kit/md/ic_refresh';


export default class MyCard extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
            return (

              <Card>
                  <this.props.type json={this.props.json} fontSize="5px" small/>

                  <Button waves='light' className='white'>
                    <Icon size={32} icon={ic_file_download} style={{ color: 'purple' }}/>
                  </Button>


                  <Button waves='light'  className='white'>
                    <Icon size={32} icon={ic_refresh} style={{ color: 'purple' }}/>
                  </Button>


                  <Modal
                  style={{"width":"1200px", "height":"1200px"}}
                  trigger={
                        <Button waves='light'  className='white'>
                          <Icon size={32} icon={ic_fullscreen} style={{ color: 'purple' }}/>
                        </Button>}>

                        <this.props.type json={this.props.json} fontSize="20px" />

                </Modal>
            </Card>
          )

  }
}
