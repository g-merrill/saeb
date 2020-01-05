import React from 'react';
import { Link } from 'react-router-dom';
import './css/Home.scss';

const Home = () => (
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
      <p className="main-text">The <Link className="main-link" to="/saeb/smoups">variety of smoups</Link> has grown out of our members interests and ideas. So, anyone can propose a new one for just about any interest.</p>
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
);

export default Home;