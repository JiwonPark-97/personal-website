import React from "react";
import "./Research.css";
import poster from "./assets/Inverse-Design-of-Mechanical-Metamaterials-to-Acheive-Prescribed-Elasticity-Matrix-Using-Quantum-Computing.jpg"

function Research() {
    return (
        <div className="research-container">
            <h1>
                Research 📚
            </h1>
            <p>
                This research explores using the Quantum Approximate Optimization Algorithm (QAOA) to design mechanical metamaterials with tailored properties. We generated spring networks representing unit cells, calculated stiffness matrices to evaluate their mechanical behavior, and prepared data for future optimization using QAOA. The goal is to achieve inverse design by optimizing configurations for desired elastic properties, paving the way for more efficient material design processes.
            </p>
            <img
                src={poster}
                alt="Research Poster"
                className="research-poster"
            />
        </div>
    )
}

export default Research;