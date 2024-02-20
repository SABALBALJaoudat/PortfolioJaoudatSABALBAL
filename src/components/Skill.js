import React, { useEffect, useRef, useState } from 'react';
import { BsDownload } from "react-icons/bs";
import Image from "next/image";
import styles from '../styles/skills.module.scss'
import cards1 from "../image/Ogoxe Logo 1.png";

function Skill() {

    const images = [
        [cards1, "React"],
        [cards1, "Angular"],
        [cards1, "VueJs"],
        [cards1, "Typescript"],
        [cards1, "Python"],
        [cards1, "Figma"],
    ]

    const skillsContainerRef = useRef(null);

    useEffect(() => {
        // S'assurer que le conteneur existe
        if (skillsContainerRef.current) {
            const handleMouseMove = (e) => {
                // Utiliser querySelectorAll pour plus de flexibilité par rapport à getElementsByClassName
                // const skills = skillsContainerRef.current.querySelectorAll('.skill');
                const skills = skillsContainerRef.current.children;
                console.log(skills);

                for (const skill of skills) {
                    const rect = skill.getBoundingClientRect(),
                        x = e.clientX - rect.left,
                        y = e.clientY - rect.top;

                    console.log(x, y);
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
    );
}

export default Skill;