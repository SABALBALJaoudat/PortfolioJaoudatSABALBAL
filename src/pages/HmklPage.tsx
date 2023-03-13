import React from 'react';
import TopPage from "@/components/TopPage";
import Hmkl from "@/pages/Hmkl";

function HmklPage() {
    return (
        <div className="min-h-screen flex flex-col justify-between bg-site dark:bg-site_dark bg-no-repeat bg-cover overflow-hidden">
            <TopPage/>
            <Hmkl/>
        </div>
    );
}

export default HmklPage;