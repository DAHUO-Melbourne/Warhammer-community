import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import {Header, LogoImage, Sociallink, Socialicon, Navlink, Navbar, Redirectbutton} from './style';
import { createFromIconfontCN } from '@ant-design/icons';
const IconFont = createFromIconfontCN({scriptUrl: '//at.alicdn.com/t/font_1671526_td7nvqrzkch.js',});

class Homepage extends Component{
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
  return (
    <div className="App">
      <Header>
        <Sociallink>
          <a href="https://www.instagram.com/warhammerofficial/" target="_blank">
          <Socialicon src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1200px-Instagram_logo_2016.svg.png" href="https://www.w3schools.com"/>
          </a>
          <a href="https://twitter.com/warhammer_art" target="_blank">
          <Socialicon src="https://cdn4.iconfinder.com/data/icons/social-media-flat-7/64/Social-media_Twitter-512.png"/>
          </a>
        </Sociallink>
        <LogoImage src="https://content.totalwar.com/total-war/com.totalwar.www2019/uploads/2017/07/24103739/TWW2_RGB_logo_optz-300x130.png" />
        <Navlink>
          <IconFont type='icon-daohang' style={this.state.style} onClick={this.handleClick.bind(this)} onMouseEnter={this.handleMouseEnter.bind(this)} onMouseLeave={this.handleMouseLeave.bind(this)}/>
        </Navlink>
      </Header>

      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://steamuserimages-a.akamaihd.net/ugc/932679025732261002/B7886BE9A0633A06F45B5ACC8EC3B5DAA4F3259D/"
            alt="First slide"
          />
        <Carousel.Caption>
          <h3>Welcome to War Hammer World!</h3>
          <p>Ah mighty Sigmar, saviour of the Empire, give me strength!</p>
          <Redirectbutton>Click to join us</Redirectbutton>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.pinimg.com/originals/a2/ed/c4/a2edc4e26714e8777f0b55e156943331.jpg"
            alt="Second slide"
          />
        <Carousel.Caption>
          <h3>High Elves</h3>
          <p>We are the chosen of Asuryan, beloved of the gods and heirs to the world. </p>
          <Redirectbutton>Click to join us</Redirectbutton>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.pinimg.com/originals/08/31/06/083106da11caaac8bb099744e8445870.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Lizardmen</h3>
            <p>Before Elves, before Dwarfs, before Men, the Old Ones arrived upon this world. Then came Chaos and the Great Plan of the Old Ones was unmade. We are the last of their servants, and only by our hand shall the Great Plan be restored, with the total defeat of the usurping younger races.</p>
            <Redirectbutton>Click to join us</Redirectbutton>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://img2.ali213.net/picfile/News/2018/10/18/2018101820105651.jpg"
            alt="Fourth slide"
          />
          <Carousel.Caption>
            <h3>Dark Elves</h3>
            <p>If they shall not bow to me, the rightful ruler of Ulthuan, then I shall see each tower crumble and every soul scourged in pain until they beg for my rule.</p>
            <Redirectbutton>Click to join us</Redirectbutton>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images-na.ssl-images-amazon.com/images/I/B1sopzayLmS.png"
            alt="Fifth slide"
          />
          <Carousel.Caption>
            <h3>Skavens</h3>
            <p>All decent folk find the common rat repulsive. Harbinger of disease, it scavenges on our waste-heaps and frightens our children. How immeasurably worse then is the foul Skaven - standing on its hindlegs in foul parody of a human. Rats as tall as man, and blessed with the most vile intellect and cunning. They are the dark side of our souls, come to destroy us for our sins.</p>
            <Redirectbutton>Click to join us</Redirectbutton>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Navbar>
        <div  ref={this.wrapperRef} className='Nav1'>
          <div style={{textAlign:'center', color: 'white', marginTop:'10px', marginBottom:'10px'}}>Empire</div>
          <div style={{textAlign:'center', color: 'white', marginTop:'10px', marginBottom:'10px'}}>High Elves</div>
          <div style={{textAlign:'center', color: 'white', marginTop:'10px', marginBottom:'10px'}}>Lizardmen</div>
          <div style={{textAlign:'center', color: 'white', marginTop:'10px', marginBottom:'10px'}}>Dark Elves</div>
          <div style={{textAlign:'center', color: 'white', marginTop:'10px', marginBottom:'10px'}}>Skavens</div>
        </div>
      </Navbar>
    </div>
  );
  }  
}

export default Homepage;