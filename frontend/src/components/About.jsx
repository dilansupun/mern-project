import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>Serving World Wide Popular Dishes</p>
            </div>
            <p className="mid">
            At our restaurant, we believe that exceptional dining experiences start with the quality of our food. We are passionate about using only the finest ingredients, handpicked from trusted sources, to bring you meals that are not only delicious but also nutritious. Our chefs are dedicated to crafting each dish with precision and creativity, combining traditional flavors with modern culinary techniques to create unforgettable tastes.


            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;