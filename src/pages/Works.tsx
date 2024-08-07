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
        <div className="min-h-screen flex flex-col justify-between overflow-hidden bg-neutral-50">
            <TopPage />
            <div className="flex items-center justify-center p-8 mt-24">
                <div className="max-w-screen-2xl">
                    <div className="flex flex-col items-center p-8">
                        <h2 id={"project"}>
                            Mes projets
                        </h2>
                        <div className={"flex justify-center relative mt-20"}>
                            <Cards />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}