import React, { useEffect} from "react";
import { useAuth0 } from "@auth0/auth0-react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  const { loginWithRedirect } = useAuth0();
  useEffect(() => {
    const handleScroll = () => {
      const homeImage = document.querySelector(".home-image-section img");
      const scrollPosition = window.scrollY;
      homeImage.style.transform = `translateY(${scrollPosition * 0.3}px)`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Never Miss A Task Again
          </h1>
          <p className="primary-text">
          Organize your life with our powerful task management platform. Stay on top of your to-dos effortlessly.
          </p>
          <button className="secondary-button" onClick={() => loginWithRedirect()}>
            Get Started <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
