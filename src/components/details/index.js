import React, { Fragment, useState, useEffect } from 'react';
import {H1} from './style';

function Details(props){
  /*
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });
  */
    return(
      <Fragment>
        <H1>{props.location.query.title}</H1>
        <div>{props.location.query.content}</div>
        <iframe width="560" height="315" src={props.location.query.src} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <form name="contact" method="post">
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
        </form>,
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