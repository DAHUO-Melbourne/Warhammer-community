import React, { Component, Fragment } from 'react';
import {H1} from './style';
import NetlifyForm from 'react-netlify-form'

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
        <NetlifyForm name='Contact Form'>
    {({ loading, error, success }) => (
      <div>
        {loading &&
          <div>Loading...</div>
        }
        {error &&
          <div>Your information was not sent. Please try again later.</div>
        }
        {success &&
          <div>Thank you for contacting us!</div>
        }
        {!loading && !success &&
          <div>
            <input type='text' name='Name' required />
            <textarea name='Message' required />
            <button>Submit</button>
          </div>
        }
      </div>
    )}
</NetlifyForm>
      </Fragment>
    )
  }
}

export default Details;