import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import {Redirectbutton} from './style';
class Homepage extends Component{
  render(){
  return (
    <div className="App">
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
    </div>
  );
  }  
}

export default Homepage;