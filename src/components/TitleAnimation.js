import React, {useEffect} from 'react';
import gsap from "gsap";
import styles from '../styles/TitleAnimation.module.css'
import {BsChevronDoubleDown} from "react-icons/bs";
import {useTheme} from "next-themes";


function TitleAnimation() {

    const tl = gsap.timeline({
        id: 'Timeline',
        repeat: 0
    });
// GSDevTools.create({
//     animation: tl
// });

    let colors = ['#F2F2F2', '#5CB8E4', '#fca5a5'];

    const {systemTheme , theme} = useTheme ();

    const currentTheme = theme === "system" ? systemTheme : theme ;
    if(currentTheme ==="dark"){
        colors = ['#fca5a5', '#5CB8E4', '#F2F2F2'];
    }

    function tween (node) {
        let path = node;
        const delay = Math.random() * 1;
        const length = path.getTotalLength();
        colors.forEach((color, index) => {
            if (index !== 0) {
                path = path.cloneNode();
                node.parentNode.appendChild(path);
            }
            path.setAttribute('stroke', color);
            tl.set(path, {
                strokeDasharray: length + 0.5,
                strokeDashoffset: length + 0.6,
                autoRound: false
            }, 0);
            tl.to(path, {
                strokeDashoffset: 0,
                autoRound: false,
                duration: 1.2,
                ease: 'power3.out'
            }, index * 0.25 + delay);
        });
    }


    useEffect(() => {
        document.querySelectorAll('.motion path, .motion line').forEach(p => tween(p));
    }, [])

    return (
        <div className="flex flex-col items-center h-screen w-full">
            <svg className="motion" viewBox="-3 0 424 158" height="auto" width="60%">
                <g id="Calque_1-2">
                    <path
                        d="M38.7 8v45.1c0 6.7-1.6 12-4.9 16C30.5 73 25.7 75 19.3 75c-4.4 0-8-.9-10.9-2.6-2.9-1.8-4.9-4.3-6.2-7.4C1 61.9.7 58.2 1.3 54"
                        id={styles.st0}/>
                    <path
                        d="M79.4 61c-.5 3.3-1.1 5.4-3.2 7.6-2.1 2.1-4.6 3.7-7.6 4.8-2.9 1.1-5.9 1.6-9 1.6-3.3 0-6.2-.5-8.6-1.4-2.4-1-4.2-2.4-5.5-4.2-1.3-1.8-1.9-4-1.9-6.6 0-3.7 1.2-6.7 3.7-8.8 2.5-2.1 6.1-3.6 10.7-4.5l21.7-4.2M43.3 35.2c1.5-4.1 3.9-7.2 7.2-9.2s7.3-3 12-3c3.7 0 6.9.7 9.5 2.1 2.6 1.3 4.6 3.3 5.9 5.9 1.4 2.6 2.1 5.7 2.1 9.4L79.4 61h0v4.6c0 2.6.4 4.6 1.1 5.9.8 1.3 1.8 2.1 2.9 2.6s2.2.7 3.2.7c1.5 0 2.7-.3 3.6-.8"
                        id={styles.st0}/>
                    <path
                        d="M118.7 23c4.6 0 8.6 1 12.1 3.1s6.3 5.1 8.2 9c2 3.9 3 8.5 3 13.9s-1 10.1-3 14c-1.9 3.9-4.7 6.8-8.2 8.9s-7.5 3.1-12.1 3.1-8.7-1-12.2-3.1-6.2-5-8.2-8.9-3-8.6-3-14 1-10 3-13.9 4.7-6.9 8.2-9c3.5-2 7.6-3.1 12.2-3.1h0"
                        id={styles.st0}/>
                    <path
                        d="M188.3 24v50m0-13.3c-2.2 8.1-10.2 13.7-18.5 14.2-5.6.5-12.1-.5-15.9-5.1-3.6-4-4.2-9.5-4-14.6V24"
                        id={styles.st0}/>
                    <path
                        d="M236.7 58.1c-1.1 7.1-6.1 13.7-13.2 15.8-8.8 2.7-19.5.4-25.1-7.3-5.2-6.9-5.8-16.1-4.5-24.4 1.1-7.6 6-14.9 13.4-17.7 7.3-2.7 16.4-2.2 22.4 3.1 3.3 3.3 5.9 7.4 6.9 12m.1 34.4V1"
                        id={styles.st0}/>
                    <path
                        d="M277.4 61c-.5 3.3-1.1 5.4-3.2 7.6-2.1 2.1-4.6 3.7-7.6 4.8-2.9 1.1-5.9 1.6-9 1.6-3.3 0-6.2-.5-8.6-1.4-2.4-1-4.2-2.4-5.5-4.2-1.3-1.8-1.9-4-1.9-6.6 0-3.7 1.2-6.7 3.7-8.8 2.5-2.1 6.1-3.6 10.7-4.5l21.7-4.2m-36.4-10.1c1.5-4.1 3.9-7.2 7.2-9.2 3.3-2 7.3-3 12-3 3.7 0 6.9.7 9.5 2.1 2.6 1.3 4.6 3.3 5.9 5.9 1.4 2.6 2.1 5.7 2.1 9.4l-.6 20.6h0v4.6c0 2.6.4 4.6 1.1 5.9.8 1.3 1.8 2.1 2.9 2.6s2.2.7 3.2.7c1.5 0 2.7-.3 3.6-.8"
                        id={styles.st0}/>
                    <path
                        d="M316.8 73.9c-1.7.7-3.5 1.1-5.5 1.1-2.7 0-4.9-.5-6.7-1.5-1.8-1.1-3.1-2.6-4-4.6-.9-2.1-1.3-4.6-1.3-7.5V11m-10 13.7h30.9"
                        id={styles.st0}/>
                    <path
                        d="M90.2 156V90c7.7 0 15.3-.1 23 .1 6.9.3 14.4 3.1 17.8 9.6 2.8 5.4 2.8 12.3 0 17.7-3.5 6.5-11.2 9.2-18.3 9.5-7.5.1-15 0-22.5.1"
                        id={styles.st0}/>
                    <path
                        d="M161.6 105c4.6 0 8.6 1 12.1 3.1s6.3 5.1 8.2 9c2 3.9 3 8.5 3 13.9s-1 10.1-3 14c-1.9 3.9-4.7 6.8-8.2 8.9-3.5 2.1-7.5 3.1-12.1 3.1s-8.7-1-12.2-3.1-6.2-5-8.2-8.9-3-8.6-3-14 1-10 3-13.9 4.7-6.9 8.2-9c3.5-2.1 7.6-3.1 12.2-3.1h0"
                        id={styles.st0}/>
                    <path d="M195 106v50m0-37c1.6-5.6 5.5-11 11.1-13.1 3.7-1.2 8.2-1.5 11.6.8.3.2.6.5.8.8"
                          id={styles.st0}/>
                    <path
                        d="M247.1 155.9c-1.7.7-3.5 1.1-5.5 1.1-2.7 0-4.9-.5-6.7-1.5-1.8-1.1-3.1-2.6-4-4.6-.9-2.1-1.3-4.6-1.3-7.5V93m-10 13.6h30.9"
                        id={styles.st0}/>
                    <path
                        d="M251.7 106.6h30.2M261.7 156V97.7c0-2.4.3-4.5.9-6.4s1.5-3.4 2.6-4.7c1.2-1.3 2.6-2.3 4.2-3 1.7-.7 3.5-1.1 5.6-1.1 1.9 0 3.5.3 4.7.9 1.2.5 2.2 1.3 3 2.2"
                        id={styles.st0}/>
                    <path
                        d="M311.2 105c4.6 0 8.6 1 12.1 3.1s6.3 5.1 8.2 9c2 3.9 3 8.5 3 13.9s-1 10.1-3 14c-1.9 3.9-4.7 6.8-8.2 8.9-3.5 2.1-7.5 3.1-12.1 3.1s-8.7-1-12.2-3.1-6.2-5-8.2-8.9-3-8.6-3-14 1-10 3-13.9 4.7-6.9 8.2-9c3.5-2.1 7.6-3.1 12.2-3.1h0"
                        id={styles.st0}/>
                    <path d="M357.3 155.8c-.7.3-1.5.6-2.4.8-.9.3-2.1.4-3.4.4-2.9 0-5.2-.9-6.7-2.8s-2.2-4.8-2.2-8.9V83"
                          id={styles.st0}/>
                    <path d="M365.8 93.4v1m0 11.6v50" id={styles.st0}/>
                    <path
                        d="M394.3 105c4.6 0 8.6 1 12.1 3.1s6.3 5.1 8.2 9c2 3.9 3 8.5 3 13.9s-1 10.1-3 14c-1.9 3.9-4.7 6.8-8.2 8.9-3.5 2.1-7.5 3.1-12.1 3.1s-8.7-1-12.2-3.1-6.2-5-8.2-8.9-3-8.6-3-14 1-10 3-13.9 4.7-6.9 8.2-9c3.5-2.1 7.6-3.1 12.2-3.1h0"
                        id={styles.st0}/>
                </g>
            </svg>
            <BsChevronDoubleDown className="w-10 h-10"/>
        </div>
    );
}

export default TitleAnimation;