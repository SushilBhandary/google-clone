import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import AppsIcon from '@mui/icons-material/Apps';
import Avatar from '@mui/material/Avatar';
import Search from '../components/Search';

function Home() {
  return (
    <div className='home'>
        <div className='home__header'>
          <div className='home__headerLeft'>
            <Link to='https://about.google/?utm_source=google-IN&utm_medium=referral&utm_campaign=hp-footer&fg=1' >About</Link>
            <Link to='/store' >Store</Link>
          </div>
          <div className='home__headerRight'>
            <Link to='https://mail.google.com/' >Gmail</Link>
            <Link to='https://www.google.co.in/imghp?hl=en&authuser=0&ogbl' >Images</Link>
            <AppsIcon />
            <Avatar />
          </div>
        </div>
        <div className='home__body'>
          <img src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png' alt="google img"/>
          <div className='home__inputContainer'>
            <Search/>
          </div>
        </div>
    </div>
  )
}

export default Home