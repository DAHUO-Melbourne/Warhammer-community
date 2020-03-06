import React, { Component, Fragment } from 'react';
import {H1} from './style';

class Details extends Component{
  // eslint-disable-next-line no-useless-constructor
  constructor(props){
    super(props);
  }
  render(){
    return(
      <Fragment>
        <H1>{this.props.location.query.title}</H1>
        <div>{this.props.location.query.content}</div>
        <iframe width="560" height="315" src={this.props.location.query.src} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <form name="contact" data-netlify="true" netlify action="POST">
          <p>
            <label>Your Name: <input type="text" name="name" /></label>   
          </p>
          <p>
            <label>Your Email: <input type="email" name="email" /></label>
          </p>
          <p>
          <label>Your Role: 
            <select name="role[]" multiple>
              <option value="leader">Leader</option>
              <option value="follower">Follower</option>
            </select>
          </label>
          </p>
          <p>
            <label>Message: <textarea name="message"></textarea></label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </Fragment>
    )
  }
}

export default Details;