
import './App.css';
import Navbar from './components/Navbar';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import sort from './components/sort';

function App() {
  return (
    <Router>
      <div>
      <Navbar/>

      <Switch>
          <Route exact path="/sorting">
            <sort/>
          </Route>
          <Route exact path="/graph"></Route>
        </Switch>
      </div>
    </Router>   
  );
}

export default App;
