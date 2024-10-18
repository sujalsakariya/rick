import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Support from './Support/Support';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/support">
          <Support />
        </Route>
      </Switch>                                                                                                                                                                                                                                                                                                   
    </Router>
  );
}




export default App;
