import React, { useEffect, useRef } from 'react';
import TopPage from "@/components/TopPage";
import Link from "next/link";
import IconButton from "@/components/IconButton";
import { BsDownload, BsLinkedin } from "react-icons/bs";
import TitleAnimation from "@/components/TitleAnimation";
import { TypeAnimation } from "react-type-animation";
import { IoMdContact } from "react-icons/io";
// import particlesJS from 'particles.js';
// import Spline from '@splinetool/react-spline';
import styles from '../styles/Home.module.css'
import { StarsCore } from '@/components/Sparkles';
import Spline from '@splinetool/react-spline';


const SplineComponent = () => {
    //   const canvasRef = useRef<HTMLCanvasElement>(null);

    //   useEffect(() => {
    //     if (canvasRef.current) {
    //         const app = new Application(canvasRef.current);
    //         app.load('https://prod.spline.design/bLntjqMjBwx8FWlh/scene.splinecode');

    //         // Définir un délai pour rendre le canvas visible
    //         setTimeout(() => {
    //             canvasRef.current!.style.visibility = 'visible';
    //             canvasRef.current!.style.opacity = '1';
    //         }, 2000);
    //     }
    //   }, []);

    //   return <canvas ref={canvasRef} id="canvas3d" className={styles.canvas3d}></canvas>;

    const splineRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setTimeout(() => {
            if (splineRef.current) {
                splineRef.current.style.visibility = 'visible';
                splineRef.current.style.opacity = '1';
                splineRef.current.style.zIndex = '5';
            }
        }, 1000);
    }, []);

    return (
        <div ref={splineRef} className={styles.canvas3d}>
            <Spline scene='https://prod.spline.design/bLntjqMjBwx8FWlh/scene.splinecode' />
        </div>
    );
};


function Home() {
    return (
        <div>
            <div className="h-screen w-full flex flex-col justify-between bg-neutral-50 overflow-hidden">
                <TopPage />
                <div className="flex items-center justify-center">

                    <div className="max-w-5xl z-10">
                        <div className={"p-5"}>
                            <div className={"flex flex-col"}>
                                <div className={"flex flex-col items-center justify-center h-screen w-full animatedDiv"}>
                                    <div className={""}>
                                        <TitleAnimation />
                                    </div>
                                    <div className={"text-center mt-5"}>
                                        <h3 className={"text-3xl font-medium"}>
                                            <span className={"mr-3"}>I am a</span>
                                            <TypeAnimation
                                                sequence={[
                                                    "Front-End Developer",
                                                    1500,
                                                    "Ux/Ui Designer",
                                                    2000,
                                                ]}
                                                speed={25}
                                                className="font-mono text-red-500"
                                                wrapper={'span'}
                                                repeat={Infinity}
                                            />
                                        </h3>
                                    </div>
                                    <div className={"flex mt-14 z-8"}>
                                        <Link target="_blank" href="https://www.linkedin.com/in/jaoudat-sabalbal-214723195/"
                                            passHref={true} className="contents">
                                            <IconButton text={"Linkedin"} color={"bg-blue-600"}>
                                                <BsLinkedin className="h-5 w-5" />
                                            </IconButton>
                                        </Link>
                                        <a href='/documents/Cv%20Jaoudat%20SABALBAL%20Designer%20Ux%20Ui%20Dev%20Front.pdf' target="_blank" rel="noopener noreferrer">
                                            <IconButton text={"Cv"} color={"bg-gradient-to-tr from-red-700 to-yellow-500"}>
                                                <BsDownload className="h-5 w-5" />
                                            </IconButton>
                                        </a>
                                    </div>
                                </div>

                                {/* <SplineComponent /> */}
                            </div>
                        </div>
                    </div>
                    <StarsCore
                        id="tsparticlesfullpage"
                        background="transparent"
                        minSize={1.2}
                        maxSize={2}
                        particleDensity={100}
                        className="absolute top-0 w-full h-screen z-1"
                        particleColor="#000000"
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;