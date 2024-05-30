import React, { useState } from 'react';
import './Connect.css';
import call_icon from '../../assets/img/call_icon.svg';
import mail_icon from '../../assets/img/mail_icon.svg';
import location_icon from '../../assets/img/location_icon.svg';

const Connect = () => {
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    const data = {
      ...formData,
      access_key: '79c3d189-4646-42e3-9f61-f77aa7a876c7'
    };

    const json = JSON.stringify(data);

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      setSent(true);
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    }
  };

  return (
    <div id='contact' className='connect'>
      <div className="connect-title">
        <h1>Get In Touch</h1>
      </div>
      <div className="connect-section">
        <div className="connect-left">
          <h1>Let's Connect</h1>
          <div className="connect-details">
            <div className="connect-detail">
              <img src={mail_icon} alt="mail" />
              <p>anubhavch15@gmail.com</p>
            </div>
            <div className="connect-detail">
              <img src={call_icon} alt="call" />
              <p>+91-6375026749</p>
            </div>
            <div className="connect-detail">
              <img src={location_icon} alt="location" />
              <p>Kota, Rajasthan</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="connect-right">
          <input
            type='text'
            placeholder='Enter your name'
            name='name'
            value={formData.name}
            onChange={onChange}
            required
          />
          <input
            type='email'
            placeholder='Enter your email'
            name='email'
            value={formData.email}
            onChange={onChange}
            required
          />
          <textarea
            name="message"
            rows="8"
            placeholder='Enter Your Message'
            value={formData.message}
            onChange={onChange}
            required
          ></textarea>
          <div className='submit-text'>
            <button type="submit" className='connect-submit'>Submit Now</button>
            {sent && <p className='sent-text'>Email Sent Successfully...</p>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Connect;
