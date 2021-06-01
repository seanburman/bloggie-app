import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import SignIn from './firebase/Authentication';
import Dashboard from './views/Dashboard/Dashboard';
import Splash from './views/Splash/Splash'

function App() {

  return (
    <div className="App">
    <Router>
      <Switch>
        <Route exact path="/">
          <Splash />
        </Route>
        <Route exact path="/SignIn">
          <SignIn/>
        </Route>
        <Route path="/Dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
      
    </div>
  );
}

export default App;
