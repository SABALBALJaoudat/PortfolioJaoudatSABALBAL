import React from 'react';
import TopPage from "@/components/TopPage";
import BotPage from "@/components/BotPage";
import Extra from "@/pages/Extra";

function ExtraPage() {
    return (
        <div className="min-h-screen flex flex-col justify-between">
            <TopPage/>
            <Extra/>
            <BotPage/>
        </div>
    );
}

export default ExtraPage;