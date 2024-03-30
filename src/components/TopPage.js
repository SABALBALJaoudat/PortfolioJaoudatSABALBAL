import React from 'react';
import { BsFillMoonFill, BsSunFill } from "react-icons/bs";
import { MdOutlineWorkOutline, MdOutlineHome, MdOutlinePhonelink } from "react-icons/md";
import { TbCookieMan } from "react-icons/tb";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { useRouter } from 'next/router'


function TopPage() {

    const { systemTheme, theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, [])

    const router = useRouter()

    const renderThemeChanger = () => {
        if (!mounted) return null;

        const currentTheme = theme === "system" ? systemTheme : theme;

        if (currentTheme === "dark") {
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
        if (document.getElementById("SideMenu").style.width == "40%") {
            document.getElementById("Navbar").style.visibility = "hidden";
            document.getElementById("SideMenu").style.width = "0%";
        }
        else {
            document.getElementById("Navbar").style.visibility = "visible";
            document.getElementById("SideMenu").style.width = "40%";
        }
    }

    function returnHome() {
        if (router.pathname === "/")
            router.reload(window.location.pathname);
        else
            router.push('/').then(() => window.location.reload());
    }

    return (
        <div className="w-full h-20 lg:h-0 absolute top-0 z-30">
            <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet" />

            {/* <HiMenu className="fixed top-5 right-5 h-10 w-10 z-30" role="button" onClick={handleClick}/> */}

            {/* <h1 className="fixed top-5 left-5 text-2xl font-semibold font-poppins"
                role={"button"} onClick={returnHome}>
                Jaoudat Portfolio
            </h1> */}

            <div className="absolute top-5 z-20 pb-1 pt-8 w-full flex items-center justify-center gap-x-2 lg:px-48 md:px-8 px-4 astro-nav">
                <Link href="/" className="transition inline-flex relative justify-center items-center rounded-lg py-2 pl-2 pr-3 gap-2 text-md font-medium 
                    text-zinc-500 overflow-hidden dark:text-zinc-400 hover:text-zinc-900 hover:dark:text-zinc-100 ring-2 hover:ring-zinc-400 
                    hover:dark:ring-zinc-600 before:content-[''] before:absolute before:w-full before:aspect-square before:rounded-full before:transition-transform 
                    before:duration-200 before:transform before:scale-50 before:translate-y-full before:opacity-0 before:hover:opacity-100 before:hover:scale-110 
                    before:hover:translate-y-0 before:hover:bg-black/5 before:hover:dark:bg-white/5 isActive ring-zinc-200 dark:ring-zinc-800 
                    bg-zinc-100 dark:bg-zinc-900">
                    <MdOutlineHome />
                    Home
                </Link>
                <Link href="/Works" className="transition inline-flex relative justify-center items-center rounded-lg py-2 pl-2 pr-3 gap-2 text-md font-medium 
                    text-zinc-500 overflow-hidden dark:text-zinc-400 hover:text-zinc-900 hover:dark:text-zinc-100 ring-2 hover:ring-zinc-400 
                    hover:dark:ring-zinc-600 before:content-[''] before:absolute before:w-full before:aspect-square before:rounded-full before:transition-transform 
                    before:duration-200 before:transform before:scale-50 before:translate-y-full before:opacity-0 before:hover:opacity-100 before:hover:scale-110 
                    before:hover:translate-y-0 before:hover:bg-black/5 before:hover:dark:bg-white/5 isActive ring-zinc-200 dark:ring-zinc-800 
                    bg-zinc-100 dark:bg-zinc-900">
                    <MdOutlineWorkOutline />
                    Works
                </Link>
                <Link href="/About" className="transition duration-1000 ease-in-out inline-flex relative justify-center items-center rounded-lg py-2 pl-2 pr-3 gap-2 text-md font-medium 
                    text-zinc-500 overflow-hidden dark:text-zinc-400 hover:text-zinc-900 hover:dark:text-zinc-100 ring-2 hover:ring-zinc-400 
                    hover:dark:ring-zinc-600 before:content-[''] before:absolute before:w-full before:aspect-square before:rounded-full before:transition-transform 
                    before:duration-200 before:transform before:scale-50 before:translate-y-full before:opacity-0 before:hover:opacity-100 before:hover:scale-110 
                    before:hover:translate-y-0 before:hover:bg-black/5 before:hover:dark:bg-white/5 isActive ring-zinc-200 dark:ring-zinc-800 
                    bg-zinc-100 dark:bg-zinc-900">
                    <TbCookieMan />
                    About Me
                </Link>
                {/* <Link href="/TestPage" className="transition duration-1000 ease-in-out inline-flex relative justify-center items-center rounded-lg py-2 pl-2 pr-3 gap-2 text-md font-medium 
                    text-zinc-500 overflow-hidden dark:text-zinc-400 hover:text-zinc-900 hover:dark:text-zinc-100 ring-2 hover:ring-zinc-400 
                    hover:dark:ring-zinc-600 before:content-[''] before:absolute before:w-full before:aspect-square before:rounded-full before:transition-transform 
                    before:duration-200 before:transform before:scale-50 before:translate-y-full before:opacity-0 before:hover:opacity-100 before:hover:scale-110 
                    before:hover:translate-y-0 before:hover:bg-black/5 before:hover:dark:bg-white/5 isActive ring-zinc-200 dark:ring-zinc-800 
                    bg-zinc-100 dark:bg-zinc-900">
                    <MdOutlinePhonelink />
                    Test
                </Link> */}
            </div>

            {/* <div id="SideMenu" className="fixed h-full w-0 top-0 right-0 z-20 bg-gray-200 dark:bg-zinc-600 rounded-l-xl" style={{ transition: "width 400ms" }}>
                <div className="h-full flex justify-center items-center">
                    <nav id="Navbar" className="py-1 px-5 invisible">
                        <div className="container px-4 sm:px-6 py-4 flex justify-center items-center">

                            {renderThemeChanger()}

                        </div>
                        <h1 className="text-xl font-semibold font-poppins flex flex-col items-center">
                            <p className="text-2xl my-2" role={"button"} onClick={returnHome}>Home</p>
                            <Image src={require("../image/SeparationLine.svg")} className="h-8 w-80" alt={""}></Image>
                            <Link href="OgoxePage" className="my-2">Ogoxe</Link>
                            <Link href="KaracalPage" className="my-2">Karacal</Link>
                            <Link href="HmklPage" className="my-2">HMKL</Link>
                        </h1>
                    </nav>
                </div>
            </div> */}
        </div>
    );
}

export default TopPage;