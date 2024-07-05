import React from "react";

import "./hero.css";

const Hero = () => {
  return (
    <>
      <div id="hero-section">
        <div className="hero-left-sidebar">
          <div className="featured-post-text">
            <p>Featured Post</p>

            <h1>
              How AI will <br />
              Change the Future
            </h1>
            <p>
              The future of AI will see home robots having enhanced
              intelligence, increased capabilities, and becoming more personal
              and possibly cute. For example, home robots will overcome
              navigation, direction
            </p>
          </div>
          <button className="hero-btn">Read more</button>
        </div>
        <div className="hero-right-sidebar">
          <img
            className="hero-section-ai-image"
            src="./ai-image.jpg"
            alt="ai-image"
          />
        </div>
      </div>
      <HeroSecondSection />
    </>
  );
};

function HeroSecondSection() {
  return (
    <div className="hero-two">
      <img
        className="hero-image"
        src="hero-two.jpg"
        alt="hero-image"
        // width="1300"
        height="420"
      />
      <div className=" hero-read-more">
        <div className="heading-text">
          <p>Development</p>
          <span id="date"> March 16 2023</span>
        </div>
        <h1>
          How to make a Game look more attractive with New <br /> VR & AI
          Technology
        </h1>
        <p>
          Google has been investing in AI for many years and bringing its
          benefits to individuals, businesses and communities. Whether it’s
          publishing state-of-the-art research, building helpful products or
          developing tools and resources that enable others, we’re committed to
          making AI accessible to everyone.
        </p>
        <button>
          <a href="#">Read More</a>
        </button>
      </div>
    </div>
  );
}
export default Hero;
