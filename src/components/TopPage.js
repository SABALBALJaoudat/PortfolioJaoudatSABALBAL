import React from 'react';
import {BsFillCircleFill} from "react-icons/bs";
import styles from '@/styles/Home.module.css'
import Link from "next/link";


function TopPage() {
    return (
        <div className="sticky top-0 z-30 bg-red-700 bg-opacity-90">
            <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet"/>

            {/*<nav className="py-10 flex justify-between">*/}
            <nav className="py-10 px-5 flex justify-between">
                <h1 className={"text-2xl font-semibold font-poppins"}>
                    Jaoudat Portfolio
                </h1>
                <ul className={"flex items-center"}>
                    <li><BsFillCircleFill className={"cursor-pointer text-2xl mx-2"}/></li>
                    <li><Link className={"bg-gradient-to-r from-amber-800 to-amber-700  text-amber-50 px-3 py-2 " +
                        "rounded-md mx-2"} href="/Home">Resume</Link></li>
                    {/*<li><Link className={"bg-gradient-to-r from-amber-800 to-amber-700 text-amber-50 px-3 py-2 " +*/}
                    {/*    "rounded-md mx-2"} href="/Contact">Contact</Link></li>*/}
                </ul>
            </nav>
        </div>
    );
}

export default TopPage;