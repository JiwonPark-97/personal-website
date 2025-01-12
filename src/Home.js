import React from "react";
import {Link} from "react-router-dom"
import "./Home.css";

function Home() {
    return (
        <div className="home-container">
            {/* Big Welcome Header */}
            <h1 className="home-title">Hi, I'm Jiwon 👋</h1>
            <p className="home-subtitle">
                A Computer Science student passionate about coding, problem-solving, and building cool stuff.
            </p>

            {/* Summary Sections */}
            <div className="summary-cards">
                <div className="card">
                    <Link to="/about">
                        <h2>About Me</h2>
                    </Link>
                    <p>Learn more about my background, hobbies, and what drives me as a developer.</p>
                </div>
                <div className="card">
                    <Link to="/projects">
                        <h2>Projects</h2>
                    </Link>
                    <p>Check out some of the apps and websites I've built using React, Python, and more.</p>
                </div>
                <div className="card">
                    <Link to="/coursework">
                        <h2>Coursework</h2>
                    </Link>
                    <p>A showcase of the CS courses that have shaped my technical foundation.</p>
                </div>
            </div>
        </div>
    );
}

export default Home;
