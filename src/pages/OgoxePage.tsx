import React from 'react';
import TopPage from "@/components/TopPage";
import Ogoxe from "@/pages/Ogoxe";

function OgoxePage() {
    return (
        <div className="min-h-screen flex flex-col justify-between overflow-hidden">
            <TopPage />
            <Ogoxe />
        </div>
    );
}

export default OgoxePage;