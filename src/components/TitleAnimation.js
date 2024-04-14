import React, {useEffect} from 'react';
import gsap from "gsap";
import styles from '../styles/TitleAnimation.module.css';
import {useTheme} from "next-themes";



let firstReload = 0;

function TitleAnimation() {
    const tl = gsap.timeline({
        id: 'Timeline',
        repeat: 0
    });

    let colors = ['#F8E3EA', '#5CB8E4', '#0F0F0F'];

    const {systemTheme , theme} = useTheme ();

    const currentTheme = theme === "system" ? systemTheme : theme ;
    if(currentTheme ==="dark"){
        colors = ['#fca5a5', '#5CB8E4', '#F8E3EA'];
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
                strokeDasharray: length + 0.8,
                strokeDashoffset: length + 0.7,
                autoRound: false
            }, 0);
            tl.to(path, {
                strokeDashoffset: 0,
                autoRound: false,
                duration: 4,
                ease: 'power3.out'
            }, index * 0.25 + delay);
        });
    }

    useEffect(() => {
        // if (firstReload < 3){
        //     document.querySelectorAll('.motion path, .motion line').forEach(p => tween(p));
        //     firstReload++;
        // }else{
        //     if (currentTheme ==="dark"){
        //         document.querySelectorAll('.motion path, .motion line').forEach(p => p.setAttribute('stroke', '#F8E3EA'));
        //     }else{
        //         document.querySelectorAll('.motion path, .motion line').forEach(p => p.setAttribute('stroke', '#0F0F0F'));
        //     }
        // }
        document.querySelectorAll('.motion path, .motion line').forEach(p => tween(p));
    }, [currentTheme])

    return (
        <div className="">
            <svg className="motion" viewBox="-3 0 900 200" height="150px" width="100%">
                <g>
                    <path id={styles.st0}
                        d="M40.6 34v45.1c0 6.67-1.63 12-4.9 16-3.27 3.93-8.1 5.9-14.5 5.9-4.4 0-8.03-.87-10.9-2.6-2.87-1.8-4.93-4.27-6.2-7.4-1.2-3.13-1.5-6.8-.9-11"/>
                    <path id={styles.st0} d="M53.13 76.6h33.5M43.5 100c0-.38 26.4-64.2 26.4-64.2L96.3 100"/>
                    <path id={styles.st0}
                        d="M132 33c9.67-.27 19.58 4.36 24.67 12.74 5.78 9.35 6.44 21.04 4.39 31.6-1.92 9.45-8.19 18.4-17.5 21.72-8.75 3.05-18.97 2.68-27.13-1.91-8.67-4.95-13.44-14.77-14.25-24.47-1.03-10.72.49-22.68 8.13-30.87 5.5-5.98 13.65-8.94 21.69-8.81 0 0 0 0 0 0"/>
                    <path id={styles.st0}
                        d="M220.22 34v42.5c0 7.87-2.2 13.93-6.6 18.2-4.4 4.2-10.5 6.3-18.3 6.3-7.8 0-13.9-2.1-18.3-6.3-4.4-4.27-6.6-10.33-6.6-18.2V34"/>
                    <path id={styles.st0}
                        d="M250.42 34c10.73 0 18.83 2.7 24.3 8.1 5.47 5.4 8.2 13.37 8.2 23.9 0 11.13-2.73 19.6-8.2 25.4-5.47 5.73-13.57 8.6-24.3 8.6h-20.3V34h20.3"/>
                    <path id={styles.st0} d="M295.45 76.6h33.5M285.82 100c0-.38 26.4-64.2 26.4-64.2l26.4 64.2"/>
                    <path id={styles.st0} d="M365.82 100V34.15m-26.1-.15h52.2" />
                    <path id={styles.st0}
                          d="M429.453 83.4c.73 4 2.33 7.3 4.8 9.9 2.47 2.6 5.57 4.53 9.3 5.8 3.8 1.27 8 1.9 12.6 1.9 4.73 0 8.87-.73 12.4-2.2 3.6-1.47 6.4-3.53 8.4-6.2 2.07-2.67 3.1-5.77 3.1-9.3 0-4.07-1.4-7.3-4.2-9.7-2.73-2.4-7.25-5.11-13.9-5.6l-12.2-.9c-4.49-.33-7.93-2.1-10.6-3.5-2.67-1.47-4.63-3.23-5.9-5.3-1.2-2.07-1.8-4.57-1.8-7.5 0-3.13.93-6.03 2.8-8.7 1.87-2.73 4.53-4.93 8-6.6 3.47-1.67 7.63-2.5 12.5-2.5 6.27 0 11.47 1.23 15.6 3.7 4.13 2.4 6.97 6.27 8.5 11.6"/>
                    <path id={styles.st0} d="M492.583 76.6h33.5m-43.13 23.4c0-.38 26.4-64.2 26.4-64.2l26.4 64.2"/>
                    <path id={styles.st0}
                          d="M575.853 66.6h-29.96m-.24 33.4V34c8.54.04 17.08-.08 25.62.07 5.98.25 12.74 2.25 15.79 7.86 2.53 4.93 2.65 11.06.57 16.18-1.97 4.8-6.87 7.6-11.78 8.49 2.48.57 5.35 1.17 7.66 2.6 4.54 2.47 7.32 7.47 7.4 12.6.48 5.59-1.65 11.7-6.66 14.67-6.7 4.18-14.83 3.47-22.4 3.53h-16.2s0 0 0 0"/>
                    <path id={styles.st0} d="M603.513 76.6h33.5m-43.13 23.4c0-.38 26.4-64.2 26.4-64.2l26.4 64.2"/>
                    <path id={styles.st0} d="M699.783 100h-43.2V34"/>
                    <path id={styles.st0}
                          d="M739.883 66.6h-29.96m-.24 33.4V34c8.54.04 17.08-.08 25.62.07 5.98.25 12.74 2.25 15.79 7.86 2.53 4.93 2.65 11.06.57 16.18-1.97 4.8-6.87 7.6-11.78 8.49 2.48.57 5.35 1.17 7.66 2.6 4.54 2.47 7.32 7.47 7.4 12.6.48 5.59-1.65 11.7-6.66 14.67-6.7 4.18-14.83 3.47-22.4 3.53h-16.2s0 0 0 0"/>
                    <path id={styles.st0} d="M767.543 76.6h33.5m-43.13 23.4c0-.38 26.4-64.2 26.4-64.2l26.4 64.2"/>
                    <path id={styles.st0} d="M863.813 100h-43.2V34"/>
                </g>
            </svg>
        </div>
    );
}

export default TitleAnimation;