import './assets/css/Home.css'
import divider from './assets/images/divider.svg';
import lava from './assets/videos/Lava.mp4';
import profile_pic_1 from './assets/images/profile-1.jpeg'
import discord from './assets/images/discord.svg'
import dpb from './assets/images/dpb.svg'
import github from './assets/images/github.svg'
import steam from './assets/images/steam.svg'
import twitch from './assets/images/twitch.svg'
import linkedin from './assets/images/linkedin.svg'
import * as motion from "motion/react-client"
import { gsap } from "gsap";
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextScramble } from './components/core/text-scramble';
import { TextEffect } from './components/core/text-effect';
import { Magnetic } from './components/core/magnetic';
import { BorderTrail } from './components/core/border-trail';
import { GlowEffect } from './components/core/glow-effect';
import { Tilt } from './components/core/tilt'
import { Spotlight } from './components/core/spotlight';
import resume from './assets/hostedFiles/resume.pdf'


function App() {

  const navigate = useNavigate();

  const handleNavHomeClick = () => {
    navigate('/');
  };

  const handleNavContactClick = () => {
    navigate('/Contact');
  };

  const handleNavAboutClick = () => {
    navigate('/About');
  };

  const handleNavProjectsClick = () => {
    navigate('/Projects');
  };

  const handleNavDetailsClick = () => {
    navigate('/Details');
  };

  const handleNavCreditsClick = () => {
    navigate('/Credits');
  };

  const [topMenuHoverTrigger, setTopMenuHoverTrigger] = useState(false);
  const [rightMenuHoverTrigger, setRightMenuHoverTrigger] = useState(false);
  const [bottoMmenuHoverTrigger, setBottoMmenuHoverTrigger] = useState(false);
  const [leftMenuHoverTrigger, setLeftMenuHoverTrigger] = useState(false);

  const outsideElement = useRef<HTMLDivElement | null>(null);
  const insideElement = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (outsideElement.current && insideElement.current) {
      gsap.set(insideElement.current, { xPercent: 1, yPercent: 1 });

      const buttonElement = outsideElement.current;
      const buttonRect = buttonElement.getBoundingClientRect();
      const buttonCenterX = buttonRect.left + buttonRect.width / 2;
      const buttonCenterY = buttonRect.top + buttonRect.height / 2;
      const buttonRadiusX = buttonRect.width / 2;
      const buttonRadiusY = buttonRect.height / 2;

      const xTo = gsap.quickTo(insideElement.current, "x", { duration: 0.6, ease: "power3" });
      const yTo = gsap.quickTo(insideElement.current, "y", { duration: 0.6, ease: "power3" });

      const handleMouseMove = (e: MouseEvent) => {
        if (!isHovered) return;

        const mouseX = e.clientX - buttonCenterX;
        const mouseY = e.clientY - buttonCenterY;

        const angle = Math.atan2(mouseY, mouseX);
        const distance = Math.min(
          Math.sqrt(mouseX * mouseX + mouseY * mouseY),
          Math.min(buttonRadiusX, buttonRadiusY)
        );

        // Calculate the constrained position on the perimeter of the outside element
        const constrainedX = Math.cos(angle) * distance;
        const constrainedY = Math.sin(angle) * distance;

        // Move the dot along the perimeter of the outside element
        xTo(constrainedX);
        yTo(constrainedY);
      };

      const handleMouseEnter = () => {
        setIsHovered(true); // Start effect when hovered
      };

      const handleMouseLeave = () => {
        setIsHovered(false); // Stop effect when mouse leaves
        gsap.to(insideElement.current, { x: 0, y: 0, duration: 0.6, ease: "power3" }); // Reset position
      };

      // Attach event listeners to button
      buttonElement.addEventListener("mouseenter", handleMouseEnter);
      buttonElement.addEventListener("mouseleave", handleMouseLeave);
      window.addEventListener("mousemove", handleMouseMove);

      // Clean up event listeners
      return () => {
        buttonElement.removeEventListener("mouseenter", handleMouseEnter);
        buttonElement.removeEventListener("mouseleave", handleMouseLeave);
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, [isHovered]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div className='main-content'>
        <div className='intro-group'>
          <TextScramble className="name-text" duration={1.2}>CONNOR SCALLY</TextScramble>
          <TextScramble className='job-text glitch' duration={1.2} characterSet=' 123456789' data-text= 'full-stack-developer'>full-stack developer</TextScramble>
          <TextScramble className='degree-text' duration={1.2} characterSet=' 123456789'>computer scientist</TextScramble>
          <img src={divider} alt="divding bar underneath the main text" className='intro-divider' />

          <Magnetic>
            <a href={resume} download>
              <button type='button' className='resume-button'>
                <span className='resume-text'>Resume</span>
              </button>
            </a>
          </Magnetic>

        </div>

        <div className='middle-content'>
          <div className='profile-pic-container'>
            <GlowEffect colors={['#FFF']} mode='breathe' blur='soft' duration={4} scale={0.99} className='profile-pic-glow' />
            <video autoPlay muted loop playsInline className="profile-background-video">
              <source src={lava} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className='profile-pic-div'>
              <img src={profile_pic_1} alt="Connor Scally's profile picture." className='profile-pic' />
            </div>
          </div>


          <div className='nav-menu' ref={outsideElement}>
            <BorderTrail style={{ boxShadow: '4px 4px 4px 800px rgb(0 0 0 / 65%)' }} size={60} />
            <button className="nav-menu-button top" onClick={handleNavHomeClick}><TextScramble duration={.5} trigger={topMenuHoverTrigger} onHoverStart={() => setTopMenuHoverTrigger(true)} onHoverEnd={() => setTopMenuHoverTrigger(false)}>home</TextScramble></button>
            <button className='nav-menu-button right' onClick={handleNavContactClick}><TextScramble duration={.5} trigger={rightMenuHoverTrigger} onHoverStart={() => setRightMenuHoverTrigger(true)} onHoverEnd={() => setRightMenuHoverTrigger(false)}>contact</TextScramble></button>
            <div className='nav-menu-selector' ref={insideElement}>
              {/* <img src={selector} alt="selector icon for the navigation menu" /> */}
              <span className='selector'>•</span>
            </div>
            <button className='nav-menu-button bottom' onClick={handleNavProjectsClick}><TextScramble duration={.5} trigger={bottoMmenuHoverTrigger} onHoverStart={() => setBottoMmenuHoverTrigger(true)} onHoverEnd={() => setBottoMmenuHoverTrigger(false)}>projects</TextScramble></button>
            <button className='nav-menu-button left' onClick={handleNavAboutClick}><TextScramble duration={.5} trigger={leftMenuHoverTrigger} onHoverStart={() => setLeftMenuHoverTrigger(true)} onHoverEnd={() => setLeftMenuHoverTrigger(false)}>about</TextScramble></button>
          </div>

        </div>

      </div>

      <div className='footer-content'>
        
        <div className='bottom-right-container'>
        <a className='old-website' href='https://connorscally-dot-com-old-version.onrender.com'>click here for the old wesbite</a>
          <Tilt rotationFactor={2.5} isRevese>
            <Spotlight className='from-blue-600 via-blue-500 to-blue-400 blur-3xl dark:from-blue-200 dark:via-blue-300 dark:to-blue-400' size={124} />
            <div className='links-bar-container'>
              <BorderTrail style={{ boxShadow: '4px 4px 4px 800px rgb(0 0 0 / 65%)' }} size={60} />
              <div className='links-bar-background'>
                <div className='link-buttons'>
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
                    <a href='https://www.github.com/scallyk'>
                      <button className='link-button'>
                        <img className='link-button-img' src={github} alt="Button for Connor Scally's GitHub profile." />
                      </button>
                    </a>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
                    <a href='https://www.linkedin.com/in/connor-scally'>
                      <button className='link-button'>
                        <img className='link-button-img' src={linkedin} alt="Button for Connor Scally's LinkedIn profile." />
                      </button>
                    </a>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
                    <a href='https://www.discordapp.com/users/332252883158564884'>
                      <button className='link-button'>
                        <img className='link-button-img' src={discord} alt="Button for Connor Scally's Discord profile." />
                      </button>
                    </a>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
                    <a href='https://steamcommunity.com/profiles/76561198213915209/'>
                      <button className='link-button'>
                        <img className='link-button-img' src={steam} alt="Button for Connor Scally's Steam profile." />
                      </button>
                    </a>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
                    <a href='https://www.twitch.tv/antimune'>
                      <button className='link-button'>
                        <img className='link-button-img' src={twitch} alt="Button for Connor Scally's Twitch profile." />
                      </button>
                    </a>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
                    <a href='https://www.dallaspcbuilder.com/'>
                      <button className='link-button'>
                        <img className='link-button-img' src={dpb} alt="Button for the Dallas PC Builder website." />
                      </button>
                    </a>
                  </motion.div>
                </div>
              </div>
            </div>
          </Tilt>
        </div>
        <div className='footer-texts-containers'>
          <TextEffect per='char' delay={0.5} className='name-date' variants={{ container: { hidden: { opacity: 0, }, visible: { opacity: 1, transition: { staggerChildren: 0.05, }, }, }, item: { hidden: { opacity: 0, rotateX: 90, y: 10, }, visible: { opacity: 1, rotateX: 0, y: 0, transition: { duration: 0.2, }, }, }, }}>@2025 connor K. scally</TextEffect>
          <TextEffect per='char' delay={0.5} className='better-on-desktop' variants={{ container: { hidden: { opacity: 0, }, visible: { opacity: 1, transition: { staggerChildren: 0.05, }, }, }, item: { hidden: { opacity: 0, rotateX: 90, y: 10, }, visible: { opacity: 1, rotateX: 0, y: 0, transition: { duration: 0.2, }, }, }, }}>this site is better on desktop.</TextEffect>
          <div className='details-credits'>
            <TextEffect per='word' delay={0.5} className='name-date' preset='slide'>all rights reserved.</TextEffect>
            <TextEffect as='span' per='word' delay={0.5} className='name-date' preset='slide'>(</TextEffect>
            <button className='footer-button' onClick={handleNavDetailsClick}><TextEffect per='word' delay={0.5} className='details-credits' preset='slide'>details</TextEffect></button>
            <TextEffect as='span' per='word' delay={0.5} className='name-date' preset='slide'>)</TextEffect>
            <TextEffect as='span' per='word' delay={0.5} className='name-date' preset='slide'>(</TextEffect>
            <button className='footer-button' onClick={handleNavCreditsClick}><TextEffect per='word' delay={0.5} className='details-credits' preset='slide'>credits</TextEffect></button>
            <TextEffect as='span' per='word' delay={0.5} className='name-date' preset='slide'>)</TextEffect>
          </div>
        </div>
      </div>


    </motion.div>
  )
}

export default App  