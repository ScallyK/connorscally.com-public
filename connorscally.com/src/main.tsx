/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentType, SetStateAction, Dispatch } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import LoadingWrapper from './LoadingWrapper.tsx'
import './assets/css/index.css'

const routeComponents: Array<() => Promise<{ default: ComponentType<any> }>> = [
  () => import('../src/Home.tsx'),
  () => import('../src/Projects.tsx'),
  () => import('../src/About.tsx'),
  () => import('../src/Contact.tsx'),
  () => import('../src/Credits.tsx'),
  () => import('../src/Details.tsx'),
  () => import('../src/ProjectsBoxes.tsx'),
]

const assetURLs = [
  '/About-Frame.svg',
  // '/Aura_Background_2.mp4',
  // '/Aura_Background.mp4',
  '/Back-Glyph.svg',
  '/blb1.jpeg',
  '/blb2.jpeg',
  '/cats-background.svg',
  '/chessvision.jpeg',
  '/connorscallydotcom.png',
  '/dababy.png',
  '/default_background.svg',
  '/discord.svg',
  '/divider.svg',
  '/dpb.png',
  '/dpb.svg',
  '/dpb2.jpeg',
  '/dpb3.png',
  '/equalizer.gif',
  '/github.svg',
  '/Glass-Pane.svg',
  '/grain.svg',
  '/iam1.png',
  '/iam2.png',
  '/icon.JPG',
  '/infosage.png',
  '/infosage2.png',
  '/kane.png',
  '/first_frame.png',
  '/first_frame2.png',
  '/first_frame3.png',
  // '/Lava.mp4',
  '/linkedin.svg',
  '/More-Glyph.svg',
  '/nova.jpeg',
  '/nova2.png',
  '/nova3.png',
  '/profile-1.jpeg',
  '/profile-2.jpeg',
  '/Project-Background.svg',
  '/Project-Bar-Outline.svg',
  '/scorecery-1.png',
  '/scorecery-2.png',
  '/scorecery-3.png',
  '/scorecery-icon.png',
  '/scorecery.jpeg',
  '/scorecery2.jpeg',
  '/selector.svg',
  '/steam.svg',
  '/twitch.svg',
]

function preloadRoutes(): Promise<any[]> {
  return Promise.all(routeComponents.map(load => load()));
}

function preloadAssets(onProgress: (progress: number) => void = () => { }): Promise<void[]> {

  console.log('Preloading assets...');

  let loadedAssets = 0;

  return Promise.all(assetURLs.map((src) => {

    console.log(`Preloading asset: ${src}`);

    return new Promise<void>((resolve) => {
      const ext = src.split('.').pop()?.toLocaleLowerCase();
      let element: HTMLImageElement | HTMLVideoElement | HTMLLinkElement;

      const handleLoad = () => {
        loadedAssets++;
        onProgress(loadedAssets / assetURLs.length);
        resolve();
      }

      const handleError = () => {
        console.warn(`Failed to pre-load asset:, ${src}`);
        handleLoad();
      }

      if (ext === 'mp4') {
        element = document.createElement('video');

        element.setAttribute('playsinline', '');
        element.setAttribute('muted', '');
        element.setAttribute('preload', 'auto');
        element.setAttribute('src', src);

        element.src = src;
        element.muted = true;
        element.loop = true;
        element.playsInline = true;
        element.preload = 'auto';

        element.style.display = 'none';
        document.body.appendChild(element);

        let loaded = false;

        const handleLoad = () => {
          if (!loaded) {
            loaded = true;
            loadedAssets++;
            onProgress(loadedAssets / assetURLs.length);
            resolve();
          }
        };

        element.onloadeddata = handleLoad;
        element.oncanplaythrough = handleLoad;
        element.onerror = handleError;

      }

      else if (ext === 'css') {
        element = document.createElement('link');
        element.rel = 'stylesheet';
        element.href = src;
        element.onload = handleLoad;
        element.onerror = handleError;
        document.head.appendChild(element);
      }
      else {
        element = new Image();
        element.src = src;
        element.onload = handleLoad;
        element.onerror = handleError;
      }

    });
  })
  );
}
async function init(): Promise<void> {

  console.log('Initializing application...');

  const container = document.getElementById('root');
  if (!container) throw new Error('Root container not found');

  const root = ReactDOM.createRoot(container);

  let updateProgress: Dispatch<SetStateAction<number>> = () => { };

  root.render(<LoadingWrapper setSetter={(setter) => (updateProgress = setter)} />);

  await preloadRoutes();
  await preloadAssets((prog: number) => updateProgress(prog));

  console.log('Assets preloaded successfully.');

  root.render(<App />);

  console.log('Application initialized successfully.');

}

init();
