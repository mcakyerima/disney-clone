import './App.css';
import { BrowserRouter as Router , Switch, Route} from 'react-router-dom';
import Login from './Components/Login';
import styled from 'styled-components';
import Header from './Components/Header'

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route exact path='/'>
            <Login/>
          </Route>
        </Switch> 
      </Router>

    </div>
  );
}

export default App;
