import React, {useEffect} from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  useEffect(() => {
    const handleScroll = () => {
      const homeImage = document.querySelector(".about-section-image-container img");
      const scrollPosition = window.scrollY;
      homeImage.style.transform = `translateY(${scrollPosition * 0.18}px)`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleCreateButtonClick = () => {
    // Redirect to the deployed Todo app URL
    window.open("https://support.microsoft.com/en-us/todo","_blank");
  };
  const handleVideoButtonClick = () => {
    // Open the deployed Todo app URL in a new tab
    window.open("https://youtu.be/jozNEpY8iik?si=iajih1M5LDLODNTn", "_blank");
};

  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
        Boost Your Productivity
        </h1>
        <p className="primary-text">
        Discover expert tips and tools to supercharge your productivity. Stay focused and achieve more.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button" onClick={handleCreateButtonClick}>Learn More</button>
          <button className="watch-video-button" onClick={handleVideoButtonClick}>
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
