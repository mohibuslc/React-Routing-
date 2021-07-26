
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home/Home';
import NoMatch from './Nomatch/NoMatch';
import FriendDetails from './FriendDetails/FriendDetails';



function App() {



  return (
    <Router>
  
    <Switch>

      <Route path ="/home">
        <Home/>
      </Route>
      <Route path="/friend/:friendID">
        <FriendDetails/>
      </Route>
      <Route exact path ="/">

        <Home/>
      </Route>
      
      <Route path="*">
        <NoMatch></NoMatch>

      </Route>
      
    </Switch>


    </Router>
  );
}

export default App;
