import React, { Component, Fragment } from 'react';
import {H1} from './style';
import NetlifyForm from 'react-netlify-form'

function Details(props){
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

export default Details;