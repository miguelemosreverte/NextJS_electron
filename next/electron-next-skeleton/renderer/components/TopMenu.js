import {Navbar, NavItem, Icon} from 'react-materialize'
import Header from '../components/Header'
export default () => (
      <div>
        <Header/>
        <Navbar brand='RadioGamba' left fixed>
          <NavItem href='start'>start</NavItem>
          <NavItem href='viewBars'>viewBars</NavItem>
          <NavItem href='viewSummary'>Personality Summary</NavItem>
          <NavItem href='viewSunburstChart'>Sunburst Chart</NavItem>
          <NavItem href='about'>about</NavItem>
        </Navbar>
      </div>
    )
