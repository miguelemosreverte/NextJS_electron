import React from 'react';
import ReactDOM from 'react-dom';


import MainGrid from './components/Grid/MainGrid'
import ParallaxPresentation from './components/Grid/ParallaxPresentation'
import MyFooterComponent from './components/MyFooterComponent'

import { BrowserRouter } from 'react-router-dom'
import { Link, Switch, Route, NavLink } from 'react-router-dom'

import { Button } from 'react-materialize'


const App = ({name}) =>

  <div>

  <Switch>
    <Route path='/MainGrid' component={MainGrid}/>
    <Route path='/ParallaxPresentation' component={ParallaxPresentation}/>
  </Switch>



      <Button
        floating
        fab='vertical'
        className='red'
        waves='light'
        href='/MainGrid'
        icon='>'
        style={{right: "90px"}}>



        <Link waves='light' floating large className='btn' to="/ParallaxPresentation"
        style={{position: "relative",
              right: "90px",
              top: "50px"}}>
              Presentation
        </Link>

        <Link waves='light' floating large className='btn' to="/MainGrid"
        style={{position: "relative",
              right: "90px",
              top: "50px"}}>
              Dashboard
        </Link>

      </Button>



    <MyFooterComponent />


  </div>



ReactDOM.render(

  <BrowserRouter >
    <App />
  </BrowserRouter>, document.querySelector('.react-root')
);

/*

    <Button

      className='red'
      style={{bottom: '45px', width: '100%'}}
      waves='light'
      node='a'
      href='/MainGrid'> CONTINUE </Button>
*/


/*


    <Button
      node='a'
      floating
      fab='vertical'
      large
      className='red'
      waves='light'
      href='MyGrid'
      icon='>'
    />
*/

/*
<SideNav
  trigger={<Button>Tour</Button>}
  options={{ closeOnClick: true }}
  >

  <SideNavItem subheader>Subheader</SideNavItem>
  <SideNavItem waves href='#!third'>Third Link With Waves</SideNavItem>
  <SideNavItem divider />
  <SideNavItem subheader>Subheader</SideNavItem>
  <SideNavItem waves href='#!third'>Third Link With Waves</SideNavItem>
</SideNav>

*/
