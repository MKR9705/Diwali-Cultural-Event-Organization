import React from 'react';

const Home = () => {
  return (
    <div className="home-page">
      <header>
        <h1 className='headcolor'>Welcome to our Diwali Celebration</h1>
      </header>
      <section className="introduction">
        <h2>About Diwali</h2>
        <p className='color'>
          Diwali, also known as Deepavali, is the festival of lights and one of the most widely celebrated festivals in India. It signifies the victory of light over darkness and good over evil.
        </p>
        <p className='color'>
          At our Diwali celebration, we aim to share the joy and traditions of this festival with you. Explore our website to learn more about the Diwali story, traditions, shopping, and enjoy our beautiful image gallery.
        </p>
      </section>
      <section className="upcoming-events">
        <h2>Upcoming Events</h2>
        <p className='color'>
          Join us for exciting Diwali events and celebrations in your area. Stay tuned for our event schedule and mark your calendar for a memorable Diwali experience.
        </p>
      </section>
      <section className="featured-content">
        <h2>Featured Content</h2>
        <p className='color'>
          Don't miss our Diwali story, where we narrate the tale of Lord Rama's return and the triumph of good over evil. Explore our shopping section for Diwali gift ideas and get a sneak peek of our mesmerizing image gallery.
        </p>
      </section>
      <footer>
        <p className='color'>Wishing you a Happy and Prosperous Diwali</p>
        <p className='color'>Contact us at mahankalikoteswararao78@gmail.com</p>
      </footer>
    </div>
  );
};

export default Home;
