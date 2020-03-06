import React, { Component } from 'react';
import Homepage from './components/homepage';
import Details from './components/details';
import { BrowserRouter, Route } from 'react-router-dom';
class App extends Component {
  render(){
  return (
    <div className="App">
      <BrowserRouter> 
        <Route path='/' exact component={Homepage}></Route>
        <Route path='/details' exact component={Details}></Route>
      </BrowserRouter>
    </div>
  );
  }
}
export default App;
