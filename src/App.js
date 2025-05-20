import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import HeroDesktop from './images/hero-desktop.jpg';
import HeroMobile from './images/hero-mobile.jpg';
import Arrow from './images/icon-arrow.svg';
import Error from './images/icon-error.svg';
import ApparelLogo from './images/logo.svg';


function App() {

  const [email, setEmail] = useState('');
  const [hasError, setHasError] = useState(false);

  const handleSubmit = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    setHasError(true);  // 오류 상태 표시
  } else {
    setHasError(false); // 오류 해제
    alert('Complete!');
    setEmail('');
    }
  };

  return (
    <div className="Flex-row Wid-Hei-100">
      <div className="Card">
        <div className="LogoSection">
          <a href="#"><img src={ApparelLogo} alt="Company Logo" /></a>
        </div>
        <div className="TitleSection">
          <h1 className="Title FontW400 ColorDered">WE'RE</h1>
          <h1 className="Title FontW600">COMING</h1>
          <h1 className="Title FontW600">SOON</h1>
        </div>
        <p className="Description ColorDered">
          Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements ans out launch daals.
        </p>
        <div className="InputSection">
          <input
            type="email"
            name="email"
            className={`EmailInput ${hasError ? 'EmailError' : ''}`}
            placeholder="Email Address"
            size="10"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="ButtonSection" onClick={handleSubmit}>
            <img src={Arrow} alt="Submit Button" className="SubBtn" />
          </div>
          <img src={Error} alt="Submit Error" className={`ErrorImg ${hasError ? 'Show' : ''}`}/>
          </div>
          <div className={`ErrorMsg ${hasError ? 'Show' : ''}`}>
            Please provide a valid email.
          </div>
      </div>
      <div>
        {/* <img src={HeroDesktop}  className="HeroImage" /> */}
        <picture>
          <source media="(max-width: 550px)" srcSet={HeroMobile} />
          <img src={HeroDesktop} className="HeroImage" />
        </picture>
      </div>
    </div>

  );
}

export default App;
