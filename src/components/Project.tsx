import React from "react";
import ITCARE from '../assets/images/ITCARE.png';
import book from '../assets/images/book.png';
import audiobook from '../assets/images/audiobook.png';
import wedding from '../assets/images/wedding.png';
import PlugStation from '../assets/images/PlugStation.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/THEBAOxCucumber/project-241-ITCARE.git" target="_blank" rel="noreferrer"><img src={ITCARE} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/THEBAOxCucumber/project-241-ITCARE.git" target="_blank" rel="noreferrer"><h2>IT CARE WEB</h2></a>
                <p>Develop a Computer Repair Shop Management System website using HTML, CSS, JavaScript, and SQL.</p>
                <p>This project is part of the 02739241 course Internet Technology</p>
            </div>

            <div className="project">
                <a href="https://github.com/THEBAOxCucumber/book.git" target="_blank" rel="noreferrer"><img src={book} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/THEBAOxCucumber/book.git" target="_blank" rel="noreferrer"><h2>Read And Tell Application</h2></a>
                <p>Develop Read And Tell applications using Flutter, Dart , FireBase , And Android Studio.</p>
                <p>This project is part of the 02739342 course Application Development for Mobile Devices</p>
            </div>
            
            <div className="project">
                <a href="https://github.com/THEBAOxCucumber/Audiobook.git" target="_blank" rel="noreferrer"><img src={audiobook} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/THEBAOxCucumber/Audiobook.git" target="_blank" rel="noreferrer"><h2>Audio Book Application</h2></a>
                <p>Develop Audio Book applications using Flutter, Dart , FireBase , And Android Studio.</p>
                <p>This project is part of the 02739322 course Information System Analysis and Design</p>
            </div>
            
            <div className="project">
                <a href="https://github.com/THEBAOxCucumber/Wedding-Organizer.git" target="_blank" rel="noreferrer"><img src={wedding} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/THEBAOxCucumber/Wedding-Organizer.git" target="_blank" rel="noreferrer"><h2>Wedding Organizer WEB</h2></a>
                <p>Develop a Wedding Organizer website using HTML and Angular.</p>
                <p>This project is part of the 02739496 course Selected Topic in Information Technology</p>
            </div>

            <div className="project">
                <a href="https://github.com/THEBAOxCucumber/PlugStation.git" target="_blank" rel="noreferrer"><img src={PlugStation} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/THEBAOxCucumber/PlugStation.git" target="_blank" rel="noreferrer"><h2>PlugStation Vender Machine</h2></a>
                <p>Develop a model of the PlugStation plugin using Flutter , Dart , and FireBase.</p>
                <p>This project is part of the 02739341 course Introduction to Artificial Intelligence</p>
            </div>
        </div>
    </div>
    );
}

export default Project;