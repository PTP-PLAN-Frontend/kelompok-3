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
        </Switch>
      </Router>
    </>
  );
}

export default App;