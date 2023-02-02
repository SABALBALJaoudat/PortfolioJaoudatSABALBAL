import React from 'react';
import {BsFillCircleFill} from "react-icons/bs";
import Link from "next/link";


function TopPage() {
    return (
        <div className="w-full sticky top-0 z-30 bg-gray-100 bg-opacity-90 mb-10">
            <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet"/>

            {/*<nav className="py-10 flex justify-between">*/}
            <nav className="flex justify-between
            py-8 px-5">
                <h1 className="text-2xl font-semibold font-poppins">
                    Jaoudat Portfolio
                </h1>
                <ul className="flex items-center">
                    <li><BsFillCircleFill className="cursor-pointer
                    text-2xl
                    mx-2"/></li>
                    <li><Link className="bg-gradient-to-r from-amber-800 to-amber-700
                    text-amber-50
                    px-3 py-2 mx-2
                    rounded-md" href="/">
                        Resume
                    </Link></li>
                    {/*<li><Link className={"bg-gradient-to-r from-amber-800 to-amber-700 text-amber-50 px-3 py-2 " +*/}
                    {/*    "rounded-md mx-2"} href="/Contact">Contact</Link></li>*/}
                </ul>
            </nav>
        </div>
    );
}

export default TopPage;