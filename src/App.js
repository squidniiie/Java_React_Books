import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Books from './components/Books';
import Create from './components/Create';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Books}></Route>
          <Route path="/create" component={Create}></Route>
          <Route path="/edit/:id" component={Create}></Route>
        </Switch>
      </BrowserRouter>
      {/*
      <Create /> */}
    </div>
  );
}

export default App;
