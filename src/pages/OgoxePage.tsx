import React from 'react';
import TopPage from "@/components/TopPage";
import BotPage from "@/components/BotPage";
import Ogoxe from "@/pages/Ogoxe";

function OgoxePage() {
    return (
        <div className="min-h-screen flex flex-col justify-between">
            <TopPage/>
            <Ogoxe/>
            <BotPage/>
        </div>
    );
}

export default OgoxePage;