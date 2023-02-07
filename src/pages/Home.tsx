import React from 'react';
import Image from "next/image";
import photo from "@/image/Photo de profil.png";
import Cards from "@/components/Cards";
import Link from "next/link";

function Home() {
    return (
        <div className="flex items-center justify-center">
            <div className="max-w-5xl">
                <div className={"p-5"}>
                    <div className={"text-center"}>
                        <h2 className={"text-5xl text-amber-800 font-medium"}>
                            Jaoudat SABALBAL
                        </h2>
                        <h3 className={"text-2xl font-medium py-4"}>
                            Ux Ui Designer // Front End Developer
                        </h3>
                    </div>
                    <div className={"flex flex-wrap my-7"}>
                        <p className={"sm:w-4/6 text-justify text-base leading-7"}>
                            Hi, my name is Jaoudat, a passionate and motivated UX/UI designer and Front-End developer.
                            I am specialized in creating attractive and intuitive designs for websites and
                            and mobile applications. I have a solid experience in user interface design and development,
                            and I love working in a team to implement designs that deliver an exceptional experience
                            for users.<br/>
                            <br/>
                            Vous pouvez trouver ici mon portfolio complet :
                            <Link target="_blank" className={"ml-2 text-blue-600 dark:text-blue-500 hover:underline"}
                                  href={"https://www.figma.com/proto/lizKbzPM4zMi4izsgn4nKL/Portfolio?page-id=701%3A193&node-id=715%3A341&viewport=569%2C939%2C0.28&scaling=scale-down&starting-point-node-id=715%3A341"}>
                                portfolio Figma
                            </Link>
                        </p>
                        <div className={"flex justify-center mx-auto mt-4"}>
                            <Image src={photo}
                                   className="w-44 h-44 md:w-52 md:h-52" alt=""/>
                        </div>
                    </div>

                    <h2 className={"text-2xl font-semibold py-5"}>
                        Project
                    </h2>

                    <Cards/>
                </div>
            </div>
        </div>
    );
}

export default Home;