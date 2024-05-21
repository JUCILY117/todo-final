import React, {useEffect} from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {

  const workInfoData = [
    {
      image: PickMeals,
      title: "Create Your Task Lists",
      text: "Start by creating separate lists for different projects, goals, or categories.",
    },
    {
      image: ChooseMeals,
      title: "Categorize and Tag Tasks",
      text: "Use categories and tags to classify tasks further. ",
    },
    {
      image: DeliveryMeals,
      title: "Track Progress",
      text: "Monitor your progress over time and stay motivated. ",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
        Discover how our intuitive task management system simplifies your life. Learn about the key features and steps to get started with organizing your tasks efficiently.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
