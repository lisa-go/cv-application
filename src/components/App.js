import React, { Component, useState } from "react";
import EduInfo from "./EduInfo";
import WorkInfo from "./WorkInfo";
import GenInfo from "./GenInfo";
import CvGenerated from "./CvGenerated";
import Header from "./Header";

class App extends Component {
    constructor() {
        super()
    }


    render() {
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
}

export default App;