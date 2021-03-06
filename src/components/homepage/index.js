import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import {Redirectbutton} from './style';
import {Link} from 'react-router-dom';
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
          <Link to={{pathname:'/details', query:{title:'Empire', content:'<p>Of the Human nations of the Old World, the most important by far is that of the Empire of Man, more often called simply "The Empire." It was forged by the warrior-king and ascended deity Sigmar from the primitive Human tribes of barbarians who inhabited what became the lands of the southern Empire more than 2500 years ago.</p><p>Although not as skilled in craftsmanship as the Dwarfs or in magic as the High Elves, the people of the Empire are not beholden by the limits of tradition to the same extent as those elder races and continue to progress culturally, technologically and magically.</p><p> Having yet to succumb to any threat, external or internal, it is the faith, the sense of righteousness, and the unconquerable spirit of the realms citizens which gives the Empire its strength, as well as the ruthless efficiency of its military and religious orders.</p><p> The greatest nation of the Old World, the Empire of Man is ruled by an Emperor and is composed of the descendants of the ancient tribes of Mankind united by the great Human warrior Sigmar Heldenhammer after the Battle of Black Fire Pass. Sigmar was deified after his death by his people and his promise of eternal aid from the Empire for the kingdoms of the Dwarfs still stands today.</p>', src:'https://www.youtube.com/embed/7i4d3ignBNQ'}}}><Redirectbutton style={{outline:'none'}}>Click to join us</Redirectbutton></Link>
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
          <Link to={{pathname:'/details', query:{title:'High Elves', content:'<p>The High Elves, or the Asur as they call themselves, are one of the most ancient and powerful mortal civilisations within the Warhammer World. Hailing from a mighty mist-shrouded island-continent located within the centre of the Great Ocean, the High Elves of Ulthuan are a proud and mighty nation of masterful warriors, peerless mages and lords of the sky and sea. They are an ancient race with powerful armies and even grander magic, building a grand and all-mighty civilisation who, alongside the Dwarfs, fought a long-forgotten, apocalyptic war which saw some of the greatest and most powerful mortal heroes battle against the great darkness that tried to consume the world many thousands of years ago. At the zenith of their power, the world was truly theirs for the taking.</p><p>Yet their noble and compassionate nature, which was once one of the Elves greatest and most noble character was soon replaced by a great sense of pride and hubris in their own vanity and superiority. In their blind arrogance, they have only succeeded in shattering their once powerful friendship with the Dwarfs, culminating in a Great War which only crippled these two elder races and shattered whatever bright future there was for this young world. Isolated and alone in a world they no longer control, the High Elves are facing the twilight years of their existence, their cities no longer bustling with vibrancy and life as they used to be but now serve as a gloomy reminder of their ultimate, impending demise.</p><p>The time of the High Elves has passed, or so it is said, yet such is their immense pride that they fight on nonetheless, for they consider themselves the true and rightful protectors of this ancient world, and they believe that so long as their civilisation persist throughout the ages, this dying world will never fall into complete darkness. If oblivion is indeed to be their fate, they have chosen to face it with arrow nocked and sword held high, defending the world they have loved and protected for so long. So do the white-garb.</p>', src:'https://www.youtube.com/embed/D56CckqlsB4'}}}><Redirectbutton style={{outline:'none'}}>Click to join us</Redirectbutton></Link>
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
            <Link to={{pathname:'/details', query:{title:'Lizardmen', content:'<p>The Lizardmen, sometimes known as the Cold Ones or the Children of the Gods, are an ancient, savage intelligent race of cold-blooded reptilian humanoids that were at one time the first and oldest civilisation within the Warhammer World. Long before the rise of Men, Elf or Dwarf, the Empire of the Lizardmen ruled supreme.</p><p>Alien, enigmatic, and without mercy, the Lizardmen were there when it all began and will be there when the world draws its last dying breath, never tiring nor relenting until order is finally restored to this uncaring, chaotic world. Such is what they were made to do, for they are the ancient servants of the Old Ones, the one true protectors of this very world.</p><p>Once, in a long and forgotten age, the Lizardmen ruled over it all, dominating this ancient world during an age of primeval monsters. Although their realm is now partly in ruins and overgrown, they seek once more to rise up and reclaim that which they have lost many millennia ago. While the task at hand remains near impossible, the Empire of the Lizardmen still fight on - unleashing their cold-blooded savagery upon any who would stand in the way of their sacred mission.</p><p>From the lush jungles they come, beneath totems of gold, the Lizardmen march to war, the ground trembling from the approach of their large and mighty reptilian armies. They go to battle for reasons indecipherable to others, an ancient plan known only to themselves. None can ever understand their motives nor their ceaseless drive, for none truly understand that they are the rightful inheritors of the world and it is their sacred, if inscrutable, duty to restore order across the planet. If this means the wholesale eradication of the lesser upstart races outside of the Great Plan, then the Lizardmen Empire shall enact this world-spanning genocide once more.</p>', src:'https://www.youtube.com/embed/g3CmxjTFv_Y'}}}><Redirectbutton style={{outline:'none'}}>Click to join us</Redirectbutton></Link>
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
            <Link to={{pathname:'/details', query:{title:'Dark Elves', content:'<p>The Dark Elves, or the Druchii as they call themselves in their own tongue, also known as the Nagarrothi or the "Dark Ones", are one of the most ancient, powerful, and certainly the most sadistic of the three Elven civilisations of the world.</p><p>In the bleak, chilly lands of the continent of Naggaroth in the New World lies the Dark Elven kingdoms of the Witch King Malekith, a realm born from the depths of malice and hate, a kingdom that seeks nothing more than to despoil a world its people believe loathes their existence.</p><p>With malevolent eyes, the Dark Elves watch this dying world, knowing it is their birthright to rule all that they survey and those that live upon it are born to do nothing more than to grovel at their feet.</p><p>The Druchii are raiders, slavers and heartless reavers of the first degree, their every whim being nothing more than to sow misery and pain to all that oppose them, for misery and pain is the very lifeblood of their existence. Thus do their Black Arks and Corsair Fleets ply the great waters of the world, raiding and enslaving all before them as a tribute to their own avaricious desires.</p><p>Yet even should every other land bow to their rule, the Dark Elves know that they cannot claim their glorious inheritance whilst their hated brethren, the High Elves, endure.<p><p>Until that day finally dawns when the Isles of Ulthuan are finally theirs, the Dark Elves will continue their bloody quest as they always have. Great raiding fleets, their sails black against the night sky, bring woe and destruction to all the shores of the world, bearing terror and death to distant realms, often for no better reason than because there is no one who can stand against them.</p><p>With every year that passes, the power of Naggaroth ascends to greater heights, built upon the backs of slaves and fuelled by a constant stream of plunder from far-off lands. As the other elder races fade, the Dark Elves thrive, knowing that their hour has at last come.</p>', src:'https://www.youtube.com/embed/zB6FaGBz0Lo'}}}><Redirectbutton style={{outline:'none'}}>Click to join us</Redirectbutton></Link>
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
            <Link to={{pathname:'/details', query:{title:'Skavens', content:'<p>The Skaven, sometimes known as the Ratmen, the Ratkin or the Children of the Horned Rat, are a malevolent and diabolical race of large humanoid rat-creatures that inhabits a massive inter-continental underground empire known in their tongue simply as the Under-Empire, where at the very heart of Skavendom lies the horrific city of Skavenblight, the species capital city and the probable birthplace of the Skaven race. The Skaven as a whole are a cruel, treacherous and highly numerous species that have since spread their loathsome corruption to the farthest corners of the Warhammer World. From deep below the earth, these scavengers have built a vast Empire, whose military power and incomprehensible numbers has the potential to smother the kingdoms of the Old World in a seething tide of violence and anarchy. It is believed by all of Skaven-kind that the world is destined to be theirs, for they consider themselves the Supreme Master Race, undeniably superior in every way to all the other races of the World.</p><p>This unwavering belief stems from the promises made by their horrifically malevolent deity, known by many legendary names, but his most well-known title is that of the Horned Rat. The Horned Rat is known as the Harbinger of Corruption and Disease, the embodiment of all things the Skaven are or ever will be, and whose worship over the Under-Empire is both supreme and absolute. Within the cruel hierarchy of the Under-Empire, the wishes and demands of the Horned Rat is issued and maintained by the ruthless tyranny of the Council of Thirteen, an organisation that consist of the twelve most powerful Warlords within the Under-Empire whilst the thirteenth seat is reserved for the Horned Rat himself. It is due only to the Councils harsh tyranny that the Under-Empire remains unified in some shape or form for centuries, for none could ever hope to overcome the legions of warriors the Council has under their iron-fisted rule.</p>', src:'https://www.youtube.com/embed/k8EQ1KNkpmw'}}}><Redirectbutton style={{outline:'none'}}>Click to join us</Redirectbutton></Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
  }  
}

export default Homepage;