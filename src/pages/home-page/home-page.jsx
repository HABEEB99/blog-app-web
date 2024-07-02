import React from 'react'

import './home-page.css'

import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import PopularPost from '../../components/popular-post/popular-post'
import RecentPost from '../../components/recent-post/recent-post'

const HomePage = () => {
  return (
    <div>
      <Header/>
      <RecentPost/>
      <PopularPost/>
      <Footer/>
    </div>
  )
}

export default HomePage