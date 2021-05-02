import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavbarComponent from './component/Navbar';
import Home from './component/pages/Home';
import About from './component/pages/About';
import Simplisia from './component/pages/Simplisia';
import Rhizoma from './component/pages/Rhizoma';
import Kunyit from './component/pages/Kunyit';
import Temulawak from './component/pages/Temulawak';
import Lengkuas from './component/pages/Lengkuas';
import Kencur from './component/pages/Kencur';
import Jahe from './component/pages/Jahe';
import Alang from './component/Alang-alang';
import AlangRhizoma from './component/pages/Alang-Alang';
import Article from './component/pages/Article';
import Cultivation from './component/Cards';
import Bawangmerah from './component/Bawangmerah';
import Jahemerah from './component/Jahemerah';

function App() {
  return (
    <Router>
      <NavbarComponent/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/simplisia' component={Simplisia} />
        <Route path='/rhizoma' component={Rhizoma} />
        <Route path='/kunyit' component={Kunyit} />
        <Route path='/temulawak' component={Temulawak} />
        <Route path='/lengkuas' component={Lengkuas} />
        <Route path='/kencur' component={Kencur} />
        <Route path='/jahe' component={Jahe} />
        <Route path='/alang-alang' component={Alang} />
        <Route path='/article' component={Article} />
        <Route path='/cultivation' component={Cultivation} />
        <Route path='/bawang-merah' component={Bawangmerah} />
        <Route path='/jahe-merah' component={Jahemerah} />
        <Route path='/rhizoma-alang-alang' component={AlangRhizoma} />
      </Switch>
    </Router>
  );
}

export default App;