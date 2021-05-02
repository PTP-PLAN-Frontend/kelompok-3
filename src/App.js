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
import AlangRhizoma from './component/pages/Alang-Alang';
import Article from './component/pages/Article';
import Cultivation from './component/Cards';
import AlangCultivation from './component/Alang-alang';
import KencurCultivation from './component/Kencur';
import KunyitCultivation from './component/Kunyit';
import BawangMerahCultivation from './component/Bawangmerah';
import JaheMerahCultivation from './component/Jahemerah';

function App() {
  return (
    <Router>
      <NavbarComponent />
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
        <Route path='/article' component={Article} />
        <Route path='/cultivation' component={Cultivation} />
        <Route path='/jahe-merah' component={Jahe} />
        <Route path='/alang-alang' component={AlangRhizoma} />
        <Route path='/cultivation-alang-alang' component={AlangCultivation} />
        <Route path='/cultivation-kencur' component={KencurCultivation} />
        <Route path='/cultivation-kunyit' component={KunyitCultivation} />
        <Route path='/cultivation-jahe-merah' component={JaheMerahCultivation} />
        <Route path='/cultivation-bawang-merah' component={BawangMerahCultivation} />
      </Switch>
    </Router>
  );
}

export default App;