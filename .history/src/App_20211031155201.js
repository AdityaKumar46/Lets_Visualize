
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
<sort/>
      <Switch>
          <Route exact path="/sorting">
           
          </Route>
          <Route exact path="/graph"></Route>
        </Switch>
      </div>
    </Router>   
  );
}

export default App;
