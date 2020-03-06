import React, { Component, Fragment } from 'react';

class Details extends Component{
  // eslint-disable-next-line no-useless-constructor
  constructor(props){
    super(props);
  }
  render(){
//    const {title, content} = this.props.location.query;
    return(
      <Fragment>
        <div>{this.props.location.title}</div>
        <div>{this.props.location.content}</div>
      </Fragment>
    )
  }
}

export default Details;