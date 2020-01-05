import React from 'react';
import './css/About.scss';

const About = () => (
  <div className="content About">
    <h1 className='section-title'>About</h1>
    <p className='main-text'>
      <strong>Sunday Assembly East Bay is an inclusive secular community</strong> dedicated to celebrating the one life we know we have! Our mission is to foster a community to live better, help often, and wonder more. Join us for any or all of our monthly events! Together, we build a community.
    </p>
    <p className='main-text'>
      Sunday Assembly East Bay is a community <strong>built with all-volunteer effort</strong> by our members, with guidance from our leadership group. Without your passion, ideas, and energy, there is no Sunday Assembly. Have an idea? <strong>Join us!</strong>
    </p>
    <h2 className='section-title'>Our Principles</h2>
    <p className='main-text'>
      The Sunday Assembly is a secular congregation that celebrate life. <strong>Our motto:</strong> live better, help often, wonder more. <strong>Our mission:</strong> to help everyone find and fulfill their full potential. <strong>Our vision:</strong> a secular congregation in every town, city and village that wants one.
    </p>
    <p className='main-text'>We are here for everyone who wants to:</p>
    <ul>
      <li>
        <strong>Live Better.</strong> We aim to provide inspiring, thought-provoking and practical ideas that help people to live the lives they want to lead and be the people they want to be.
      </li>
      <br/>
      <li>
        <strong>Help Often.</strong> Assemblies are communities of action building lives of purpose, encouraging us all to help anyone who needs it to support each other.
      </li>
      <br/>
      <li>
        <strong>Wonder More.</strong> Hearing talks, singing as one, listening to readings and even playing games helps us to connect with each other and the awesome world we live in.
      </li>
      <br/>
    </ul>
    <p className='main-text'>
      Read our <a className="main-link" href="https://sundayassemblyeastbay.org/charter/" target="_blank" rel="noopener noreferrer">Charter</a>.
    </p>
    <p className='main-text'>
      Find out about our <a className="main-link" href="https://sundayassemblyeastbay.org/leadership-team/" target="_blank" rel="noopener noreferrer">Leadership Team</a>
    </p>
  </div>
);

export default About;