import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './css/App.scss';
import Home from './Home';
import About from './About';
import Smoups from './Smoups';
import Music from './Music';
import Resources from './Resources';
import PastSpeakers from './PastSpeakers';
import Contact from './Contact';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <NavBar />
      <Switch>
        <Route exact path='/saeb' render={() => <Home />} />
        <Route exact path='/saeb/about' render={() => <About />} />
        <Route exact path='/saeb/smoups' render={() => <Smoups />} />
        <Route exact path='/saeb/music' render={() => <Music />} />
        <Route exact path='/saeb/resources' render={() => <Resources />} />
        <Route exact path='/saeb/speakers' render={() => <PastSpeakers />} />
        <Route exact path='/saeb/contact' render={() => <Contact />} />
        <Route path='/' render={() => <Redirect to='/saeb' />} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
