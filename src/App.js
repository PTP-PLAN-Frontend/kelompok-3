import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import  Home from './component/pages/Home';
import  About from './component/pages/About';
import Article from './component/pages/Article';
import Simplisia from './component/pages/Simplisia';
import Rhizoma from './component/pages/Rhizoma';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'><Home/></Route>
        <Route path='/about'><About /></Route>
        <Route path='/article' component={Article} />
        <Route path='/simplisia' component={Simplisia} />
        <Route path='/rhizoma' component={Rhizoma} />
      </Switch>
    </Router>
  );
}

export default App;