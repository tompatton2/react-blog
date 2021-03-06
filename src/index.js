import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, withRouter } from 'react-router-dom';

import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import Footer from './components/Footer';
import CreateArticle from './components/CreateArticle';
import Login from './components/Login';
import SingleArticle from './components/SingleArticle';
import Register from './components/Register';

const About = () => {
  return (<h1>THIS IS THE ABOUT PAGE</h1>);
}
// Home Component
const Home = () => {
  return (<h1>THIS IS THE HOME PAGE</h1>);
}

const Main = withRouter(({ location }) => {
  return (
    <div>
      {location.pathname !== "/login" && location.pathname !== "/register" && (
        <Navbar />
      )}
      <Route exact path='/' component={Welcome}/>
      <Route path='/about' component={About} />
      <Route path='/home' component={Home}/>
      <Route path='/articles/create' component={CreateArticle}/>
      <Route path='/login' component={Login}/>
      <Route path='/article/:slug' component={SingleArticle}/>
      <Route path='/register' component={Register}/>
      {location.pathname !== "/login" && location.pathname !== "/register" && (
        <Footer />
      )}
    </div>
  );
})

ReactDOM.render(
  <BrowserRouter>
   <Main />
  </BrowserRouter>
  , document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
