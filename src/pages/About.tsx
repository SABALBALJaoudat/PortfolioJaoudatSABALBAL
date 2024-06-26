/* eslint-disable react/no-unescaped-entities */
'use client'
import React, { useState } from 'react'
import { useRef, useEffect } from 'react';
import { BsDownload } from "react-icons/bs";
import Image from "next/image";
import photo from "@/image/Photo de profil.png";
import card_photo from "@/image/Card_photo_jaoudat.png";
import card_background from "@/image/Card_background_jaoudat.png";
import Link from "next/link";
import TopPage from '@/components/TopPage';
import Skill from '@/components/Skill';
import '../styles/About.module.scss'
import { motion } from 'framer-motion';
import styles from '../styles/About.module.scss'

interface MouseEvent {
  movementY: number;
  clientX: number;
}

function About() {
  const [isZoomed, setIsZoomed] = useState(false);

  // Define a reference to an SVGPathElement
  const path = useRef<SVGPathElement>(null);

  // Initialize progress, x, time, and reqId variables
  let progress = 0;
  let x = 0.5;
  let time = Math.PI / 2;
  let reqId: number | null = null;

  // Use the useEffect hook to set the path on component mount
  useEffect(() => {
    setPath(progress);
  }, []);

  // Define a function to set the path of the SVG element
  const setPath = (progress: number) => {
    // Get the width of the window
    const width = 1024 * 1;

    // Set the "d" attribute of the SVG path element using a quadratic Bézier curve
    path.current?.setAttributeNS(
      null,
      "d",
      `M0 250 Q${width * x} ${250 + progress}, ${width} 250`
    );
  };

  // Define a linear interpolation function
  const lerp = (x: number, y: number, a: number) => x * (1 - a) + y * a;

  // Define a function to handle mouse enter events
  const manageMouseEnter = () => {
    // If there is an animation frame request, cancel it and reset the animation
    if (reqId) {
      cancelAnimationFrame(reqId);
      resetAnimation();
    }
  };

  // Define a function to handle mouse move events
  const manageMouseMove = (e: MouseEvent) => {
    // Get the movementY and clientX properties from the event object
    const { movementY, clientX } = e;

    // Get the bounding rectangle of the SVG path element
    const pathBound = path.current?.getBoundingClientRect();

    // If the bounding rectangle exists, update x and progress and set the path
    if (pathBound) {
      x = (clientX - pathBound.left) / pathBound.width;
      progress += movementY;
      setPath(progress);
    }
  };

  // Define a function to handle mouse leave events
  const manageMouseLeave = () => {
    // Start animating out
    animateOut();
  };

  // Define a function to animate out
  const animateOut = () => {
    // Calculate newProgress using sine of time
    const newProgress = progress * Math.sin(time);

    // Update progress using linear interpolation towards zero
    progress = lerp(progress, 0, 0.025);

    // Increment time by 0.2
    time += 0.2;

    // Set the path using newProgress
    setPath(newProgress);

    // If progress is greater than a threshold, request another animation frame,
    // otherwise reset the animation.
    if (Math.abs(progress) > 0.75) {
      reqId = requestAnimationFrame(animateOut);
    } else {
      resetAnimation();
    }
  };

  // Define a function to reset the animation variables
  const resetAnimation = () => {
    time = Math.PI / 2;
    progress = 0;
  };

  useEffect(() => {
    // Movement animation for card_movement
    const cardMovement = document.querySelector(".card_movement") as HTMLElement;
    const container = document.querySelector(".container") as HTMLElement;
    const info = document.querySelector(".info") as HTMLElement;
    const card_background = document.querySelector(".card_background") as HTMLElement;
    const card_photo = document.querySelector(".card_photo") as HTMLElement;

    //Moving animation Event
    container?.addEventListener("mousemove", (e) => {
      let rect = container.getBoundingClientRect();
      let xAxis = (e.clientX - rect.left - cardMovement.clientWidth / 2) / 20;
      let yAxis = (e.clientY - rect.top - cardMovement.clientHeight / 2) / 20;
      cardMovement.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });

    //Animate In
    container.addEventListener("mouseenter", (e) => {
      cardMovement.style.transition = "none";
      //Popout
      info.style.transform = "translateZ(75px)";
      card_background.style.transform = "translateZ(25px)";
      card_photo.style.transform = "translateZ(70px)";
    });
    //Animate Out
    container.addEventListener("mouseleave", (e) => {
      cardMovement.style.transition = "all 0.5s ease";
      cardMovement.style.transform = `rotateY(0deg) rotateX(0deg)`;
      //Popback
      info.style.transform = "translateZ(0px)";
      card_background.style.transform = "translateZ(0px)";
      card_photo.style.transform = "translateZ(0px)";
    });
  }, []);

  return (
    <div>
      <div className="min-h-screen flex flex-col overflow-hidden bg-neutral-50">
        <TopPage />
        <div className="flex items-center justify-center p-8 mt-24">

          <div className="max-w-screen-2xl">
            <div className={"p-5"}>
              <div className={"flex flex-col"}>
                <div className={"flex flex-wrap mt-14"}>
                  <div className={"md:w-1/2"}>
                    <motion.div className='slide-out-element'
                      initial={{ y: "-100px", opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: "-100px", opacity: 0 }}
                      transition={{ duration: 1 }}>
                      {/* <p className={"text-justify text-base leading-7"}>
                                                Hi, my name is Jaoudat, a passionate and motivated UX/UI designer and Front-End developer.
                                                I am specialized in creating attractive and intuitive designs for websites and
                                                and mobile applications. I have a solid experience in user interface design and development,
                                                and I love working in a team to implement designs that deliver an exceptional experience
                                                for users.
                                            </p> */}
                      <p className={"text-justify text-base leading-7"}>
                        Salut !
                        Je suis Jaoudat, un développeur Front-End et Ux/Ui Designer passionné et motivé.
                        Je te souhaite une bienvenue chaleureuse sur mon site web.<br />
                        Je vais t'expliquer brievement ce que tu peux trouver dessus.<br />
                        Ce site web est un portfolio qui regroupe mes projets de développement et de design.<br /><br />
                        MAIS PAS QUE !<br /><br />
                        Tu vas aussi y retrouver beaucoup d'element caché ici et la, car ce site est aussi un peu
                        un terrain de jeu pour moi. Cest une sorte de bac à sable pour tester des nouvelles choses.
                        Ce sont surtout des elements graphiques et des animations.<br />
                        A termes, je souhaite que ce site serve également de Hub pour mes projets Webs professionnels
                        (lorsque ceux-ci sont disponible en fonction des clients) mais aussi personnels.<br />
                        J'espère que tu vas apprécier ta visite, et que tu auras le temps de repérer toutes les
                        subtilités
                      </p>
                      {/* <svg fill="none" preserveAspectRatio='xMidYMax meet'>
                        <path className={styles.path} strokeWidth="3" stroke="black" strokeLinecap="round" d="M1.5 48.0006C10.3333 32.8339 34.7 2.40059 61.5 2.00059C88.3 1.60059 105.5 28 118 45.0006C130.5 62.0012 216.94 98.0712 195 74.5006C186.385 65.2455 190.636 56.7575 215.5 45.0006C273.038 17.7942 107.302 19.9522 99.5 64.5C92.1645 106.383 149.5 109 140.5 107C131.5 105 113.3 87.8 130.5 95C152 104 157.5 106 157.5 109C157.5 112 146.5 116 130.5 122C117.7 126.8 125.167 121 130.5 117.5L140.5 111" />
                      </svg> */}
                      <span className={"text-justify text-base leading-7 mt-5 flex flex-wrap items-center"}>
                        Tu peux jeter un coup d'oeil à mon CV ici :
                        <a href='/documents/Cv%20Jaoudat%20SABALBAL%20Designer%20Ux%20Ui%20Dev%20Front.pdf'
                          target="_blank" rel="noopener noreferrer">
                          <div className={"ml-2 text-blue-600 hover:underline"}>
                            Cv Sabalbal Jaoudat
                          </div>
                        </a>
                      </span>
                    </motion.div>
                  </div>
                  <div className={"flex justify-center mx-auto mt-14 md:my-auto"}>
                    <motion.div className='slide-out-element'
                      initial={{ y: "-100px", opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: "-100px", opacity: 0 }}
                      transition={{ duration: 1 }}>
                      <div className={`${styles.container} container`}>
                        <div className={`${styles.card_movement} card_movement`}>
                          <div className={`${styles.card_background} card_background`}>
                            <div className={""}>
                              <Image className="h-48 w-48 rounded-md" src={card_background} alt='' />
                            </div>
                          </div>
                          <div className={`${styles.card_photo} card_photo`}>
                            <div className="">
                              <Image className="w-32 rounded-md" src={card_photo} alt='' />
                            </div>
                          </div>
                          <div className={`${styles.info} info pt-5`}>
                            <h1 className='text-xl'>
                              SABALBAL Jaoudat
                            </h1>
                            <h1 className='text-sm'>
                              Ingénieur Front-End
                            </h1>
                          </div>
                        </div>
                      </div>
                      {/* <Image src={photo}
                        className={`${isZoomed ? "styles.zoomed" : "styles.not_zoomed"} ${styles.not_zoomed}`} alt="" onClick={() => setIsZoomed(!isZoomed)} /> */}
                      {/* Changer ici les "" */}
                    </motion.div>
                  </div>
                  <motion.div className='slide-out-element'
                    initial={{ y: "-100px", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: "-100px", opacity: 0 }}
                    transition={{ duration: 1 }}>
                    <div className="relative w-full max-w-[1030px] h-5 mb-10 mt-10">
                      <div
                        onMouseEnter={() => {
                          manageMouseEnter();
                        }}
                        onMouseMove={(e) => {
                          manageMouseMove(e);
                        }}
                        onMouseLeave={() => {
                          manageMouseLeave();
                        }}
                        className="relative z-10 h-10 w-full top-[-40px]"
                      ></div>
                      <svg className="absolute w-full h-[500px] top-[-250px]">
                        <path
                          ref={path}
                          className="stroke-current text-black stroke-[1px] fill-none"
                        ></path>
                      </svg>
                    </div>
                    <Skill />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div >
      </div >
    </div >
  )
}

export default About