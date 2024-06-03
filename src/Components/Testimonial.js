import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import ProfilePic2 from "../Assets/profile2jpg.jpg";
import ProfilePic3 from "../Assets/profile3.png";
import ProfilePic4 from "../Assets/profile4.jpg";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What Our Users Are</h1>
        <h2 className="primary-heading">Saying</h2>
        <p className="primary-text">
        Read what our users have to say about their experience with our task management platform. Discover how our service has helped individuals and teams achieve their goals and stay organized.
        </p>
      </div>
      <div className="testimonial-section-main">
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
        "Staying organized has never been easier! This platform has completely transformed how I manage my tasks. I can create detailed lists, set deadlines, and collaborate with my team effortlessly. It's intuitive, user-friendly, and has become an essential tool for my productivity."
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Aayu</h2>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic3} alt="" />
        <p>
        "Staying organized has never been easier! This platform has completely transformed how I manage my tasks. I can create detailed lists, set deadlines, and collaborate with my team effortlessly. It's intuitive, user-friendly, and has become an essential tool for my productivity."
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Anmol</h2>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic2} alt="" />
        <p>
        "Staying organized has never been easier! This platform has completely transformed how I manage my tasks. I can create detailed lists, set deadlines, and collaborate with my team effortlessly. It's intuitive, user-friendly, and has become an essential tool for my productivity."
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Amarjit Singh</h2>
      </div>
      </div>
    </div>
  );
};

export default Testimonial;
