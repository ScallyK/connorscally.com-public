import { MorphingDialog, MorphingDialogTrigger, MorphingDialogContent, MorphingDialogTitle, MorphingDialogImage, MorphingDialogSubtitle, MorphingDialogDescription, MorphingDialogContainer, } from './components/core/morphing-dialog';
import React from 'react';
import * as motion from "motion/react-client"
import './assets/css/ProjectsBoxes.css';

export type Project = {
    id: string;
    type: string;
    content: React.ReactNode;
};

export const projectData: Project[] = [
    {
        id: 'connorscallydotcom', type: 'web', content: <motion.div id='connorscallydotcom' initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.3,
                scale: { type: "spring", visualDuration: 0.3, bounce: 0.25 },
            }}>
            <MorphingDialog>
                <MorphingDialogTrigger className='make-transparent'>
                    <MorphingDialogImage
                        src="/Project-Background.svg"
                        alt='A background image of a project.'
                        className='project-background'
                    />
                    <div>
                        <div className='exterior-project-container'>
                            <MorphingDialogTitle className='project-title'>connorscally.com</MorphingDialogTitle>
                            <MorphingDialogSubtitle className='project-subtitle'>my personal website</MorphingDialogSubtitle>
                            <img src="/connorscallydotcom.png" alt='A screenshot of connorscally.com.' className='exterior-project-screenshot'></img>
                        </div>
                    </div>
                </MorphingDialogTrigger>
                <MorphingDialogContainer>
                    <MorphingDialogContent style={{ width: '75%', height: 'auto', borderRadius: '24px', marginLeft: '2%', backgroundImage: `url("/Project-Background.svg)`, backgroundSize: 'cover', backgroundPosition: 'center', borderColor: 'white', borderWidth: '5px', borderStyle: 'solid' }}>
                        <MorphingDialogImage
                            src="/connorscallydotcom.png"
                            alt='A screenshot of connorscally.com.'
                            className='project-screenshot'
                            style={{ width: '50%', height: 'auto', borderRadius: '24px', marginLeft: '2%', marginTop: '2%' }}
                        />
                        <div>
                            <MorphingDialogTitle className='interior-project-title glitch' data-text="connorscally.com">connorscally.com</MorphingDialogTitle>
                            <MorphingDialogSubtitle className='interior-project-subtitle'>literally this website</MorphingDialogSubtitle>
                            <a href = 'https://github.com/ScallyK/connorscally.com-public/' className='interior-project-subtitle' style={{textDecoration: 'underline'}}>click here for the code</a>
                            <MorphingDialogDescription>
                                <div style={{ marginBottom: '2%' }}>
                                    <p className='project-text'>I built a static site in early 2023, that I then replaced with this one to demo my front end skills. I hope you like it!</p>
                                    <p className='project-text'>This site was built with React/Vite, Three.JS, Motion, GSAP, Tailwind, TypeScript, Figma, and VSCode </p>
                                </div>
                            </MorphingDialogDescription>
                        </div>

                    </MorphingDialogContent>
                </MorphingDialogContainer>
            </MorphingDialog>
        </motion.div>
    },
    {
        id: 'infosage', type: 'web', content: <motion.div id='infosage' initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
            duration: 0.3,
            scale: { type: "spring", visualDuration: 0.3, bounce: 0.25 },
        }}>
            <MorphingDialog>
                <MorphingDialogTrigger className='make-transparent'>
                    <MorphingDialogImage
                        src="/Project-Background.svg"
                        alt='A background image of a project.'
                        className='project-background'
                    />
                    <div>
                        <div className='exterior-project-container'>
                            <MorphingDialogTitle className='project-title'>infosageai.com</MorphingDialogTitle>
                            <MorphingDialogSubtitle className='project-subtitle'>rag as a service for local businesses</MorphingDialogSubtitle>
                            <img src="/infosage.png" alt='A screenshot of infosageai.com.' className='exterior-project-screenshot'></img>
                        </div>
                    </div>
                </MorphingDialogTrigger>
                <MorphingDialogContainer>
                    <MorphingDialogContent style={{ width: '75%', height: 'auto', borderRadius: '24px', marginLeft: '2%', backgroundImage: `url("/Project-Background.svg)`, backgroundSize: 'cover', backgroundPosition: 'center', borderColor: 'white', borderWidth: '5px', borderStyle: 'solid' }}>
                        <MorphingDialogImage
                            src="/infosage2.png"
                            alt='A screenshot of infosageai.com.'
                            className='project-screenshot'
                            style={{ width: '50%', height: 'auto', borderRadius: '24px', marginLeft: '2%', marginTop: '2%' }}
                        />
                        <div>
                            <MorphingDialogTitle className='interior-project-title glitch' data-text="infosageai.com">infosageai.com</MorphingDialogTitle>
                            <MorphingDialogSubtitle className='interior-project-subtitle'>I started InfoSage in 2024 after seeing a need for offering custom AI solutions to local businesses.</MorphingDialogSubtitle>
                            <MorphingDialogDescription>
                                <div style={{ marginBottom: '2%' }}>
                                    <p className='project-text'>InfoSage is a RAG as a service platform that uses files and documents from your business to create personalized AI solutions for your use cases. InfoSage updates as you work. As you work with files, InfoSage Models learn on the fly as soon as you hit save.</p>
                                </div>
                            </MorphingDialogDescription>
                        </div>

                    </MorphingDialogContent>
                </MorphingDialogContainer>
            </MorphingDialog>
        </motion.div>
    },
    {
        id: 'dpb', type: 'web', content: <motion.div id='dpb' initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
            duration: 0.3,
            scale: { type: "spring", visualDuration: 0.3, bounce: 0.25 },
        }}>
            <MorphingDialog>
                <MorphingDialogTrigger className='make-transparent'>
                    <MorphingDialogImage
                        src="/Project-Background.svg"
                        alt='A background image of a project.'
                        className='project-background'
                    />
                    <div>
                        <div className='exterior-project-container'>
                            <MorphingDialogTitle className='project-title'>dallas pc builder</MorphingDialogTitle>
                            <MorphingDialogSubtitle className='project-subtitle'>bringing pc gaming to dfw</MorphingDialogSubtitle>
                            <img src="/dpb.png" alt='A screenshot of dallaspcbuilder.com.' className='exterior-project-screenshot'></img>
                        </div>
                    </div>
                </MorphingDialogTrigger>
                <MorphingDialogContainer>
                    <MorphingDialogContent style={{ width: '75%', height: 'auto', borderRadius: '24px', marginLeft: '2%', backgroundImage: `url("/Project-Background.svg)`, backgroundSize: 'cover', backgroundPosition: 'center', borderColor: 'white', borderWidth: '5px', borderStyle: 'solid' }}>
                        <MorphingDialogImage
                            src="/dpb3.png"
                            alt='A screenshot of dallaspcbuilder.com.'
                            className='project-screenshot'
                            style={{ width: '35%', height: 'auto', borderRadius: '24px', marginLeft: '2%', marginTop: '2%' }}
                        />
                        <div>
                            <MorphingDialogTitle className='interior-project-title glitch' data-text="dallas pc builder">dallas pc builder</MorphingDialogTitle>
                            <MorphingDialogSubtitle className='interior-project-subtitle'>DPB specializes in custom gaming PCs, servicing the DFW Metroplex and beyond</MorphingDialogSubtitle>
                            <MorphingDialogDescription>
                                <div style={{ marginBottom: '2%' }}>
                                    <p className='project-text'>Dallas PC Builder specializes in custom performance gaming PCs. From basic battlestations to hard-tubed watercooled, DPB does it all!</p>
                                </div>
                            </MorphingDialogDescription>
                        </div>

                    </MorphingDialogContent>
                </MorphingDialogContainer>
            </MorphingDialog>
        </motion.div>
    },
    {
        id: 'chessvision', type: 'ai', content: <motion.div id='chessvision' initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
            duration: 0.3,
            scale: { type: "spring", visualDuration: 0.3, bounce: 0.25 },
        }}>
            <MorphingDialog>
                <MorphingDialogTrigger className='make-transparent'>
                    <MorphingDialogImage
                        src="/Project-Background.svg"
                        alt='A background image of a project.'
                        className='project-background'
                    />
                    <div>
                        <div className='exterior-project-container'>
                            <MorphingDialogTitle className='project-title'>chessvision</MorphingDialogTitle>
                            <MorphingDialogSubtitle className='project-subtitle'>instant chess analysis with ml</MorphingDialogSubtitle>
                            <img src="/chessvision.jpeg" alt='A screenshot of chessvision.' className='exterior-project-screenshot chessvision-screenshot' style={{ width: '60%', marginLeft: '20%' }}></img>
                        </div>
                    </div>
                </MorphingDialogTrigger>
                <MorphingDialogContainer>
                    <MorphingDialogContent style={{ width: '75%', height: 'auto', borderRadius: '24px', marginLeft: '2%', backgroundImage: `url("/Project-Background.svg)`, backgroundSize: 'cover', backgroundPosition: 'center', borderColor: 'white', borderWidth: '5px', borderStyle: 'solid' }}>
                        <MorphingDialogImage
                            src="/chessvision.jpeg"
                            alt='A screenshot of chessvision'
                            className='project-screenshot'
                            style={{ width: '50%', height: 'auto', borderRadius: '24px', marginLeft: '2%', marginTop: '2%' }}
                        />
                        <div>
                            <MorphingDialogTitle className='interior-project-title glitch' data-text="chessvision">chessvision</MorphingDialogTitle>
                            <MorphingDialogSubtitle className='interior-project-subtitle'>ChessVision is an application that takes an image or live video and instantly analyzes the position and makes predictions using ML.</MorphingDialogSubtitle>
                            <MorphingDialogDescription>
                                <div style={{ marginBottom: '2%' }}>
                                    <p className='project-text'>Trained SVM, CNN, and Random Forest models to classify the chessboard using AWS and a chess dataset of 10,000+ games.</p>
                                    <p className='project-text'>I specifically worked on Board Visualization, a script that uses a FastRCNN model to determine if a tile on a chess board is occupied and, if so, what piece it is. Results are then stored in image, string, and array form and given to the statistics prediction model.</p>
                                </div>
                            </MorphingDialogDescription>
                        </div>

                    </MorphingDialogContent>
                </MorphingDialogContainer>
            </MorphingDialog>
        </motion.div>
    },
    {
        id: 'nova', type: 'hardware', content: <motion.div id='nova' initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
            duration: 0.3,
            scale: { type: "spring", visualDuration: 0.3, bounce: 0.25 },
        }}>
            <MorphingDialog>
                <MorphingDialogTrigger className='make-transparent'>
                    <MorphingDialogImage
                        src="/Project-Background.svg"
                        alt='A background image of a project.'
                        className='project-background'
                    />
                    <div>
                        <div className='exterior-project-container'>
                            <MorphingDialogTitle className='nova-project-title' >nova autonomous driving project</MorphingDialogTitle>
                            <MorphingDialogSubtitle className='project-subtitle nova-project-subtitle'>autonomous driving undergrad org</MorphingDialogSubtitle>
                            <img src="/nova.jpeg" alt='A screenshot of nova.' className='exterior-project-screenshot'></img>
                        </div>
                    </div>
                </MorphingDialogTrigger>
                <MorphingDialogContainer>
                    <MorphingDialogContent style={{ width: '75%', height: 'auto', borderRadius: '24px', marginLeft: '2%', backgroundImage: `url("/Project-Background.svg)`, backgroundSize: 'cover', backgroundPosition: 'center', borderColor: 'white', borderWidth: '5px', borderStyle: 'solid' }}>
                        <MorphingDialogImage
                            src="/nova2.png"
                            alt='A screenshot of nova'
                            className='project-screenshot'
                            style={{ width: '50%', height: 'auto', borderRadius: '24px', marginLeft: '2%', marginTop: '2%' }}
                        />
                        <div>
                            <MorphingDialogTitle className='interior-project-title glitch' data-text="nova autonomous driving project">nova autonomous driving project</MorphingDialogTitle>
                            <MorphingDialogSubtitle className='interior-project-subtitle'>Nova is an autonomous driving project consisting of undergrads at the University of Texas at Dallas.</MorphingDialogSubtitle>
                            <MorphingDialogDescription>
                                <div style={{ marginBottom: '2%' }}>
                                    <p className='project-text'>Managed the virtualization and development platform for a 14-member team utilized for training in-house machine learning algorithms.</p>
                                    <p className='project-text'>Later, I moved to the hardware/firmware team to perform hardware upgrades, wiring, and maintenance.</p>
                                </div>
                            </MorphingDialogDescription>
                        </div>

                    </MorphingDialogContent>
                </MorphingDialogContainer>
            </MorphingDialog>
        </motion.div>
    },
    {
        id: 'iam', type: 'web', content: <motion.div id='iam' initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
            duration: 0.3,
            scale: { type: "spring", visualDuration: 0.3, bounce: 0.25 },
        }}>
            <MorphingDialog>
                <MorphingDialogTrigger className='make-transparent'>
                    <MorphingDialogImage
                        src="/Project-Background.svg"
                        alt='A background image of a project.'
                        className='project-background'
                    />
                    <div>
                        <div className='exterior-project-container'>
                            <MorphingDialogTitle className='project-title iam-title'>intelligent asset management</MorphingDialogTitle>
                            <MorphingDialogSubtitle className='project-subtitle iam-subtitle'>2025 computer science senior project</MorphingDialogSubtitle>
                            <img src="/iam1.png" alt='A screenshot of intelligent asset management' className='exterior-project-screenshot iam-exterior-project-screenshot'></img>
                        </div>
                    </div>
                </MorphingDialogTrigger>
                <MorphingDialogContainer>
                    <MorphingDialogContent style={{ width: '75%', height: 'auto', borderRadius: '24px', marginLeft: '2%', backgroundImage: `url("/Project-Background.svg)`, backgroundSize: 'cover', backgroundPosition: 'center', borderColor: 'white', borderWidth: '5px', borderStyle: 'solid' }}>
                        <MorphingDialogImage
                            src="/iam2.png"
                            alt='A screenshot of intelligent asset management'
                            className='project-screenshot'
                            style={{ width: '20%', height: 'auto', borderRadius: '24px', marginLeft: '2%', marginTop: '2%' }}
                        />
                        <div>
                            <MorphingDialogTitle className='interior-project-title glitch' data-text="internet radio repo">intelligent asset management</MorphingDialogTitle>
                            <MorphingDialogSubtitle className='interior-project-subtitle'>intelligent asset management was my senior project for my bachelors at UT Dallas.</MorphingDialogSubtitle>
                            <MorphingDialogDescription>
                                <div style={{ marginBottom: '2%' }}>
                                    <p className='project-text'>I worked with 4 other students to develop intelligent asset management. I primarily worked on the email backend and the front end. intelligent asset management sends AI driven stock reports for chosen tickers directly to a users inbox on a daily basis, offering both free and paid services.</p>
                                </div>
                            </MorphingDialogDescription>
                        </div>

                    </MorphingDialogContent>
                </MorphingDialogContainer>
            </MorphingDialog>
        </motion.div>
    },
    // {
    //     id: 'bookshelf', type: 'mobile', content: <motion.div id='bookshelf' initial={{ opacity: 0, scale: 0 }}
    //     animate={{ opacity: 1, scale: 1 }}
    //     transition={{
    //         duration: 0.3,
    //         scale: { type: "spring", visualDuration: 0.3, bounce: 0.25 },
    //     }}>
    //         <MorphingDialog>
    //             <MorphingDialogTrigger className='make-transparent'>
    //                 <MorphingDialogImage
    //                     src="/Project-Background.svg"
    //                     alt='A background image of a project.'
    //                     className='project-background'
    //                 />
    //                 <div>
    //                     <div className='exterior-project-container'>
    //                         <MorphingDialogTitle className='project-title'>bilingual bookshelf</MorphingDialogTitle>
    //                         <MorphingDialogSubtitle className='project-subtitle'>book reader for bilingiual children</MorphingDialogSubtitle>
    //                         <img src={bookshelf} alt='A screenshot of the bilingual bookshelf.' className='exterior-project-screenshot' style={{ width: '30%', marginLeft: '3%' }}></img>
    //                     </div>
    //                 </div>
    //             </MorphingDialogTrigger>
    //             <MorphingDialogContainer>
    //                 <MorphingDialogContent style={{ width: '75%', height: 'auto', borderRadius: '24px', marginLeft: '2%', backgroundImage: `url("/Project-Background.svg)`, backgroundSize: 'cover', backgroundPosition: 'center', borderColor: 'white', borderWidth: '5px', borderStyle: 'solid' }}>
    //                     <MorphingDialogImage
    //                         src={bookshelf2}
    //                         alt='A screenshot of bilingual bookshelf'
    //                         className='project-screenshot'
    //                         style={{ width: '30%', height: 'auto', borderRadius: '24px', marginLeft: '2%', marginTop: '2%' }}
    //                     />
    //                     <div>
    //                         <MorphingDialogTitle className='interior-project-title glitch' data-text="bilingual bookshelf">bilingual bookshelf</MorphingDialogTitle>
    //                         <MorphingDialogSubtitle className='interior-project-subtitle'>Bilingual Bookshelf is an iOS application created to allow children close to the Texas/Mexico border to have books read out loud to them while in hospital waiting rooms, daycares, and more. Bilingual Bookshelf offers both English and Spanish videos of children's books.</MorphingDialogSubtitle>
    //                     </div>

    //                 </MorphingDialogContent>
    //             </MorphingDialogContainer>
    //         </MorphingDialog>
    //     </motion.div>
    // },
    {
        id: 'scorecery', type: 'mobile', content: <motion.div id='scorecery' initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
            duration: 0.3,
            scale: { type: "spring", visualDuration: 0.3, bounce: 0.25 },
        }}>
        <MorphingDialog>
            <MorphingDialogTrigger className='make-transparent'>
                <MorphingDialogImage
                    src="/Project-Background.svg"
                    alt='A background image of a project.'
                    className='project-background'
                />
                <div>
                    <div className='exterior-project-container'>
                        <MorphingDialogTitle className='project-title scorecery-title'>scorecery</MorphingDialogTitle>
                        <MorphingDialogSubtitle className='project-subtitle scorecery-subtitle'>a simple but robust scorekeeper app</MorphingDialogSubtitle>
                        <img src="/scorecery-1.png" alt='A screenshot of scorecery' className='exterior-project-screenshot scorecery1' style={{ width: '22%', height: 'auto', borderRadius: '24px', marginLeft: '15.5%'}}></img>
                        <img src="/scorecery-3.png" alt='A screenshot of scorecery' className='exterior-project-screenshot scorecery2' style={{ width: '22%', height: 'auto', borderRadius: '24px', marginLeft: '61.5%'}}></img>
                        <img src="/scorecery-2.png" alt='A screenshot of scorecery' className='exterior-project-screenshot scorecery3' style={{ width: '22%', height: 'auto', borderRadius: '24px', marginLeft: '38.5%'}}></img>                  
                    </div>
                </div>
            </MorphingDialogTrigger>
            <MorphingDialogContainer>
                <MorphingDialogContent style={{ width: '75%', height: 'auto', borderRadius: '24px', marginLeft: '2%', backgroundImage: `url("/Project-Background.svg)`, backgroundSize: 'cover', backgroundPosition: 'center', borderColor: 'white', borderWidth: '5px', borderStyle: 'solid' }}>
                    <MorphingDialogImage
                        src="/scorecery-icon.png"
                        alt='A screenshot of scorecery.'
                        className='project-screenshot scorecery-screenshot'
                        style={{ width: '20%', height: 'auto', borderRadius: '24px', marginLeft: '2%', marginTop: '2%' }}
                    />
                    <div>
                        <MorphingDialogTitle className='interior-project-title glitch' data-text="scorecery">scorecery</MorphingDialogTitle>
                        <MorphingDialogSubtitle className='interior-project-subtitle'>an all-purpose score keeper</MorphingDialogSubtitle>
                        <MorphingDialogDescription>
                            <div style={{ marginBottom: '2%' }}>
                                <p className='project-text'>I built scorecery in 2025 to expand on my Swift skills</p>
                                <p className='project-text'>Scorecery isn't designed for any one particualr game, but can cater to trackking the stats for most of them. Scorcery could feasibly be used for most tabletop games, from D&D to Yahtzee.</p>
                                <p className='project-text'>
                                    Get Scorecery here:{" "}
                                    <a
                                        href="https://itunes.apple.com/WebObjects/MZStore.woa/wa/viewSoftware?id=6743645484"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ textDecoration: 'underline', color: '#0070f3' }}
                                    >
                                        App Store
                                    </a>
                                </p>
                            </div>
                        </MorphingDialogDescription>
                    </div>

                </MorphingDialogContent>
            </MorphingDialogContainer>
        </MorphingDialog>
    </motion.div>
    },
];

interface ProjectBoxesProps {
    projects: Project[];
}

// Render each project in its own div with the given id.
const ProjectBoxes: React.FC<ProjectBoxesProps> = ({ projects }) => {
    return (
        <div className='projects-container'>
            {Array.isArray(projects) && projects.map((project) => (
                <div key={project.id} id={project.id}>
                    {project.content}
                </div>
            ))}
        </div>
    );
};

export default ProjectBoxes;