import React from 'react'
import'./About.css'
import about_img from'../../assets/about.png'
import play_icon from'../../assets/play-icon.png'


const About = () => {
  return (
    <div className='about' >
     <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>    
        <img src={play_icon} alt="" className='play-icon'/>
     </div>

     
     <div className="about-right">
   
     <h3>ABOUT UNIVERSITY</h3>


     <h2>Nurturing Tommorow's Leader Today</h2>

     <p>Embark on a transformative educational journey with our university
        comprehensive eduational programs.our cutting-edge curriculum is dsigned to empower students with the 
        knowledge,skills,and experiences needed to excelin the dynamic field to education.
             </p>

             <p>A focus on innovation,hands-on learning,and personalized
                mentorship,our programs prepare aspiring educators to mae a meaning ful impact in classrooms,
                schools and communities.
             </p>
             <p>Whether you aspire to become a teacher,administrator,counselor,or 
                eduational leader our diverse range of programs offers the perfect pathway
                to achieve your goal and unlock your full potential in shaping the future of education.
             </p>
    </div>
    </div>
    
  )
}

export default About