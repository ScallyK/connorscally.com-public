import BackButton from './BackButton';
import Cats from './Cats';
import './assets/css/ScorecerySupport.css';
import { motion } from "framer-motion";
import { JSX } from 'react';

export default function ScorecerySupport(): JSX.Element {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="tac-container">
                <BackButton />
                <TermsAndConditionsBar />
                <CatsContainer />
                <TermsAndConditionsContent />
            </div>
        </motion.div>
    );
}

function TermsAndConditionsBar(): JSX.Element {
    return (
        <div className="tac-bar-container">
            <img
                src="/Project-Bar-Outline.svg"
                alt="Background of the terms and conditions menu bar"
                className="tac-bar-background"
            />
            <div className="tac-bar-contents">
                <span className="tac-bar-text">scorecery support</span>
            </div>
        </div>
    );
}

function CatsContainer(): JSX.Element {
    return (
        <div className="cats-container-details">
            <Cats />
        </div>
    );
}

function TermsAndConditionsContent(): JSX.Element {
    return (
        <div className="tac-contents">
            <img
                src="/Glass-Pane.svg"
                alt="Glass pane effect for center content"
                className="tac-background"
            />
            <div className="toc-text">
                <h1>Contact & Support</h1>
                <hr />
                <p>
                    If you need support for Scorecery or want to report a bug, please email me at{' '}
                    <a href="mailto:me@connorscally.com">me@connorscally.com</a>.
                </p>
                <p>
                    I will do my best to respond as quickly as possible, but please be patient as I am a solo developer
                    and may not be able to respond immediately.
                </p>
            </div>
        </div>
    );
}
