import React from 'react';
import {BsFillMoonFill, BsSunFill} from "react-icons/bs";
import {HiMenu} from "react-icons/hi";
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

    function handleClick() {
        if (document.getElementById("SideMenu").style.width == "50%"){
            // document.getElementById("Logo").style.visibility = "hidden";
            document.getElementById("Navbar").style.visibility = "hidden";
            document.getElementById("SideMenu").style.width="0%";
        }
        else{
            // document.getElementById("Logo").style.visibility = "visible";
            document.getElementById("Navbar").style.visibility = "visible";
            document.getElementById("SideMenu").style.width="50%";
        }
    }

    return (
        // <div className="w-full sticky top-0 z-30 bg-gray-100 dark:bg-zinc-800 bg-opacity-90 dark:opacity-90 mb-10">
        <div className="w-full h-20 lg:h-0 fixed top-0 z-30 bg-gray-100 dark:bg-zinc-800 dark:opacity-90">
            <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet"/>

            <HiMenu className="fixed top-5 right-5 h-10 w-10 z-30" role="button" onClick={handleClick}/>

            <h1 className="fixed top-5 left-5 text-2xl font-semibold font-poppins">
                <Link href="/">Jaoudat Portfolio</Link>
            </h1>

            <div id="SideMenu" className="fixed h-full w-0 top-0 right-0 z-20 bg-red-200 rounded-l-xl" style={{ transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s" }}>
                <div className="h-full flex justify-center items-center">
                    <nav id="Navbar" className="py-1 px-5 invisible">
                        <div className="container px-4 sm:px-6 py-4 flex justify-between items-center">

                            {renderThemeChanger()}

                        </div>
                        <h1 className="text-2xl font-semibold font-poppins">
                            <Link href="/">Ogoxe</Link>
                        </h1>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default TopPage;