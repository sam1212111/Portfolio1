import React from 'react';
import "../styles/About.css"
import { motion } from "framer-motion";

const About = () => {  
  
  const horizontal ={
    x:0, 
    opacity: 1, 
    transition:{type: 'spring', duration: 2,bounce: 0.3}
  }

  return (
      <>
          <div  className="about" id='about'>
              <div className="container">
                  <motion.div initial={{x: '-100%', opacity: 0}} whileInView={horizontal} viewport={{ once: true }} className="heading">
                    <p className="heading-sub-text">Who I am</p>
                    <p className='heading-text'>About Me</p>
                  </motion.div>
                  <div className="split-about">
                    <motion.div initial={{x: '-100%', opacity: 0}} whileInView={horizontal} className="about-content">
                        <p>Hi, I'm Sanat Kumar Bhowmik — an Android developer passionate about building smooth, user-centric mobile apps. I love working with tools like Firebase and Google Fit to create real-time, personalized experiences that actually make a difference.</p>
                        <br />
                        <p>I focus on writing clean, efficient code and designing intuitive interfaces that users enjoy. Whether it's syncing data, tracking fitness metrics, or handling authentication, I'm all about crafting reliable, scalable solutions.</p>
                        <br />
                        <p>Outside of development, I'm always exploring new tech, experimenting with APIs, and thinking up new ideas to build. I'm excited about collaborating on innovative projects and pushing boundaries in the mobile space.</p>
                    </motion.div>
                  </div>
              </div>
          </div>
      </>
  )
};

export default About;