/* eslint-disable jsx-a11y/iframe-has-title */
import React, { Fragment, useState, useEffect } from 'react';
import {H1} from './style';

function Details(props){
  window.scrollTo(0,0)
  /*
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });
  */
    return(
      <Fragment>
        <div style={{top:'200px', position:'relative', margin: 'auto'}}>
          <H1>{props.location.query.title}</H1>
          <div style={{margin: '50px auto 50px auto', textAlign:'center'}}>{props.location.query.content}</div>
          <div style={{textAlign:'center'}}>
            <iframe width="560" height="315" align='middle' style={{margin:'auto'}} src={props.location.query.src} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
              <form name="contact" method="post" style={{margin:'50px auto', display:'block'}}>
                <input type="hidden" name="form-name" value="contact" />
                <p>
                  <label>Your Name: <input type="text" name="name"/></label>
                </p>
                <p>
                  <label>Your Email: <input type="email" name="email"/></label>
                </p>
                <p>
                  <label>Message: <textarea name="message"></textarea></label>
                </p>
                <p>
                  <button type="submit">Send</button>
                </p>
              </form>
            </div>
          </div>
      </Fragment>
    )
}
/*
如果用class component的话，那么就可以用
constructor(proos){
  supor(props)
  this.state={}
}
来让子组件在接受父组件的props的同时，也有自己创立的state。但是如果你用functional components的话就没有自己的states了
所以functional components is stateless.
为了给functional components引入state，于是有了hook
*/

export default Details;