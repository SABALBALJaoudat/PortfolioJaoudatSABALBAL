import React from 'react';
import TopPage from "@/components/TopPage";
import BotPage from "@/components/BotPage";
import Karacal from "@/pages/Karacal";

function KaracalPage() {
    return (
        <div className="min-h-screen flex flex-col justify-between">
            <TopPage/>
            <Karacal/>
            <BotPage/>
        </div>
    );
}

export default KaracalPage;