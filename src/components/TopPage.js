import React from 'react';
import {BsFillMoonFill, BsSunFill} from "react-icons/bs";
import {HiMenu} from "react-icons/hi";
import Link from "next/link";
import {useTheme} from "next-themes";
import {useState, useEffect} from "react";
import { useRouter } from 'next/router'
import Image from 'next/image'


function TopPage() {

    const {systemTheme , theme, setTheme} = useTheme ();
    const [mounted, setMounted] = useState(false);
    useEffect(() =>{
        setMounted(true);
    },[])

    const router = useRouter()

    const renderThemeChanger= () => {
        if(!mounted) return null;

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
        if (document.getElementById("SideMenu").style.width == "40%"){
            // document.getElementById("Logo").style.visibility = "hidden";
            document.getElementById("Navbar").style.visibility = "hidden";
            document.getElementById("SideMenu").style.width="0%";
        }
        else{
            // document.getElementById("Logo").style.visibility = "visible";
            document.getElementById("Navbar").style.visibility = "visible";
            document.getElementById("SideMenu").style.width="40%";
        }
    }

    function returnHome(){
        if (router.pathname === "/")
            router.reload(window.location.pathname);
        else
            router.push('/').then(() => window.location.reload());
    }

    return (
        // <div className="w-full sticky top-0 z-30 bg-gray-100 dark:bg-zinc-800 bg-opacity-90 dark:opacity-90 mb-10">
        <div className="w-full h-20 lg:h-0 fixed top-0 z-30 bg-gray-100 dark:bg-zinc-800">
            <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet"/>

            <HiMenu className="fixed top-5 right-5 h-10 w-10 z-30" role="button" onClick={handleClick}/>

            <h1 className="fixed top-5 left-5 text-2xl font-semibold font-poppins"
                role={"button"} onClick={returnHome}>
                Jaoudat Portfolio
            </h1>

            <div id="SideMenu" className="fixed h-full w-0 top-0 right-0 z-20 bg-gray-200 dark:bg-zinc-600 rounded-l-xl" style={{ transition: "width 400ms" }}>
                <div className="h-full flex justify-center items-center">
                    <nav id="Navbar" className="py-1 px-5 invisible">
                        <div className="container px-4 sm:px-6 py-4 flex justify-center items-center">

                            {renderThemeChanger()}

                        </div>
                        <h1 className="text-xl font-semibold font-poppins flex flex-col items-center">
                            <p className="text-2xl my-2" role={"button"} onClick={returnHome}>Home</p>
                            <Image src={require("../image/SeparationLine.svg")} className="h-8 w-80"></Image>
                            <Link href="OgoxePage" className="my-2">Ogoxe</Link>
                            <Link href="KaracalPage" className="my-2">Karacal</Link>
                            <Link href="HmklPage" className="my-2">HMKL</Link>
                        </h1>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default TopPage;