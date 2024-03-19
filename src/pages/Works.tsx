import React from "react";
import Image from "next/image";
import workIllustration from "@/image/StorySet Work.svg";
import Cards from "@/components/Cards";
import Link from "next/link";
import IconButton from "@/components/IconButton";
import { BsChevronDoubleDown, BsDownload, BsLinkedin } from "react-icons/bs";
import TopPage from "@/components/TopPage";

export default function Works() {
    return (
        <div className="min-h-screen flex flex-col justify-between overflow-hidden">
            <TopPage />
            <div className="flex flex-col items-center p-8 mt-24">
                <h2 id={"project"} className={"text-3xl font-semibold"}>
                    All my Works
                </h2>
                {/* <div className={"hidden lg:block lg:row-start-1 lg:col-start-3 w-full h-auto"}>
                    <Image src={workIllustration}
                        className="" alt="User illustrations by Storyset" />
                    <div className={"flex items-center justify-center"}>
                        <a href="https://storyset.com/user" className={"text-xs"}>User illustrations by Storyset</a>
                    </div>
                </div> */}
                <div className={"flex justify-center relative mt-20"}>
                    <Cards />
                </div>
            </div>
        </div>
    )
}