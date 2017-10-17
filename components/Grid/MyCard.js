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
                  <this.props.type json={this.props.json} fontSize="12px"/>

                  <Button waves='light' className='red'>
                    <Icon size={32} icon={ic_file_download} style={{ color: 'green' }}/>
                  </Button>


                  <Button waves='light'  className='white'>
                    <Icon size={32} icon={ic_refresh} style={{ color: 'green' }}/>
                  </Button>


                  <Modal
                  trigger={
                        <Button waves='light'  className='white'>
                          <Icon size={32} icon={ic_fullscreen} style={{ color: 'green' }}/>
                        </Button>}>

                        <this.props.type json={this.props.json} fontSize="20px"/>

                </Modal>
            </Card>
          )

  }
}
