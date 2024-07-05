import React from "react";

import "./home-page.css";

import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import PopularPost from "../../components/popular-post/popular-post";
import RecentPost from "../../components/recent-post/recent-post";
import Hero from "../../components/hero/hero";
import Newsletter from "../../components/newsletter/newsletter";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <RecentPost />
      <PopularPost />
      <Newsletter />
    </div>
  );
};

export default HomePage;
