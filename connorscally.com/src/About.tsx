import clouds from './assets/videos/clouds-full-ping-pong.mp4';
import grain from './assets/images/grain.svg';
import glass from './assets/images/About-Frame.svg';
import { TextRoll } from './components/core/text-roll.tsx';
import { TextLoop } from './components/core/text-loop.tsx';
import { GlowEffect } from './components/core/glow-effect.tsx';
import { motion } from "framer-motion";
import profile_pic_2 from './assets/images/profile-2.jpeg';
import BackButton from './BackButton.js';
import './assets/css/glitch.scss'
import './assets/css/About.css';

function About() {

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="about-content-container">
                <video autoPlay muted loop playsInline className="about-background-video">
                    <source src={clouds} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <img src={grain} alt="background transparent grain effect" className='grain' />
            <div className='main-about-content'>
                <div className='about-back-button'>
                    <BackButton />
                </div>
                <TextRoll className='about-title'>about me</TextRoll>
                <div className='about-profile-pic-container'>
                    <GlowEffect
                        style={{borderRadius: '35%'}}
                        colors={['#00E5FF', '#006FFF', '#33E9CB', '#FFFFFF']}
                        mode='colorShift'
                        blur='strong'
                        duration={3}
                        scale={0.9}
                    />
                    <video autoPlay muted loop playsInline className="about-profile-background-video">
                        <source src={clouds} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className='about-profile-pic-div'>
                        <img src={profile_pic_2} alt="Connor Scally's profile picture." className='about-profile-pic' />
                    </div>
                </div>
                <p className='about-text'>Hello! i’m connor<TextLoop className='looping-text'>
                    <span id = 'about-text1' className='glitch' data-text='a software developer' style={{ fontSize: '0.8vw' }} >a software developer</span>
                    <span id = 'about-text2' className='glitch' data-text='a figma enthusiast' style={{ fontSize: '0.8vw' }} >a figma enthusiast</span>
                    <span id = 'about-text3' className='glitch' data-text='a cat herder' style={{ fontSize: '0.8vw' }} >a cat herder</span>
                </TextLoop> based in dallas, texas. i am the owner of a successful custom gaming computer business, a computer science major at ut dallas, and an it professional.</p>
                <p className='about-text-sub'>in my free time, i’m either reading, chilling with my cats, or losing at overwatch.</p>
                <img src={glass} alt="glass pane effect for center content" className='glass' />
            </div>
        </motion.div>
    )
}

export default About