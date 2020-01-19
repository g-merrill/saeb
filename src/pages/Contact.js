import React from 'react';
import './css/Contact.scss';

const Contact = () => (
  <div className="content Contact">
    <h1 className="section-title">Contact</h1>
    <p className="main-text">
      We’re always looking for volunteers to help out at our Sunday Assembly monthly celebrations. This could involve welcoming and seating people as they arrive, setting up chairs, or joining in the clean up at the end.    </p>
    <p className="main-text">
      We’re also keen to hear from people who would like to give a reading or talk at one of our assemblies, or who would like to get involved in organizing the assemblies or one of the small groups.    </p>
    <p className="main-text">
      There are many ways to get in touch and keep up with what’s going on in the community.
    </p>
    <p className="main-text">
      Email us at:
      &nbsp;
      <a 
        className='main-link' 
        href="mailto:sundayassemblyeastbay@gmail.com" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        sundayassemblyeastbay@gmail.com
      </a>
    </p>
    <p className="main-text">
      Follow us on Meetup to find event info at:
      &nbsp;
      <a className='main-link' href="http://www.meetup.com/Sunday-Assembly-East-Bay/" target="_blank" rel="noopener noreferrer">
        meetup.com/Sunday-Assembly-East-Bay
      </a>
    </p>
    <p className="main-text">
      Find us on Facebook at:
      &nbsp;
      <a className='main-link' href="https://www.facebook.com/groups/505191719596487/" target="_blank" rel="noopener noreferrer">facebook.com/SundayAssemblyEastBay</a>
    </p>
    <p className="main-text">
      Follow us on Twitter:
      &nbsp;
      <a className='main-link' href="https://twitter.com/sunassemblyEB" target="_blank" rel="noopener noreferrer">@SunAssemblyEB</a>
    </p>
    <p className="main-text">
      See us on Instagram at:
      &nbsp;
      <a className='main-link' href="https://www.instagram.com/sundayassemblyeastbay/" target="_blank" rel="noopener noreferrer">@sundayassemblyeastbay</a>
    </p>
  </div>
);

export default Contact;