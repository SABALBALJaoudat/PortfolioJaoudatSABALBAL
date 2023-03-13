import React from 'react';
import Image from "next/image";
import photo from "@/image/Photo de profil.png";
import workIllustration from "@/image/StorySet Work.svg";
import Cards from "@/components/Cards";
import Link from "next/link";
import IconButton from "@/components/IconButton";
import {BsChevronDoubleDown, BsDownload, BsLinkedin} from "react-icons/bs";
import TitleAnimation from "@/components/TitleAnimation";
import {TypeAnimation} from "react-type-animation";
import {IoMdContact} from "react-icons/io";

function Home() {
    return (
        <div>
            <div className="flex items-center justify-center">

                <div className="max-w-5xl">
                    <div className={"p-5"}>
                        <div className={"flex flex-col"}>
                            <div className={"flex flex-col items-center justify-center h-screen w-full"}>
                                <div className={""}>
                                    <TitleAnimation/>
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
                                <div className={"flex mt-14"}>
                                    <Link target="_blank" href="https://www.linkedin.com/in/jaoudat-sabalbal-214723195/"
                                          passHref={true} className="contents">
                                        <IconButton text={"Linkedin"} color={"bg-blue-600"}>
                                            <BsLinkedin className="h-5 w-5"/>
                                        </IconButton>
                                    </Link>
                                    <a href='/documents/Cv%20Jaoudat%20SABALBAL%20Designer%20Ux%20Ui%20Dev%20Front.pdf' target="_blank" rel="noopener noreferrer">
                                        <IconButton text={"Cv"} color={"bg-gradient-to-tr from-red-700 to-yellow-500"}>
                                            <BsDownload className="h-5 w-5"/>
                                        </IconButton>
                                    </a>
                                    <a href="#contact">
                                        <IconButton text={"Contact"} color={"bg-gradient-to-tr from-red-300 to-sky-400"}>
                                            <IoMdContact className="h-5 w-5"/>
                                        </IconButton>
                                    </a>
                                </div>
                                <BsChevronDoubleDown className="chevronDoubleDown absolute bottom-5 w-8 h-8"/>
                            </div>
                            <div className={"flex flex-wrap mt-14"}>
                                <div className={"md:w-1/2"}>
                                <p className={"text-justify text-base leading-7"}>
                                    Hi, my name is Jaoudat, a passionate and motivated UX/UI designer and Front-End developer.
                                    I am specialized in creating attractive and intuitive designs for websites and
                                    and mobile applications. I have a solid experience in user interface design and development,
                                    and I love working in a team to implement designs that deliver an exceptional experience
                                    for users.
                                </p>
                                <p className={"text-justify text-base leading-7 mt-5 flex flex-wrap items-center"}>
                                    You can have a look to my CV with all my projects :
                                    <a href='/documents/Cv%20Jaoudat%20SABALBAL%20Designer%20Ux%20Ui%20Dev%20Front.pdf'
                                       target="_blank" rel="noopener noreferrer">
                                        <IconButton text={"Cv"} color={"bg-gradient-to-tr from-red-700 to-yellow-500"}>
                                            <BsDownload className="h-5 w-5"/>
                                        </IconButton>
                                    </a>
                                </p>
                                <p className={"text-justify text-base leading-7 mt-5"}>
                                    Or you can find my complete portfolio here :
                                    <Link target="_blank" className={"ml-2 text-blue-600 dark:text-blue-500 hover:underline"}
                                          href={"https://www.figma.com/proto/lizKbzPM4zMi4izsgn4nKL/Portfolio?page-id=701%3A193&node-id=715%3A341&viewport=569%2C939%2C0.28&scaling=scale-down&starting-point-node-id=715%3A341"}>
                                        portfolio Figma
                                    </Link>
                                </p>
                                </div>
                                <div className={"flex justify-center mx-auto mt-14 md:my-auto"}>
                                    <Image src={photo}
                                           className="w-52 h-52 md:w-72 md:h-72" alt=""/>
                                </div>
                            </div>
                        </div>


                        <div className="lg:grid lg:grid-cols-3 lg:gap-4 py-5 mt-24">
                            <h2 id={"project"} className={"row-start-1 col-start-1 text-3xl font-semibold"}>
                                Project
                            </h2>
                            <div className={"hidden lg:block lg:row-start-1 lg:col-start-3 w-full h-auto"}>
                                <Image src={workIllustration}
                                       className="" alt="User illustrations by Storyset"/>
                                <div className={"flex items-center justify-center"}>
                                    <a href="https://storyset.com/user" className={"text-xs"}>User illustrations by Storyset</a>
                                </div>
                            </div>
                            <div className={"lg:row-start-1 lg:col-start-1 lg:col-end-3 relative mt-20"}>
                                <Cards/>
                            </div>
                        </div>

                        <div className="flex flex-col py-5 my-14">
                            <h2 id={"contact"} className={"text-3xl font-semibold mb-10"}>
                                Contact
                            </h2>
                            <div className={"flex flex-wrap items-center py-2"}>
                                <p>To see my Linkedin :</p>
                                <Link target="_blank" href="https://www.linkedin.com/in/jaoudat-sabalbal-214723195/"
                                      passHref={true} className="contents">
                                    <IconButton text={"Linkedin"} color={"bg-blue-600"}>
                                        <BsLinkedin className="h-5 w-5"/>
                                    </IconButton>
                                </Link>
                            </div>
                            <div className={"flex flex-wrap items-center py-2"}>
                                <p>To write me a message :</p>
                                <p className={"mx-2"}>jaoudat.sabalbal@outlook.fr</p>
                            </div>
                            <div className={"flex flex-wrap items-center py-2"}>
                                <p>To hear my voice :</p>
                                <p className={"mx-2"}>06 18 17 64 83</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;