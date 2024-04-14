"use client";
import React from "react";
import { StarsCore } from "../components/Sparkles";

function TestPage() {
    return (
        <div className="h-screen w-full bg-white">
            <div className="w-full absolute inset-0 h-screen">
                <StarsCore
                    id="tsparticlesfullpage"
                    background="transparent"
                    minSize={1.2}
                    maxSize={2}
                    particleDensity={100}
                    className="w-full h-full"
                    particleColor="#000000"
                />
            </div>
        </div>
    );
}

export default TestPage;
