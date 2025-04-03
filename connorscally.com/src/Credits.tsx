import BackButton from './BackButton';
import './assets/css/Credits.css';
import divider from './assets/images/divider.svg'
import { motion } from "framer-motion";
import { JSX } from 'react';

export default function Credits(): JSX.Element {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <div className="credits-container">
            <BackButton />
            <div className="credits-bar-container">
                <div className="credits-bar-background">
                    <div className="credits-bar-contents">
                        <span className="credits-bar-text">credits</span>
                    </div>
                </div>
            </div>
            <div className='credits-content-container'>
                <div className='tools-used'>
                    <h1 className='tools-title glitch' data-text='tools used'>tools used</h1>
                    <img src={divider} alt="divding bar underneath the main text" className='credits-divider' />
                    <ul className='tools-list'>
                        <li>VS Code</li>
                        <li>Figma</li>
                        <li>Three.js</li>
                        <li>Motion</li>
                        <li>Motion-Primitives</li>
                        <li>GSAP</li>
                        <li>Tailwind</li>
                        <li>Spotify Dev Portal</li>
                        <li>Awwwards</li>
                        <li>Glitch effect: Isaac Doud</li>
                    </ul>
                </div>
                <div className='languages'>
                    <h1 className='languages-title glitch' data-text='languages used'>languages used</h1>
                    <img src={divider} alt="divding bar underneath the main text" className='credits-divider' />
                    <ul className='languages-list'>
                        <li>React (Vite)</li>
                        <li>TypeScript</li>
                        <li>CSS</li>
                        <li>HTML</li>
                    </ul>
                </div>
            </div>
        </div>
        </motion.div>
    );
}

