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

function App() {
  return (
    <div>
    <Router>
      <Navbar/>

      <Switch>
          <Route exact path="/selection"></Route>
          <Route exact path="/bubble"></Route>
          <Route exact path="/insertion"></Route>
          <Route exact path="/merge"></Route>
          <Route exact path="/quick"></Route>
        </Switch>

    </Router>
    </div>
  );
}

export default App;
