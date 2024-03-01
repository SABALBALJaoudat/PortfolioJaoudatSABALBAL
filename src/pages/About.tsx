import React from 'react'
import IconButton from "@/components/IconButton";
import { BsDownload } from "react-icons/bs";
import Image from "next/image";
import photo from "@/image/Photo de profil.png";
import Link from "next/link";
import TopPage from '@/components/TopPage';
import Skill from '@/components/Skill';
import styles from '../styles/skills.module.css'
import { motion } from 'framer-motion';

function About() {
    return (
        <div>
            <div className="min-h-screen flex flex-col overflow-hidden bg-neutral-50">
                <TopPage />
                <div className="flex items-center justify-center p-8 mt-24">

                    <div className="max-w-5xl">
                        <div className={"p-5"}>
                            <div className={"flex flex-col"}>
                                <div className={"flex flex-wrap mt-14"}>
                                    <div className={"md:w-1/2"}>
                                        <motion.div className='slide-out-element'
                                            initial={{ y: "-100px", opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            exit={{ y: "-100px", opacity: 0 }}
                                            transition={{ duration: 1 }}>
                                            <p className={"text-justify text-base leading-7"}>
                                                Hi, my name is Jaoudat, a passionate and motivated UX/UI designer and Front-End developer.
                                                I am specialized in creating attractive and intuitive designs for websites and
                                                and mobile applications. I have a solid experience in user interface design and development,
                                                and I love working in a team to implement designs that deliver an exceptional experience
                                                for users.
                                            </p>
                                            <div className={"text-justify text-base leading-7 mt-5 flex flex-wrap items-center"}>
                                                You can have a look to my CV with all my projects :
                                                <a href='/documents/Cv%20Jaoudat%20SABALBAL%20Designer%20Ux%20Ui%20Dev%20Front.pdf'
                                                    target="_blank" rel="noopener noreferrer">
                                                    <div className={"m-2 p-2 bg-gradient-to-tr from-red-700 to-yellow-500 text-white rounded-md"}>
                                                        <BsDownload className="h-5 w-5" />
                                                    </div>
                                                </a>
                                            </div>
                                            <p className={"text-justify text-base leading-7 mt-5"}>
                                                Or you can find my complete portfolio here :
                                                <Link target="_blank" className={"ml-2 text-blue-600 dark:text-blue-500 hover:underline"}
                                                    href={"https://www.figma.com/proto/lizKbzPM4zMi4izsgn4nKL/Portfolio?page-id=701%3A193&node-id=715%3A341&viewport=569%2C939%2C0.28&scaling=scale-down&starting-point-node-id=715%3A341"}>
                                                    portfolio Figma
                                                </Link>
                                            </p>
                                        </motion.div>
                                    </div>
                                    <div className={"flex justify-center mx-auto mt-14 md:my-auto"}>
                                        <motion.div className='slide-out-element'
                                            initial={{ y: "-100px", opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            exit={{ y: "-100px", opacity: 0 }}
                                            transition={{ duration: 1 }}>
                                            <Image src={photo}
                                                className="w-52 h-52 md:w-72 md:h-72" alt="" />
                                        </motion.div>
                                    </div>
                                    <motion.div className='slide-out-element'
                                        initial={{ y: "-100px", opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ y: "-100px", opacity: 0 }}
                                        transition={{ duration: 1 }}>
                                        <Skill />
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div>
        </div>
    )
}

export default About