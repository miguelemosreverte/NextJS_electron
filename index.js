import React from 'react';
import ReactDOM from 'react-dom';

import {Slide, Slider, Collapsible, CollapsibleItem, Tabs, Tab, Parallax} from 'react-materialize';
import MySunburstChart from './components/MySunburstChartComponent'
import MySummary from './components/MySummaryComponent'

import GambaProfile from './data/RadioGambaProfile.json';
import GambaUsers from './data/RadioGambaUsers.json';



const App = ({name}) =>
<div>
  <Tabs className='tab-demo z-depth-1'>




    		<Tab title="Inicio">
        <div>
        	<Parallax imageSrc="../static/images/maxresdefault-2.jpg"/>
        	<div className="section white">
        		<div className="row container">
        			<h2 className="header">IBM Watson</h2>
        			<p className="grey-text text-darken-3 lighten-3">Análisis psicológico de comunidades de Twitter</p>
        		</div>
        	</div>
        	<Parallax imageSrc="../static/images/twitter2.png"/>
        </div>

        </Tab>


  		<Tab title="Usuarios Gamba">

        <Slider>
        	<Slide
        		src="http://lorempixel.com/580/250/nature/1"
        		title="This is our big Tagline!">
        		slogan
        	</Slide>
        	<Slide
        		src="http://lorempixel.com/580/250/nature/2"
        		title="Left aligned Caption"
        		placement="left">
        		slogan
        	</Slide>
        	<Slide
        		src="http://lorempixel.com/580/250/nature/3"
        		title="Right aligned Caption"
        		placement="right">
        		slogan
        	</Slide>
        </Slider>

      </Tab>





  		<Tab title="Personalidad colectiva">

              <MySummary json={GambaProfile}  />

      </Tab>


  		<Tab title="Gráfico de personalidad">

        <MySunburstChart json={GambaProfile}  />

      </Tab>



  </Tabs>
</div>;




ReactDOM.render(
  <App />, document.querySelector('.react-root')
);
