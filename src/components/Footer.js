import React from 'react';
import './css/Footer.scss';

const Footer = () => (
  <footer className='Footer'>
    <section className="footer-donate">
      <h2 className="footer-title">Donate</h2>
      <p className="main-text">We depend on donations from ordinary people to make all this goodness happen.</p>
      <p className="main-text">Please donate today!</p>
      <button className='donate-btn'>Donate</button>
    </section>
    <section className="footer-events">
      <h2 className="footer-title">Our Events</h2>
      <p className="main-text">We use Meetup to list our many activities: monthly celebrations, smoups, and community service events.</p>
      <p className="main-text"><a className="main-link" href="https://www.meetup.com/Sunday-Assembly-East-Bay" target="_blank" rel="noopener noreferrer">Our Meetup Page</a></p>
    </section>
    <section className="footer-newsletter">
      <h2 className="footer-title">Newsletter</h2>
      <p className="main-text">Get friendly reminders of upcoming Sunday Assembly events.</p>
      <p className="main-text"><a className="main-link" href="http://eepurl.com/SXeab" target="_blank" rel="noopener noreferrer">Sign up here for our email newsletter!</a></p>
    </section>
    <section className="footer-contact-links">
      <h2 className="footer-title">Stay in Touch</h2>
      <p className="main-text">You can get in touch and learn more about the group in many ways.</p>
      <p className="main-text"><a className="main-link"  href="mailto:sundayassemblyeastbay@gmail.com">Email</a></p>
      <p className="main-text"><a className="main-link" href="https://www.facebook.com/groups/sundayassemblyeastbay/about/" target="_blank" rel="noopener noreferrer">Facebook</a></p>
      <p className="main-text"><a className="main-link" href="https://twitter.com/sunassemblyEB" target="_blank" rel="noopener noreferrer">Twitter</a></p>
      <p className="main-text"><a className="main-link" href="https://www.youtube.com/channel/UCgWKuYkTSNhZLUfU89i9-wg" target="_blank" rel="noopener noreferrer">Youtube</a></p>
    </section>
    <section className="footer-google-calendar">
      <h2 className="footer-title">Our Google Calendar</h2>
      <p className="main-text">Another way to see what is scheduled is on our Google Calendar, open to everyone to view.</p>
      <p className="main-text"><a className="main-link" href="https://www.google.com/calendar/embed?src=tu6qcnb543orolsqs7go8u1fr4%40group.calendar.google.com&ctz=America/Los_Angeles" target="_blank" rel="noopener noreferrer">Our Google Calendar</a></p>
    </section>
  </footer>
);

export default Footer;