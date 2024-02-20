import React, { useEffect } from 'react';
import styles from '../styles/Home.module.css';
import Image from "next/image";
import cards1 from "../image/Ogoxe Logo 1.png";
import TopPage from "@/components/TopPage";

function Test() {
    //   useEffect(() => {
    //     // S'assurer que le code s'exécute uniquement côté client
    //     if (typeof window !== 'undefined') {
    //       // Fonction pour charger et initialiser particlesJS
    //       const loadAndInitParticles = () => {
    //         if (!window.particlesJS) {
    //           // Création dynamique du script
    //           const script = document.createElement('script');
    //           script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
    //           script.async = true;
    //           script.onload = () => {
    //             // Initialisation de particlesJS après le chargement du script
    //             window.particlesJS('particles-js', particlesConfig);
    //           };
    //           document.body.appendChild(script);
    //         } else {
    //           // Si particlesJS est déjà chargé, l'initialiser directement
    //           window.particlesJS('particles-js', particlesConfig);
    //         }
    //       };

    //       loadAndInitParticles();
    //     }
    //   }, []);

    // Configuration des particules intégrée directement dans le composant
    const particlesConfig = {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: '#ffffff'
            },
            shape: {
                type: 'circle',
                stroke: {
                    width: 0,
                    color: '#000000'
                },
                polygon: {
                    nb_sides: 5
                },
                image: {
                    src: 'img/github.svg',
                    width: 100,
                    height: 100
                }
            },
            opacity: {
                value: 0.5,
                random: false,
                anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 10,
                random: true,
                anim: {
                    enable: false,
                    speed: 80,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 300,
                color: '#ffffff',
                opacity: 0.4,
                width: 2
            },
            move: {
                enable: true,
                speed: 12,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: false,
                    mode: 'repulse'
                },
                onclick: {
                    enable: true,
                    mode: 'push'
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 800,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 800,
                    size: 80,
                    duration: 2,
                    opacity: 0.8,
                    speed: 3
                },
                repulse: {
                    distance: 400,
                    duration: 0.4
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            }
        },
        retina_detect: true
    };

    return (
        <div className={styles.container}>
            <TopPage />
            {/* <div id="particles-js" className={styles.particles}></div> */}
            <div class="card">
                <Image src={cards1} data-mdb-ripple="true" data-mdb-ripple-color="light" alt="" />
                <div>
                    <h2>Kaye Morris</h2>
                    <h3>UX Developer</h3>
                    <p>
                        Empowering users through captivating interfaces, turning ideas into
                        pixel-perfect realities.
                    </p>
                    <button>Follow Account</button>
                </div>
            </div>
        </div>
    );
}

export default Test;
