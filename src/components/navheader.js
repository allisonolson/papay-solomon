import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';

import { Link } from 'react-router-dom';
import './base.css';

export default class NavHeader extends React.Component {

  constructor(props) {
    super(props); 
    
    this.state = {
      
    }; 
  }

  componentDidMount() {
    window.onscroll = this.collapseMenu; 
  }

  componentWillUnmount() {
    window.onscroll = null; 
  }


  resetScrollBar = () => {
    window.scrollTo(0,0);
  }

  eventFire = (el, etype) => {
    if (el.fireEvent) {
      el.fireEvent('on' + etype);
    } else {
      var evObj = document.createEvent('Events');
      evObj.initEvent(etype, true, false); 
      el.dispatchEvent(evObj); 
    }
  }

  menuIsExpanded = () => { 
    var hamburger = document.getElementsByClassName("navbar-toggler"); 
    if (hamburger.length > 0) {
      hamburger = hamburger[0];
      if (hamburger.className) { 
        return hamburger.className.includes("collapsed"); 
      }
    }
    return false; 
  }  

  collapseMenu = () => {
    if (this.menuIsExpanded()) {
      this.eventFire(document.getElementsByClassName("navbar-toggler")[0], 'click'); 
    }
  }

  render() {
    var navbarBrand = <Link to='/' className="headerLink"><a className="headerLink">PAPAY SOLOMON</a></Link>;

    if (this.props.doNotIncludeNavbarBrand) {
      navbarBrand = "";
    }

    var cvDownload = "";
    if (this.props.includeCvDownload) {
      cvDownload = <a href="/CV.pdf" target="_blank" rel="noopener noreferrer" className="downloadicon"><img src="./img/icons/download.svg" alt="download" className="downloadIcon" ></img></a>
    }
    
    var navbar = 
      <Navbar scrolling light sticky="top" className="sticky" collapseOnSelect={true} expand={false} style={{alignItems: "flex-start"}}>
        <Navbar.Brand style={{zIndex: 2, marginLeft: "0.75rem"}}>
          {navbarBrand}
        </Navbar.Brand>
        <Navbar.Text className="sectionheader"><span>{this.props.sectionHeader}{cvDownload}</span></Navbar.Text>
        <Navbar.Toggle style={{zIndex: 2}} />
        <Navbar.Collapse style={{textAlign: 'right', zIndex: 2}}>
          <Nav className="justify-content-end" defaultActiveKey="/">
          <Dropdown as={Nav.Item}>
          <Dropdown.Toggle as={Nav.Link}>WORKS</Dropdown.Toggle>
           <Dropdown.Menu style={{backgroundColor: 'transparent'}}>
              <Dropdown.Item style={{textAlign: 'right', backgroundColor: 'transparent'}}>
                <Link className={'nav-link'} onClick={this.resetScrollBar} style={{backgroundColor: 'transparent'}} to='/chapter1'>CHAPTER &#8544;</Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Nav.Item eventKey={2}>
            <Link className={'nav-link'} onClick={this.resetScrollBar} to='/about'>ABOUT</Link>
          </Nav.Item>
          <Nav.Item eventKey={3}>
            <Link className={'nav-link'} onClick={this.resetScrollBar} to='/news'>NEWS</Link>
          </Nav.Item>
          <Nav.Item eventKey={4}>
            <Link className={'nav-link'} onClick={this.resetScrollBar} to='/cv'>CV</Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>; 

    if (this.props.useLightNavbar) {
      navbar = 
      <Navbar scrolling varient="dark" fixed="top" collapseOnSelect={true} expand={false} style={{zIndex: "1", position: "fixed", color: "white", paddingBottom: "0px", alignItems: "flex-start"}}>
        <Navbar.Brand>
          {navbarBrand}
        </Navbar.Brand>
        <Navbar.Toggle> <div className={'test'}/> </Navbar.Toggle>
        <Navbar.Collapse style={{textAlign: 'right'}}>
          <Nav className="justify-content-end" defaultActiveKey="/">
            <Dropdown as={Nav.Item}>
              <Dropdown.Toggle as={Nav.Link} style={{color: 'white'}} >WORKS</Dropdown.Toggle>
              <Dropdown.Menu style={{backgroundColor: 'transparent'}}>
                <Dropdown.Item style={{textAlign: 'right', backgroundColor: 'transparent'}}>
                  <Link className={'nav-link'} style={{backgroundColor: 'transparent', color: 'white'}} onClick={this.resetScrollBar} to='/chapter1'>CHAPTER &#8544;</Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
         
            <Nav.Item eventKey={2}>
              <Link className={'nav-link'} style={{color: 'white'}} onClick={this.resetScrollBar} to='/about'>ABOUT</Link>
            </Nav.Item>
            <Nav.Item eventKey={3}>
              <Link className={'nav-link'} style={{color: 'white'}} onClick={this.resetScrollBar} to='/news'>NEWS</Link>
            </Nav.Item>
            <Nav.Item eventKey={4}>
              <Link className={'nav-link'} style={{color: 'white'}} onClick={this.resetScrollBar} to='/cv'>CV</Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>; 
    } else if (this.props.useTransparentDarkNavbar) {
      navbar = 
      <Navbar scrolling light fixed="top" collapseOnSelect={true} expand={false} style={{alignItems: "flex-start"}}>
        <Navbar.Brand style={{zIndex: 2, marginLeft: "0.75rem"}}>
          {navbarBrand}
        </Navbar.Brand>
        <Navbar.Toggle style={{zIndex: 2}} />
        <Navbar.Collapse style={{textAlign: 'right', zIndex: 2}}>
          <Nav className="justify-content-end" defaultActiveKey="/">
          <Dropdown as={Nav.Item}>
          <Dropdown.Toggle as={Nav.Link}>WORKS</Dropdown.Toggle>
           <Dropdown.Menu style={{backgroundColor: 'transparent'}}>
              <Dropdown.Item style={{textAlign: 'right', backgroundColor: 'transparent'}}>
                <Link className={'nav-link'} style={{backgroundColor: 'transparent'}} onClick={this.resetScrollBar} to='/chapter1'>CHAPTER &#8544;</Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Nav.Item eventKey={2}>
            <Link className={'nav-link'} onClick={this.resetScrollBar} to='/about'>ABOUT</Link>
          </Nav.Item>
          <Nav.Item eventKey={3}>
            <Link className={'nav-link'} onClick={this.resetScrollBar} to='/news'>NEWS</Link>
          </Nav.Item>
          <Nav.Item eventKey={4}>
            <Link className={'nav-link'} onClick={this.resetScrollBar} to='/cv'>CV</Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>; 
    } else if (this.props.useDarkNavbar) {
      navbar = 
      <Navbar scrolling light sticky="top" className="sticky" collapseOnSelect={true} expand={false} style={{alignItems: "flex-start"}}>
          <Navbar.Brand style={{zIndex: 2, marginLeft: "0.75rem"}}>
            {navbarBrand}
          </Navbar.Brand>
          <Navbar.Text className="sectionheadernotext"><div></div></Navbar.Text>
          <Navbar.Toggle style={{zIndex: 2}} />
          <Navbar.Collapse style={{textAlign: 'right', zIndex: 2}}>
            <Nav className="justify-content-end" defaultActiveKey="/">
            <Dropdown as={Nav.Item}>
            <Dropdown.Toggle as={Nav.Link}>WORKS</Dropdown.Toggle>
            <Dropdown.Menu style={{backgroundColor: 'transparent'}}>
                <Dropdown.Item style={{textAlign: 'right', backgroundColor: 'transparent'}}>
                  <Link className={'nav-link'} style={{backgroundColor: 'transparent'}} onClick={this.resetScrollBar} to='/chapter1'>CHAPTER &#8544;</Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Nav.Item eventKey={2}>
              <Link className={'nav-link'} onClick={this.resetScrollBar} to='/about'>ABOUT</Link>
            </Nav.Item>
            <Nav.Item eventKey={3}>
              <Link className={'nav-link'} onClick={this.resetScrollBar} to='/news'>NEWS</Link>
            </Nav.Item>
            <Nav.Item eventKey={4}>
              <Link className={'nav-link'} onClick={this.resetScrollBar} to='/cv'>CV</Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>; 
    }

    return (
      navbar
    );
  }
};