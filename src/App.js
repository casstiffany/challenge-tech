import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import logo from './logo-epsor-normal.svg';
import Challenge from './Challenge';
import './style/style.css';


class App extends React.Component {

  render(){

    return (
    <Router>
      <div className="App">
          <Switch>
              <Route path ="/" exact component ={Home} />
              <Route path ="/challenge" component={Challenge} />
          </Switch>
      </div>
     </Router>

    
  );

  }
 
}

const Home = () => (
     <header className="centerpage">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Challenge Tech par Cassandra-Tiffany
          </p>
          <Link to='/challenge'>
              <button className="button-primary">Découvrir</button>
          </Link>
      </header>
);

export default App;
