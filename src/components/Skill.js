import React, { useEffect, useRef, useState } from 'react';
import { BsDownload } from "react-icons/bs";
import Image from "next/image";
import styles from '../styles/skills.module.scss'
import angularLogo from "../image/Logo/Angular Logo.png";
import ReactLogo from "../image/Logo/ReactJs Logo.png";
import NextJsLogo from "../image/Logo/NextJs Logo.png";
import VueJsLogo from "../image/Logo/VueJs Logo.png";
import TypescriptLogo from "../image/Logo/Typescript Logo.png";
import JavaLogo from "../image/Logo/Java Logo.png";
import PythonLogo from "../image/Logo/Python Logo.jpg";
import CLogo from "../image/Logo/C Logo.png";
import FigmaLogo from "../image/Logo/Figma Logo.png";
import JiraLogo from "../image/Logo/Jira Logo.png";
import ConfluenceLogo from "../image/Logo/Confluence Logo.png";

function Skill() {

    const images = [
        [ReactLogo, "ReactJs"],
        [angularLogo, "Angular"],
        [VueJsLogo, "VueJs"],
        [NextJsLogo, "NextJs"],
        [TypescriptLogo, "Typescript"],
        [PythonLogo, "Python"],
        [JavaLogo, "Java"],
        [CLogo, "C"],
        [FigmaLogo, "Figma"],
        [JiraLogo, "Jira"],
        [ConfluenceLogo, "Confluence"],
    ]

    const skillsContainerRef = useRef(null);

    useEffect(() => {
        // S'assurer que le conteneur existe
        if (skillsContainerRef.current) {
            const handleMouseMove = (e) => {
                // Utiliser querySelectorAll pour plus de flexibilité par rapport à getElementsByClassName
                // const skills = skillsContainerRef.current.querySelectorAll('.skill');
                const skills = skillsContainerRef.current.children;

                for (const skill of skills) {
                    const rect = skill.getBoundingClientRect(),
                        x = e.clientX - rect.left,
                        y = e.clientY - rect.top;

                    skill.style.setProperty("--mouse-x", `${x}px`);
                    skill.style.setProperty("--mouse-y", `${y}px`);
                }
            };

            // Ajouter l'événement onmousemove sur le conteneur
            const container = skillsContainerRef.current;
            container.onmousemove = handleMouseMove;

            // Nettoyage : supprimer l'event listener quand le composant est démonté ou re-monté
            return () => container.removeEventListener('mousemove', handleMouseMove);
        }
    }, []); // Le tableau vide assure que l'effet ne s'exécute qu'après le premier montage

    return (
        <div className='flex flex-col'>
            <h2>All my skills</h2>
            <div ref={skillsContainerRef} className={styles.skills}>
                {images.map((image, index) => {
                    return (
                        <div className={styles.skill} key={image[0]}>
                            <div className={styles.skill_content}>
                                <div className={styles.skill_image}>
                                    <Image src={image[0]} data-mdb-ripple="true"
                                        data-mdb-ripple-color="light" alt="" />
                                </div>
                                <div className={styles.skill_info_wrapper}>
                                    <div className={styles.skill_info}>
                                        <div className={styles.skill_info_title}>
                                            {image[1]}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div >
                    );
                })}
            </div >
        </div >
    );
}

export default Skill;