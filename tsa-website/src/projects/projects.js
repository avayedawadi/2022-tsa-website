import React from 'react';
import './projects.css'
import { Link } from 'react-router-dom'
import WorkImage from './projectImage/workImage'

const Work = () => {

    function openModal(){
        document.getElementById("exampleModal").style.display = "block"
        document.getElementById("exampleModal").classList.add("show")
    }

    function closeModal(){
        document.getElementById("exampleModal").style.display = "none"
        document.getElementById("exampleModal").classList.remove("show")
    }

    return (
        <>
            <div className="projectMain">
                <h1>My Projects and Experience</h1>
                <Link to="/gtri"><WorkImage text="My Work with GTRI" imageURL="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Camera_flash.svg/302px-Camera_flash.svg.png?20200409235318"></WorkImage></Link>
                <Link to='/mypalate'><WorkImage imageURL="https://images.unsplash.com/photo-1618588590706-bac3c25b3d41?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"></WorkImage></Link>
            </div>

        </>
    );
}

export default Work;
/*
<h5>Time Worked: 6 weeks over the summer of 2021</h5>
<h5>Skills Gained: Working with Lit and Web Components as well as presentation skills</h5>
<h5>Tangibles Created: Deployed 2 components to NPM</h5>*/