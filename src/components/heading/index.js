import React, { Component, Fragment } from 'react';
import {Header, LogoImage, Sociallink, Socialicon, Navlink, Navbar} from './style';
import { createFromIconfontCN } from '@ant-design/icons';
const IconFont = createFromIconfontCN({scriptUrl: '//at.alicdn.com/t/font_1671526_td7nvqrzkch.js',});
class Heading extends Component{
  constructor(props){
    super(props);
    this.wrapperRef = React.createRef();
    this.state={
      style: {
        display:'block',
        fontSize: '30px', 
        margin:'0 15px 0 0',
        color: 'white',
        transition: 'margin .5s',
      }
    }
  }
  handleMouseEnter(){
    this.setState(()=>({
      style: {
        display:'block',
        fontSize: '30px', 
        margin:'0 15px 0 0',
        color: 'blue',
        transition: 'margin .5s',
      }
    }))
  }

  handleMouseLeave(){
    this.setState(()=>({
      style: {
        display:'block',
        fontSize: '30px', 
        margin:'0 15px 0 0',
        color: 'white',
        transition: 'margin .5s',
      }
    }))
  }

  handleClick(){
    const wrapper = this.wrapperRef.current;
    wrapper.classList.toggle('is-nav-open')
  }
  render(){
    return(
      <Fragment>
      <Header>
        <Sociallink>
          <a href="https://www.instagram.com/warhammerofficial/" target="blank">
          <Socialicon src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1200px-Instagram_logo_2016.svg.png" href="https://www.w3schools.com"/>
          </a>
          <a href="https://twitter.com/warhammer_art" target="blank">
          <Socialicon src="https://cdn4.iconfinder.com/data/icons/social-media-flat-7/64/Social-media_Twitter-512.png"/>
          </a>
        </Sociallink>
        <LogoImage src="https://content.totalwar.com/total-war/com.totalwar.www2019/uploads/2017/07/24103739/TWW2_RGB_logo_optz-300x130.png" />
        <Navlink>
          <IconFont type='icon-daohang' style={this.state.style} onClick={this.handleClick.bind(this)} onMouseEnter={this.handleMouseEnter.bind(this)} onMouseLeave={this.handleMouseLeave.bind(this)}/>
        </Navlink>
      </Header>
      <Navbar>
        <div  ref={this.wrapperRef} className='Nav1'>
          <div style={{textAlign:'center', color: 'white', marginTop:'10px', marginBottom:'10px'}}>Empire</div>
          <div style={{textAlign:'center', color: 'white', marginTop:'10px', marginBottom:'10px'}}>High Elves</div>
          <div style={{textAlign:'center', color: 'white', marginTop:'10px', marginBottom:'10px'}}>Lizardmen</div>
          <div style={{textAlign:'center', color: 'white', marginTop:'10px', marginBottom:'10px'}}>Dark Elves</div>
          <div style={{textAlign:'center', color: 'white', marginTop:'10px', marginBottom:'10px'}}>Skavens</div>
        </div>
      </Navbar>
      </Fragment>
    )
  }
}
export default Heading;