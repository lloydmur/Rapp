import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Navbar from './components/navbar';
import Home from './views/home';
import Signup from './views/signup';
import Signin from './views/signin'
import NewPost from './components/newPost';
import PostDetails from './components/PostDetails';

//Router component allows use of routing/
//switch allows switching of routes
//Route are nested in switches and are basically the component you want to switch to

//router links allow browser to handle rout requests
//route params are preceeded by ':'

function App() {

  return (
    <Router> 
      <div className="App">
        <Navbar/>
        <header className="App-header">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/signup">
              <Signup/>
            </Route>
            <Route exact path="/signin">
              <Signin/>
            </Route>
            <Route path="/new-post">
              <NewPost/>
            </Route>
            <Route path="/post/:id">
              <PostDetails/>
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
    
  );
}

export default App;
