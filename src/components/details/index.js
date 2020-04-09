/* eslint-disable jsx-a11y/iframe-has-title */
import React, { Fragment } from 'react';
import {H1} from './style';

function Details(props){
  window.scrollTo(0,0)
  if(props.location.query!==undefined){
    sessionStorage.setItem('title', props.location.query.title);
    sessionStorage.setItem('content', props.location.query.content);
    sessionStorage.setItem('src', props.location.query.src);
  }
  let title = sessionStorage.getItem('title')?sessionStorage.getItem('title'):'';
  let content = sessionStorage.getItem('content')?sessionStorage.getItem('content'):'';
  let src = sessionStorage.getItem('src')?sessionStorage.getItem('src'):'';
    return(
      <Fragment>
        <div style={{backgroundColor:'#fffbf6'}}>
        <div style={{top:'200px', position:'relative', margin: 'auto', backgroundColor:'#fffbf6'}}>
          <H1>{title}</H1>
          <div style={{margin: '50px auto 50px auto', textAlign:'justify', width:'50%'}} dangerouslySetInnerHTML={{ __html:content }}></div>
          <div style={{textAlign:'center'}}>
            <iframe width="560" height="315" align='middle' style={{margin:'auto'}} src={src} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
              <form name="contact" method="post" style={{margin:'50px auto', display:'block'}}>
                <input type="hidden" name="form-name" value="contact" style={{width:'50%'}}/>
                <p>
                  <input type="text" name="name" style={{width:'35%', borderRadius:'20px', border:'none', outline:'none'}} placeholder='Your name'/>
                </p>
                <p>
                  <input type="email" name="email" style={{width:'35%', borderRadius:'20px', border:'none', outline:'none'}} placeholder='Your email address'/>
                </p>
                <p>
                  <textarea name="message" style={{width:'35%', borderRadius:'20px', border:'none', outline:'none'}} placeholder='Please leave your message'></textarea>
                </p>
                <p>
                  <button type="submit" style={{width:'35%', backgroundColor: '#00a8e0', border:'none', color: '#fff'}}>Send</button>
                </p>
              </form>
            </div>
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