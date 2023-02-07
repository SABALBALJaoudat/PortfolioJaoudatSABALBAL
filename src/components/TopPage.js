import React from 'react';
import {BsFillMoonFill, BsSunFill} from "react-icons/bs";
import Link from "next/link";
import {useTheme} from "next-themes";

// import{SunIcon ,MoonIcon} from "@heroicons/react/solid";
import {useState, useEffect} from "react";


function TopPage() {

    const {systemTheme , theme, setTheme} = useTheme ();

    const renderThemeChanger= () => {

        const currentTheme = theme === "system" ? systemTheme : theme ;

        if(currentTheme ==="dark"){
            return (
                <BsSunFill className="w-10 h-10 text-yellow-500 " role="button" onClick={() => setTheme('light')} />
            )
        }

        else {
            return (
                <BsFillMoonFill className="w-10 h-10 text-yellow-500 " role="button" onClick={() => setTheme('dark')} />
            )
        }
    };

    return (
        <div className="w-full sticky top-0 z-30 bg-gray-100 dark:bg-zinc-800 bg-opacity-90 dark:opacity-90 mb-10">
            <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet"/>

            {/*<nav className="py-10 flex justify-between">*/}
            <nav className="flex justify-between
            py-1 px-5">
                <h1 className="flex items-center text-2xl font-semibold font-poppins">
                    <Link href="/">Jaoudat Portfolio</Link>
                </h1>
                <ul className="flex items-center">
                    <li>
                        <div className="container  px-4 sm:px-6 py-4 flex justify-between items-center">

                            {renderThemeChanger()}

                        </div>
                    </li>
                    {/*<li><Link className="bg-gradient-to-r from-amber-800 to-amber-700*/}
                    {/*text-amber-50*/}
                    {/*px-3 py-2 mx-2*/}
                    {/*rounded-md" href="/">*/}
                    {/*    Resume*/}
                    {/*</Link></li>*/}
                    {/*<li><Link className={"bg-gradient-to-r from-amber-800 to-amber-700 text-amber-50 px-3 py-2 " +*/}
                    {/*    "rounded-md mx-2"} href="/Contact">Contact</Link></li>*/}
                </ul>
            </nav>
        </div>
    );
}

export default TopPage;