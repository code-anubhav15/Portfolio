import React from 'react'
import './Profile.css'
import profile_img from '../../assets/img/profile_image.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Profile = () => {
  return (
    <div id='home' className='profile'>
      <div className='profile-content'>
        <h1><span>Hi! I'm Anubhav Chaudhary</span></h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus fuga nam eveniet consectetur quasi qui quibusdam 
        vero ab recusandae quod, in similique dolorum excepturi quam optio eius porro explicabo neque perferendis expedita molestiae velit obcaecati odio. Illum iusto ratione laboriosam.</p>
        <div className="profile-action">
            <div>
                <AnchorLink className="anchor-link profile-resume" href="#contact">
                    Contact Me
                </AnchorLink></div>
            <div className="profile-resume">Resume</div>
        </div>
      </div>
      <div>
        <img src={profile_img} alt="" />
      </div>
    </div>
  )
}

export default Profile
