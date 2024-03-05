import React from 'react';

const contact = () => {
  return (
    <div className="contact-us-page">
      
      <header>
        <h1 className='color'>Contact Us</h1>
      </header>
      <section className="contact-info">
        <h2>Contact Information</h2>
        <p className='color'>
          If you have any questions, suggestions, or if you'd like to get in touch with us for any reason, please don't hesitate to contact us. Our team is here to assist you.
        </p>
        <ul>
          <li>Email: mahankalikoteswararao78@gmail.com</li>
          <li>Phone: +91  8247452577</li>
          <li>Address: 123 Diwali Street, Celebration City, India</li>
        </ul>
      </section>
      <section className="contact-form">
        <h2>Send us a Message</h2>
        <p className='color'>
          Use the form below to send us a message, and we'll get back to you as soon as possible.
        </p>
        <form action="https://formsubmit.co/koteswararaomaha.kali@gmail.com" method="POST"
                    class="contact__form grid">
                    <div class="contact__inputs grid">
                        <div class="contact__content">
                            <label for="" class="contact__label">Name: </label>
                            <input name="name" type="text" class="contact__input"></input>
                        </div>
                        <div class="contact__content">
                            <label for="" class="contact__label">Email: </label>
                            <input name="email" type="email" class="contact__input"></input>
                        </div>
                    </div>
                    <div class="contact__content">
                        <label for="" class="contact__label">Message: </label>
                        <textarea name="" id="" cols="0" rows="7" class="contact__input" name1="message"></textarea>
                    </div>

                    <div>
                        <button type="submit" class="button button--flex">
                            Send Message
                            <i class="uil uil-message button__icon"></i>
                        </button>

                    </div>
                </form>
      </section>
      <footer>
        <p className='contact'>Thank you for visiting our Diwali website. We look forward to hearing from you and celebrating the festival of lights together!</p>
      </footer>
    </div>
  );
};


export default contact