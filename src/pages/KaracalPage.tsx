import React from 'react';
import TopPage from "@/components/TopPage";
import Karacal from "@/pages/Karacal";

function KaracalPage() {
    return (
        <div className="min-h-screen flex flex-col justify-between bg-site dark:bg-site_dark bg-no-repeat bg-cover overflow-hidden">
            <TopPage/>
            <Karacal/>
        </div>
    );
}

export default KaracalPage;