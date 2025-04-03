import './assets/css/Contact.css'
import './assets/css/glitch.scss'
import divider from './assets/images/divider.svg';
import BackButton from './BackButton.js';
import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { BokehPass } from 'three/addons/postprocessing/BokehPass.js'
//@ts-expect-error because FilmGrainShader does not need to be typed
import { FilmGrainShader } from './assets/shaders/FilmGrainPass.js';
//@ts-expect-error because VignetteShader does not need to be typed
import {VignetteShader } from './assets/shaders/VignettePass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { useEffect, useRef } from 'react';
import { Spotlight } from './components/core/spotlight';
import { motion } from "framer-motion";

function Contact() {

    const mountRef = useRef<HTMLDivElement | null>(null);
    const innerMountRef = useRef<HTMLDivElement | null>(null);
    const textRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {

        if (mountRef.current && innerMountRef.current && textRef.current) {

            // Scene setup
            const scene = new THREE.Scene();
            const innerScene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
            const innerCamera = new THREE.PerspectiveCamera(75, innerMountRef.current.offsetWidth / innerMountRef.current.offsetHeight, 0.1, 100);
            innerCamera.position.z = 4;
            camera.position.z = 5;

            const renderer = new THREE.WebGLRenderer({ alpha: true });
            const innerRenderer = new THREE.WebGLRenderer({ alpha: true });
            renderer.setSize(window.innerWidth, window.innerHeight);
            innerRenderer.setSize(innerMountRef.current.offsetWidth, innerMountRef.current.offsetHeight);
            mountRef.current.appendChild(renderer.domElement);
            innerMountRef.current.appendChild(innerRenderer.domElement);

            innerMountRef.current.style.position = "relative";
            innerRenderer.domElement.style.position = "absolute";
            innerRenderer.domElement.style.top = "0";
            innerRenderer.domElement.style.left = "0";

            const composer = new EffectComposer(renderer);
            const innerComposer = new EffectComposer(innerRenderer);
            const renderPass = new RenderPass(scene, camera);
            const innerRenderPass = new RenderPass(innerScene, innerCamera);

            composer.addPass(renderPass);
            innerComposer.addPass(innerRenderPass);

            const bokehPass = new BokehPass(scene, camera, {
                focus: 1.0,
                aperture: 0.00005,
                // aperture: 0.0015,
                maxblur: 5.0
            });
            composer.addPass(bokehPass);

            const filmGrainPass = new ShaderPass(FilmGrainShader);
            composer.addPass(filmGrainPass);
            
            const vignettePass = new ShaderPass(VignetteShader);
            vignettePass.uniforms["offset"].value = 100;
            vignettePass.uniforms["darkness"].value = 75;
            composer.addPass(vignettePass);

            const outputPass = new OutputPass();
            composer.addPass(outputPass);

            // Circle creation function
            const createCircle = (radius: number) => {
                const circle = new THREE.Shape();
                circle.absarc(0, 0, radius, 0, Math.PI * 2, false);
                return circle;
            };

            // Square creation function:
            const createSquare = (size: number) => {
                const square = new THREE.Shape();
                square.moveTo(-size / 2, -size / 2);
                square.lineTo(size / 2, -size / 2);
                square.lineTo(size / 2, size / 2);
                square.lineTo(-size / 2, size / 2);
                square.lineTo(-size / 2, -size / 2);
                return square;
            };

            // First inner circle:
            const circle = createCircle(3.75);

            // Second inner circle:
            const secondCircle = createCircle(2.75);

            // Third inner circle:
            const thirdCircle = createCircle(2.70);

            // Fourth inner circle:
            const fourthCircle = createCircle(2.40);

            // Fifth inner circle:
            const fifthCircle = createCircle(1.6);

            // Sixth inner circle:
            const sixthCircle = createCircle(4.75);

            // Seventh inner circle:
            const seventhCircle = createCircle(5.3);

            // Eighth inner circle:
            const eighthCircle = createCircle(6.5);

            // Inner square:
            const squareSize = 3.25;
            const square = new THREE.Path();
            square.moveTo(-squareSize / 2, -squareSize / 2);
            square.lineTo(squareSize / 2, -squareSize / 2);
            square.lineTo(squareSize / 2, squareSize / 2);
            square.lineTo(-squareSize / 2, squareSize / 2);
            square.lineTo(-squareSize / 2, -squareSize / 2);
            circle.holes.push(square);

            // Second square:
            const secondSquareSize = 7.5;
            const secondSquare = new THREE.Shape();
            secondSquare.moveTo(-secondSquareSize / 2, -secondSquareSize / 2);
            secondSquare.lineTo(secondSquareSize / 2, -secondSquareSize / 2);
            secondSquare.lineTo(secondSquareSize / 2, secondSquareSize / 2);
            secondSquare.lineTo(-secondSquareSize / 2, secondSquareSize / 2);
            secondSquare.lineTo(-secondSquareSize / 2, -secondSquareSize / 2);

            // Get geometry and edges for circles:
            const circleGeometry = new THREE.ShapeGeometry(circle, 200);
            const secondSquareGeometry = new THREE.ShapeGeometry(secondSquare);
            const secondCircleGeometry = new THREE.ShapeGeometry(secondCircle, 200);
            const thirdCircleGeometry = new THREE.ShapeGeometry(thirdCircle, 200);
            const fourthCircleGeometry = new THREE.ShapeGeometry(fourthCircle, 200);
            const fifthCircleGeometry = new THREE.ShapeGeometry(fifthCircle, 200);
            const sixthCircleGeometry = new THREE.ShapeGeometry(sixthCircle, 200);
            const seventhCircleGeometry = new THREE.ShapeGeometry(seventhCircle, 200);
            const eighthCircleGeometry = new THREE.ShapeGeometry(eighthCircle, 200);

            // Edges:
            const edges = new THREE.EdgesGeometry(circleGeometry);
            const secondSquareEdges = new THREE.EdgesGeometry(secondSquareGeometry);
            const secondEdges = new THREE.EdgesGeometry(secondCircleGeometry);
            const thirdEdges = new THREE.EdgesGeometry(thirdCircleGeometry);
            const fourthEdges = new THREE.EdgesGeometry(fourthCircleGeometry);
            const fifthEdges = new THREE.EdgesGeometry(fifthCircleGeometry);
            const sixthEdges = new THREE.EdgesGeometry(sixthCircleGeometry);
            const seventhEdges = new THREE.EdgesGeometry(seventhCircleGeometry);
            const eighthEdges = new THREE.EdgesGeometry(eighthCircleGeometry);

            // Outline material:
            const material = new THREE.LineBasicMaterial({
                color: 0xffffff,
                linewidth: 5,
                opacity: 0.5,
                transparent: true
            });

            const thirdSquareSize = 5.0;
            const thirdSquare = createSquare(thirdSquareSize);
            const thirdSquareGeometry = new THREE.ShapeGeometry(thirdSquare);
            const thirdSquareEdges = new THREE.EdgesGeometry(thirdSquareGeometry);
            const thirdSquareLine = new THREE.LineSegments(thirdSquareEdges, material);

            const fourthSquareSize = 5.0;
            const fourthSquare = createSquare(fourthSquareSize);
            const fourthSquareGeometry = new THREE.ShapeGeometry(fourthSquare);
            const fourthSquareEdges = new THREE.EdgesGeometry(fourthSquareGeometry);
            const fourthSquareLine = new THREE.LineSegments(fourthSquareEdges, material);

            const fifthSquareSize = 5.0;
            const fifthSquare = createSquare(fifthSquareSize);
            const fifthSquareGeometry = new THREE.ShapeGeometry(fifthSquare);
            const fifthSquareEdges = new THREE.EdgesGeometry(fifthSquareGeometry);
            const fifthSquareLine = new THREE.LineSegments(fifthSquareEdges, material);

            // Line loop for edges
            const firstCircleLine = new THREE.LineSegments(edges, material);
            const secondCircleLine = new THREE.LineSegments(secondEdges, material);
            const secondSquareLine = new THREE.LineSegments(secondSquareEdges, material);
            secondSquareLine.rotateOnAxis(new THREE.Vector3(0, 0, 1), Math.PI / 4);
            fifthSquareLine.rotateOnAxis(new THREE.Vector3(0, 0, 1), Math.PI / -4);
            thirdSquareLine.rotateOnAxis(new THREE.Vector3(0, 1, 0), Math.PI / 4);
            fourthSquareLine.rotateOnAxis(new THREE.Vector3(0, 1, 0), Math.PI / -4);
            const thirdCircleLine = new THREE.LineSegments(thirdEdges, material);
            const fourthCircleLine = new THREE.LineSegments(fourthEdges, material);
            const fifthCircleLine = new THREE.LineSegments(fifthEdges, material);
            const sixthCircleLine = new THREE.LineSegments(sixthEdges, material);
            const seventhCircleLine = new THREE.LineSegments(seventhEdges, material);
            const eighthCircleLine = new THREE.LineSegments(eighthEdges, material);

            scene.add(
                firstCircleLine,
                secondCircleLine,
                thirdCircleLine,
                fourthCircleLine,
                fifthCircleLine,
                sixthCircleLine,
                seventhCircleLine,
                eighthCircleLine,
                secondSquareLine,
                thirdSquareLine,
                fourthSquareLine,
                fifthSquareLine
            );

            // Mouse movement handling
            const onMouseMove = (event: MouseEvent) => {
                // Convert screen coordinates to normalized device coordinates (-1 to 1)
                const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
                const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

                const tiltAmount = 0.3;
                const moveAmount = 100;

                camera.rotation.y = mouseX * tiltAmount;
                camera.rotation.x = mouseY * tiltAmount;

                if (textRef.current) {
                    textRef.current.style.transform = `translate(${mouseX * moveAmount}px, ${mouseY * moveAmount}px)`;
                }

                // Convert NDC to world coordinates
                const vector = new THREE.Vector3(mouseX, mouseY, 0);
                vector.unproject(camera);

                // Update positions of circles
                firstCircleLine.position.x = vector.x * 2;
                firstCircleLine.position.y = vector.y * 2;

                secondCircleLine.position.x = vector.x * 2;
                secondCircleLine.position.y = vector.y * 2;

                thirdCircleLine.position.x = vector.x * 2;
                thirdCircleLine.position.y = vector.y * 2;

                fourthCircleLine.position.x = vector.x * 2;
                fourthCircleLine.position.y = vector.y * 2;

                fifthCircleLine.position.x = vector.x * 2;
                fifthCircleLine.position.y = vector.y * 2;

                sixthCircleLine.position.x = vector.x * 2;
                sixthCircleLine.position.y = vector.y * 2;

                seventhCircleLine.position.x = vector.x * 2;
                seventhCircleLine.position.y = vector.y * 2;

                eighthCircleLine.position.x = vector.x * 2;
                eighthCircleLine.position.y = vector.y * 2;

                secondSquareLine.position.x = vector.x * 2;
                secondSquareLine.position.y = vector.y * 2;


            };

            window.addEventListener("mousemove", onMouseMove);

            const animate = () => {
                requestAnimationFrame(animate);
                filmGrainPass.uniforms["time"].value += 0.01;
                composer.render();
                innerComposer.render();
            };

            animate();

            // Cleanup
            return () => {
                if (mountRef.current && innerMountRef.current) {
                    // Remove the event listener and renderer from the DOM
                    window.removeEventListener("mousemove", onMouseMove);
                    mountRef.current.removeChild(renderer.domElement);
                    innerMountRef.current.removeChild(innerRenderer.domElement);

                    // Dispose of geometries and materials
                    scene.children.forEach(child => {
                        if (child instanceof THREE.LineSegments) {
                            child.geometry.dispose();
                            child.material.dispose();
                        }
                    });
                    composer.dispose();
                    innerComposer.dispose();
                    renderer.dispose();
                    innerRenderer.dispose();

                }
            }


        }
    }, []);


    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className='main-contact-content' ref={mountRef}>
                <BackButton />
                <Spotlight className='bg-[rgba(255,255,255,0.05)] contact-spotlight' size={1200} springOptions={{ bounce: 0.3, duration: 0.1, }} />
                <div className='main-text' ref={textRef}>
                    <div>
                        <h1 className="glitch" data-text="contact me">contact me</h1>
                    </div>
                    <img src={divider} alt="divding bar underneath the contact me text" className='contact-divider' />
                    <h2 className='phone-text'>469-905-2865</h2>
                    <h2 ref={innerMountRef} className='email-text'>me@connorscally.com</h2>
                </div>
            </div>
        </motion.div>
    )
}

export default Contact