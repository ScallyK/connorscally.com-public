import Dababy from './assets/images/dababy.png'
import Kane from './assets/images/kane.png'
import CatsBackground from './assets/images/cats-background.svg'
import { Cursor } from './components/core/cursor';
import { SVGProps } from 'react';
import './assets/css/Cats.css';

const MouseIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={26}
            height={31}
            fill='none'
            {...props}
        >
            <g clipPath='url(#a)'>
                <path
                    fill={'red'}
                    fillRule='evenodd'
                    stroke={'white'}
                    strokeLinecap='square'
                    strokeWidth={2}
                    d='M21.993 14.425 2.549 2.935l4.444 23.108 4.653-10.002z'
                    clipRule='evenodd'
                />
            </g>
            <defs>
                <clipPath id='a'>
                    <path fill={'#22c55e'} d='M0 0h26v31H0z' />
                </clipPath>
            </defs>
        </svg>
    );
};

export default function Cats() {
    return (
        <div className="main-cats-container">
            <div className="dababy-container">
                <Cursor
                    attachToParent
                    variants={{
                        initial: { scale: 0.3, opacity: 0 },
                        animate: { scale: 1, opacity: 1 },
                        exit: { scale: 0.3, opacity: 0 },
                    }}
                    transition={{
                        ease: 'easeInOut',
                        duration: 0.15,
                    }}
                    className='left-12 top-4'
                >
                    <div>
                        <MouseIcon className='h-6 w-6' />
                        <div className='ml-4 mt-1 rounded-[4px] bg-white px-2 py-0.5 text-neutral-800 font-major-mono-display' style={{ fontFamily: 'Major Mono Display, monospace' }}>
                            dababy
                        </div>
                    </div>
                </Cursor>
                {/* <span className='cat-text'>dababy</span> */}
                <div className="cat-wrapper">
                    <img src={CatsBackground} alt="A background SVG that sits behind pictures of my cats" className='cat-background' />
                    <img src={Dababy} alt="An image of my cat, Dababy" className='cat-image' />
                </div>
            </div>
            <div className="kane-container">
                <Cursor
                    attachToParent
                    variants={{
                        initial: { scale: 0.3, opacity: 0 },
                        animate: { scale: 1, opacity: 1 },
                        exit: { scale: 0.3, opacity: 0 },
                    }}
                    transition={{
                        ease: 'easeInOut',
                        duration: 0.15,
                    }}
                    className='left-12 top-4'
                >
                    <div>
                        <MouseIcon className='h-6 w-6' />
                        <div className='ml-4 mt-1 rounded-[4px] bg-white px-2 py-0.5 text-neutral-800 font-major-mono-display' style={{ fontFamily: 'Major Mono Display, monospace' }}>
                            kane
                        </div>
                    </div>
                </Cursor>
                {/* <span className='cat-text'>kane</span> */}
                <div className="cat-wrapper">
                    <img src={CatsBackground} alt="A background SVG that sits behind pictures of my cats" className='cat-background' />
                    <img src={Kane} alt="An image of my cat, Kane" className='cat-image' />
                </div>
            </div>
            <div className="bottom-text">
                <span className="bottom-text-text">bonus images of my kids</span>
            </div>
        </div>
    )
}
