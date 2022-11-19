import React from "react";
import EduInfo from "./EduInfo";
import WorkInfo from "./WorkInfo";
import GenInfo from "./GenInfo";
import CvGenerated from "./CvGenerated";
import Header from "./Header";

function App () {

    return (
            <div id="body">
                <Header />
                <GenInfo />
                <EduInfo />
                <WorkInfo />
                <CvGenerated />
            </div>
        )
    
}

export default App;