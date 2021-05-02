import "./App.css";
import Navbar from './component/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './component/pages/Home';
import About from './component/pages/About';
import Article from './component/pages/Article';
import Cultivation from './component/Cards';
import Simplisia from './component/pages/Simplisia';
import Rhizoma from './component/pages/Rhizoma';
import AlangAlang from './component/Alang-alang';
import Kencur from './component/Kencur';
import Kunyit from './component/Kunyit';
import Bawangmerah from './component/Bawangmerah';
import Jahemerah from './component/Jahemerah';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/article' component={Article} />
          <Route path='/cultivation' component={Cultivation} />
          <Route path='/simplisia' component={Simplisia} />
          <Route path='/rhizoma' component={Rhizoma} />
          <Route path='/Alang-alang' component={AlangAlang} />
          <Route path='/kencur' component={Kencur} />
          <Route path='/kunyit' component={Kunyit} />
          <Route path='/jahemerah' component={Jahemerah} />
          <Route path='/bawangmerah' component={Bawangmerah} />
        </Switch>
      </Router>
    </>
  );
}

export default App;