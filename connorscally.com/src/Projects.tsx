import BackButton from './BackButton.js';
import MoreGlyph from './assets/images/More-Glyph.svg';
import menu_bar_background from './assets/images/Project-Bar-Outline.svg';
import * as motion from "motion/react-client"
import ProjectBoxes, { projectData, Project } from './ProjectsBoxes.tsx';
import React from 'react';
import './assets/css/Projects.css';

const Projects: React.FC = () => {

    const [filter, setFilter] = React.useState<string | null>(null);
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const filteredProjects: Project[] = filter
        ? projectData.filter((project) => project.type === filter)
        : projectData;

    React.useEffect(() => {
        setCurrentIndex(0);
    }, [filter]);

    const handleNext = () => {
        if (filteredProjects.length === 0) return;
        setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredProjects.length);
    };

    const safeIndex = currentIndex >= filteredProjects.length ? 0 : currentIndex;
    const projectsToRender = filteredProjects.length > 0
    ? [filteredProjects[safeIndex]]
    : [];

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="main-projects-container">
                <BackButton />
                <div className='menu-bar-container'>
                    <img src={menu_bar_background} alt="background of the projects menu bar" className='menu-bar-background' />
                    <div className='menu-bar-contents'>
                        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}> <button id='web' className='menu-bar-button' onClick={() => setFilter('web')}>web</button> </motion.div>
                        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}> <button id='mobile' className='menu-bar-button' onClick={() => setFilter('mobile')}>mobile</button> </motion.div>
                        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}> <button id='hardware' className='menu-bar-button' onClick={() => setFilter('hardware')}>hardware</button> </motion.div>
                        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}> <button id='ai' className='menu-bar-button' onClick={() => setFilter('ai')}>ai/ml</button> </motion.div>
                    </div>
                </div>
                <ProjectBoxes projects={projectsToRender} />
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} className='more-glyph-button'>
                    <button className='make-transparent' onClick={handleNext}>
                        <img className='more-glyph-img' src={MoreGlyph} alt="Button for moving to the next project." />
                    </button>
                </motion.div>
            </div>
        </motion.div>
    )
}


export default Projects