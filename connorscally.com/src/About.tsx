import { TextRoll } from './components/core/text-roll.tsx';
import { TextLoop } from './components/core/text-loop.tsx';
import { GlowEffect } from './components/core/glow-effect.tsx';
import { motion } from "framer-motion";
import BackButton from './BackButton.js';
import './assets/css/glitch.scss'
import './assets/css/About.css';

function About() {

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="about-content-container">
                <video preload="auto" autoPlay muted loop playsInline poster="/first_frame.png" className="about-background-video">
                    <source src="/Aura_Background.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            {/* <img src="/grain.svg" alt="background transparent grain effect" className='grain' /> */}
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
                    <video preload="auto" autoPlay muted loop playsInline poster="/first_frame2.png" className="about-profile-background-video">
                        <source src="/Aura_Background_2.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className='about-profile-pic-div'>
                        <img src="/profile-2.jpeg" alt="Connor Scally's profile picture." className='about-profile-pic' />
                    </div>
                </div>
                <span className='about-text'>Hello! i'm connor<TextLoop className='looping-text'>
                    <span id='about-text1' className='glitch' data-text='a software developer' style={{ fontSize: '0.8vw' }} >a software developer</span>
                    <span id='about-text2' className='glitch' data-text='a figma enthusiast' style={{ fontSize: '0.8vw' }} >a figma enthusiast</span>
                    <span id='about-text3' className='glitch' data-text='a cat herder' style={{ fontSize: '0.8vw' }} >a cat herder</span>
                </TextLoop>
                </span>
                <p className='about-text-mid'>based in dallas, texas. i am the owner of a successful custom gaming computer business, a computer science major at ut dallas, and an it professional.</p>
                <p className='about-text-sub'>in my free time, i'm either reading, chilling with my cats, or losing at overwatch.</p>
                <img src="/About-Frame.svg" alt="glass pane effect for center content" className='glass' />
            </div>
        </motion.div>
    )
}

export default About