import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from "react-router-dom";
// Material-UI
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
// Components
import Header from './components/header';
// Pages
import Login from './pages/login';
import Accueil from './pages/accueil';
import Search from './pages/search';
import PostDetails from './pages/postDetails';

function NoMatch() {
  let location = useLocation();

  return (
    <div>
      <h3>
        404 Page non trouvé : <code>{location.pathname}</code>
      </h3>
    </div>
  );
}

export default function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Router>
        <Container maxWidth="lg">
          <Header title="Blog" />
          <Switch>
            <Route exact path="/">
              <Accueil />
            </Route>
            <Route path="/search">
              <Search />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/post/:slug">
              <PostDetails />
            </Route>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </Container>
      </Router>
    </React.Fragment>
  );
}
