import React from 'react';
import TopPage from "@/components/TopPage";
import BotPage from "@/components/BotPage";
import Hmkl from "@/pages/Hmkl";

function HmklPage() {
    return (
        <div className="min-h-screen flex flex-col justify-between">
            <TopPage/>
            <Hmkl/>
            <BotPage/>
        </div>
    );
}

export default HmklPage;