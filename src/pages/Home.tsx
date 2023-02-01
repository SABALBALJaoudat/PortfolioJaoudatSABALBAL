import React from 'react';
import {BsFillCircleFill} from "react-icons/bs";
import Image from "next/image";
import photo from "@/image/Photo de profil.png";
import Cards from "@/components/Cards";
import TopPage from "@/components/TopPage";

function Home() {
    return (
        <div className="bg-gray-100 min-h-screen">
            <TopPage/>
            <div className={"px-5"}>
                <div className={"text-center p-5"}>
                    <h2 className={"text-5xl text-amber-800 font-medium py-3"}>
                        Jaoudat SABALBAL
                    </h2>
                    <h3 className={"text-2xl font-medium py-2"}>
                        Ux Ui Designer // Front End Developer
                    </h3>
                </div>
                <div className={"flex flex-wrap my-7"}>
                    <p className={"md:w-9/12 text-justify text-base leading-7"}>
                        Hi, my name is Jaoudat, a passionate and motivated UX/UI designer and Front-End developer.
                        I am specialized in creating attractive and intuitive designs for websites and
                        and mobile applications. I have a solid experience in user interface design and development,
                        and I love working in a team to implement designs that deliver an exceptional experience
                        for users.
                    </p>
                    <div className={"flex justify-center mx-auto"}>
                        <Image src={photo} className="w-44 h-44" alt=""/>
                    </div>
                </div>

                <h2 className={"text-2xl font-semibold py-5"}>
                    Project
                </h2>

                <Cards/>
            </div>
        </div>
    );
}

export default Home;