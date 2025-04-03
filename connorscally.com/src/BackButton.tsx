import BackGlyph from './assets/images/Back-Glyph.svg';
import * as motion from "motion/react-client"
import { useNavigate } from 'react-router-dom';
import './assets/css/BackButton.css';
import { BorderTrail } from './components/core/border-trail';

export default function BackButton() {

    const navigate = useNavigate();
    const handleBackButtonClick = () => {
        navigate(-1);
    }

    return (
        <motion.div className='back-button-container' whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
            
            <button type='button' className='back-button' onClick={handleBackButtonClick}>
                <div className="border-trail-wrapper">
                    <BorderTrail style={{ boxShadow: '40px 40px 40px 200px rgb(255 255 255 / 80%)' }} size={60} />
                </div>
                <img src={BackGlyph} alt="Back Button SVG" className='back-button-img' />
            </button>
        </motion.div>
    )
}
