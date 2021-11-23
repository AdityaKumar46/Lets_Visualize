import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Front from './components/Front';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Selection from './components/Selection';

function App() {
  return (
    <div>
    <Router>
    <div>
    <Navbar/>

    <Switch>
        <Route exact path="/selection">
          <Selection/>
        </Route>
        <Route exact path="/bubble"></Route>
        <Route exact path="/insertion"></Route>
        <Route exact path="/merge"></Route>
        <Route exact path="/quick"></Route>
      </Switch>
    </div>

    </Router>
    </div>
  );
}

export default App;
