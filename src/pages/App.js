import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './css/App.scss';

class App extends Component {

  expandCollapseBurger = () => {
    document.querySelector('.NavLinkCtnr').classList.toggle('hidden');
  }

  render() {
    return (
      <div className='App'>
        <img 
          className='logo' 
          src='https://i.imgur.com/Pyj5TNn.png' 
          alt='saeb logo' 
        />
        <h1>Sunday Assembly East Bay</h1>
        <h4>A Secular Community</h4>
        <nav className='NavBar-small'>
          <div className="NavBar-small-burger-ctnr" onClick={this.expandCollapseBurger}>
            <div className='burger-icon'>
              <div className="burger-stripe"></div>
              <div className="burger-stripe"></div>
              <div className="burger-stripe"></div>
            </div>
            <h3>Menu</h3>
          </div>
          <div className="NavLinkCtnr hidden">
            <NavLink to='/' className='NavLink'>About</NavLink>
            <NavLink to='/' className='NavLink'>Smoups</NavLink>
            <NavLink to='/' className='NavLink'>Music</NavLink>
            <NavLink to='/' className='NavLink'>Resources</NavLink>
            <NavLink to='/' className='NavLink'>Past Speakers</NavLink>
            <NavLink to='/' className='NavLink'>Contact</NavLink>
          </div>
        </nav>
        <div className='content'>
          <section className="home-description">
            <h2 className='section-title'>Live better, help often, wonder more!</h2>
            <p className='main-text'>Our motto reflects our core values. Sunday Assembly is a secular congregation that meets to hear great talks, sing songs, create community, and rejoice in the wonders of our world.</p>
            <p className='main-text'>We've got the best parts of a church without any of the religious dogma. Join us at our monthly celebration, smoups (small groups), and community service events.</p>
          </section>
          <hr />
          <section className="home-details">
            <h2 className='section-title'>Monthly Celebration</h2>
            <p className="main-text">Our main event is our monthly celebration, when we Assemble on a Sunday.</p>
            <p className="main-text">We meet on the 3rd Sunday each month at the South Berkeley Senior Center, 2939 Ellis Street, Berkeley (at Ashby Avenue).</p>
            <p className="main-text">
              10:30-11:00am—Meet and Greet <br />
              11:00-12:00pm—Celebration <br />
              12-1:30 pm—Potluck
            </p>
            <p className="main-text">Come for the talks, sharing, singing together, and inspiration—stay for the potluck and get to know like-minded folks!</p>
          </section>
          <section className="home-smoups">
            <h2 className="section-title">Smoups</h2>
            <p className="main-text">Our name for small groups is smoups (that’s what happens when the two founders of Sunday Assembly International are comedians!).</p>
            <p className="main-text">The <a className="main-link" href="https://sundayassemblyeastbay.org/smoups/" target="_blank" rel="noopener noreferrer">variety of smoups</a> has grown out of our members interests and ideas. So, anyone can propose a new one for just about any interest.</p>
          </section>
          <section className="home-community-service">
            <h2 className="section-title">Community Service Events</h2>
            <p className="main-text">We look for ways to serve our community.</p>
            <p className="main-text">Activities have included singing to seniors in nursing homes, park clean ups, etc.</p>
          </section>
          <hr/>
          <section className='home-expectations'>
            <h2 className="section-title">What should you expect from a Sunday Assembly event?</h2>
            <p className="main-text">Just by being with us you should be energised, vitalised, restored, repaired, refreshed and recharged. No matter what the subject of the Assembly, it will solace worries, provoke kindness and inject a touch of transcendence into the everyday.</p>
            <p className="main-text">But life can be tough… It is. Sometimes bad things happen to good people, we have moments of weakness or life just isn’t fair. We want The Sunday Assembly to be a house of love and compassion, where, no matter what your situation, you are welcomed, accepted and loved.</p>
            <p className="main-text">Most of all, have fun, be nice and join in.</p>
          </section>
        </div>
        <footer className='footer'>
          <section className="footer-donate">
            <h3 className="footer-title">Donate</h3>
            <p className="main-text">We depend on donations from ordinary people to make all this goodness happen.</p>
            <p className="main-text">Please donate today!</p>
            <button className='donate-btn'>Donate</button>
          </section>
          <section className="footer-events">
            <h3 className="footer-title">Our Events</h3>
            <p className="main-text">We use Meetup to list our many activities: monthly celebrations, smoups, and community service events.</p>
            <p className="main-text"><a className="main-link" href="https://www.meetup.com/Sunday-Assembly-East-Bay" target="_blank" rel="noopener noreferrer">Our Meetup Page</a></p>
          </section>
          <section className="footer-newsletter">
            <h3 className="footer-title">Newsletter</h3>
            <p className="main-text">Get friendly reminders of upcoming Sunday Assembly events.</p>
            <p className="main-text"><a className="main-link" href="http://eepurl.com/SXeab" target="_blank" rel="noopener noreferrer">Sign up here for our email newsletter!</a></p>
          </section>
          <section className="footer-contact-links">
            <h3 className="footer-title">Stay in Touch</h3>
            <p className="main-text">You can get in touch and learn more about the group in many ways.</p>
            <p className="main-text"><a className="main-link"  href="mailto:sundayassemblyeastbay@gmail.com">Email</a></p>
            <p className="main-text"><a className="main-link" href="https://www.facebook.com/groups/sundayassemblyeastbay/about/" target="_blank" rel="noopener noreferrer">Facebook</a></p>
            <p className="main-text"><a className="main-link" href="https://twitter.com/sunassemblyEB" target="_blank" rel="noopener noreferrer">Twitter</a></p>
            <p className="main-text"><a className="main-link" href="https://www.youtube.com/channel/UCgWKuYkTSNhZLUfU89i9-wg" target="_blank" rel="noopener noreferrer">Youtube</a></p>
          </section>
          <section className="footer-google-calendar">
            <h3 className="footer-title">Our Google Calendar</h3>
            <p className="main-text">Another way to see what is scheduled is on our Google Calendar, open to everyone to view.</p>
            <p className="main-text"><a className="main-link" href="https://www.google.com/calendar/embed?src=tu6qcnb543orolsqs7go8u1fr4%40group.calendar.google.com&ctz=America/Los_Angeles" target="_blank" rel="noopener noreferrer">Our Google Calendar</a></p>
          </section>
        </footer>
      </div>
    );
  }
}

export default App;
