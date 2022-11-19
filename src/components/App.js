import React, { useState } from "react";
import EduInfo from "./EduInfo";
import WorkInfo from "./WorkInfo";
import GenInfo from "./GenInfo";
import CvGenerated from "./CvGenerated";
import Header from "./Header";

function App () {
    const getGen = (genInfo) => {
        console.log (genInfo)
    }

    return (
            <div id="body">
                <Header />
                <GenInfo onChange={getGen} />
                <EduInfo />
                <WorkInfo />
                <CvGenerated  />
            </div>
        )
    
}

export default App;