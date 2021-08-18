import React, { useEffect, useState } from "react";
import AOS from "aos";
import Typist from "react-typist";
import "aos/dist/aos.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Home() {
  const [count, setCount] = useState(1);
  useEffect(() => {
    AOS.init();
  }, []);
  useEffect(() => {
    setCount(1);
  }, [count]);
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
  };
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
          <Slider {...settings}>
            <div className="img">
              <img src="/img/avatar.png" alt="" />
            </div>
            <div className="img">
              <img src="/img/luffy-1.png" alt="" />
            </div>
          </Slider>
        </div>
      </div>
      <div className="about" data-aos="zoom-out-left">
        <div className="intro-img">
          <img src="/img/luffy-2.png" alt="" />
        </div>
        <div className="about-info">
          <div className="about-me">About Me</div>
          <div className="item-info">
            <div className="title">
              <i className="fas fa-user"></i>Name:
            </div>
            <div className="content">Nguyễn Thanh Tuấn</div>
          </div>
          <div className="item-info">
            <div className="title">
              <i className="fas fa-birthday-cake"></i>Date of birth:
            </div>
            <div className="content">06/10/1997</div>
          </div>
          <div className="item-info">
            <div className="title">
              <i className="fas fa-map-marker-alt"></i>Address:
            </div>
            <div className="content">Hoàn Kiếm 3 - Nam Hà - Lâm Hà - Lâm Đồng</div>
          </div>
          <div className="item-info">
            <div className="title">
              <i className="fas fa-envelope"></i>Email:
            </div>
            <div className="content">tuanpenspinner@gmail.com</div>
          </div>
          <div className="item-info">
            <div className="title">
              <i className="fas fa-phone"></i>Phone:
            </div>
            <div className="content">0392292912</div>
          </div>
        </div>
      </div>
    </div>
  );
}
