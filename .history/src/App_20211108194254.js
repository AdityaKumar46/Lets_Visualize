
import './App.css';
import Navbar from './components/Navbar';
import Sort from './components/Sort';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <Router>
      <>
      <Navbar/>
      <Switch>
          <Route exact path="/">
           <Sort/>
          </Route>

          <Route exact path="/selection">
           <Selection/>
          </Route>

          <Route exact path="/">
           <Sort/>
          </Route>

          <Route exact path="/">
           <Sort/>
          </Route>

          <Route exact path="/">
           <Sort/>
          </Route>

          <Route exact path="/graph"></Route>
        </Switch>
      </>
    </Router>   
  );
}

export default App;
