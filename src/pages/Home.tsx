import React from 'react';
import Image from "next/image";
import photo from "@/image/Photo de profil.png";
import workIllustration from "@/image/StorySet Work.svg";
import Cards from "@/components/Cards";
import Link from "next/link";
import {BsDownload} from "react-icons/bs";

function Home() {
    return (
        <div className="flex items-center justify-center">
            <div className="max-w-5xl">
                <div className={"p-5"}>
                    <div className={"flex flex-col"}>
                        <div className={"text-center mt-28"}>
                            <h2 className={"text-5xl font-medium"}>
                                Jaoudat SABALBAL
                            </h2>
                            <h3 className={"text-2xl font-medium py-4"}>
                                Ux-Ui Designer // Front-End Developer
                            </h3>
                        </div>
                        <div className={"flex flex-wrap mt-24"}>
                            <p className={"sm:w-4/6 text-justify text-base leading-7"}>
                                Hi, my name is Jaoudat, a passionate and motivated UX/UI designer and Front-End developer.
                                I am specialized in creating attractive and intuitive designs for websites and
                                and mobile applications. I have a solid experience in user interface design and development,
                                and I love working in a team to implement designs that deliver an exceptional experience
                                for users.<br/>
                                <br/>
                                You can have a look to my CV with all my projects :
                                <a href='/documents/Cv%20Jaoudat%20SABALBAL%20Designer%20Ux%20Ui%20Dev%20Front.pdf' target="_blank" rel="noopener noreferrer">
                                    <BsDownload className="h-6 w-6"/>
                                </a>
                                <br/>
                                Or you can find my complete portfolio here :
                                <Link target="_blank" className={"ml-2 text-blue-600 dark:text-blue-500 hover:underline"}
                                      href={"https://www.figma.com/proto/lizKbzPM4zMi4izsgn4nKL/Portfolio?page-id=701%3A193&node-id=715%3A341&viewport=569%2C939%2C0.28&scaling=scale-down&starting-point-node-id=715%3A341"}>
                                    portfolio Figma
                                </Link>
                            </p>
                            <div className={"flex justify-center mx-auto mt-14 md:mt-4"}>
                                <Image src={photo}
                                       className="w-44 h-44 md:w-52 md:h-52" alt=""/>
                            </div>
                        </div>
                    </div>


                    <div className="grid grid-rows-1 grid-cols-2 md:grid-cols-3 gap-4 py-5 mt-24">
                        <h2 className={"row-start-1 col-start-1 text-3xl font-semibold"}>
                            Project
                        </h2>
                        <div className={"row-start-1 col-start-2 md:col-start-3 w-full h-auto"}>
                            {/*<a href="https://storyset.com/user" className={"text-center text-xs mx-auto"}>User illustrations by Storyset</a>*/}
                            <Image src={workIllustration}
                                   className="" alt="User illustrations by Storyset"/>
                            <div className={"flex items-center justify-center"}>
                                <a href="https://storyset.com/user" className={"text-xs"}>User illustrations by Storyset</a>
                            </div>
                        </div>
                        <div className={"row-start-1 col-start-1 md:col-end-3 relative mt-20"}>
                            <Cards/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Home;