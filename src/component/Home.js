import React, { useEffect, useState } from "react";
import AOS from "aos";
import Typist from "react-typist";
import "aos/dist/aos.css";
export default function Home() {
  const [count, setCount] = useState(1);
  useEffect(() => {
    AOS.init();
  }, []);
  useEffect(() => {
    setCount(1);
  }, [count]);

  return (
    <div className="container">
      <div className="intro">
        <div className="intro-text">
          <span className="label-hello" data-aos="zoom-in-down">
            Hello!
          </span>
          <div className="your-name" data-aos="zoom-in-down">
            <span> I am</span>
            {count && (
              <Typist className="typing-custom" avgTypingDelay={50} onTypingDone={() => setCount(0)}>
                <span className="title-name"> Nguyễn Thanh Tuấn </span>
                <Typist.Backspace count={20} delay={2000} />
                <span className="title-name"> A Web Developer</span>
                <Typist.Backspace count={20} delay={2000} />
              </Typist>
            )}
          </div>
          <div className="career" data-aos="zoom-out-left">
            AKA: Tuấn PenSpinner
          </div>
        </div>
        <div className="intro-img" data-aos="zoom-out-left">
          <img src="/img/avatar.png" alt="" />
        </div>
      </div>
      <div className="about" data-aos="zoom-out-left">
        <div className="intro-img">
          <img src="/img/avatar.png" alt="" />
        </div>
        <div className="about-info">
          <span className="about-me">About Me</span>
        </div>
      </div>
    </div>
  );
}
