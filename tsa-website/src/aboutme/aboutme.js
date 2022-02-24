import React from 'react';
import './aboutme.css'
import { Link } from 'react-router-dom'

const AboutMe = () => {

    return (
        <>
            <div className="aboutmeMain">
                <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h1 class="display-4">Basic Info</h1>
                        <p class="lead">A virtual basketball shootout, done over Zoom!</p>
                    </div>
                </div>
                <h1>Basic Information</h1>
                <div class="tableDiv">
                    <table class="table">
                        <tbody>
                            <tr>
                                <th scope="row">Date</th>
                                <td>March 15th, 2022</td>
                            </tr>
                            <tr>
                                <th scope="row">Age Requirement</th>
                                <td>13 years of age or older</td>
                            </tr>
                            <tr>
                                <th scope="row">Location</th>
                                <td>Continental United States only (we are soon expanding to the entire world)</td>
                            </tr>
                            <tr>
                                <th scope="row">Skill Level Required </th>
                                <td>None! We take everybody!</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <br></br>
                <br></br>
                <h1>Q/A</h1>
                <section className="aboutmypalateSection">
                    <h4>Why was this started?</h4>
                    <p>With Covid, it was hard to play basketball with others so we started this to give competitive basketball for people still in quarantine.</p>
                    <h4>Who is this specifically for?</h4>
                    <p>We want everybody to play! But we especially want those with underlying medical conditions to play. They are the ones who are left behind by loosening restrictions so they're the ones we want to help the most.</p>
                    <h4>Why is there an age requirement?</h4>
                    <p>Everything takes place over video and because of risks working with small children on video, we cannot currently accomodate children under 13 years of age.</p>
                    <h4>Right now you're only in the US. When are you going to expand to the entire world?
                    </h4>
                    <p>Our goal is to make this a global competition by next year. That's when we'll have the proper facilities to do this on a global basis.</p></section>
                <h1>Some Stats</h1>
                <div className="allGraphs">
                    <h4>Percentage of participants between 13-18 years of age</h4>
                    <div class="graphContainer">
                        <div class="skill javascript">65%</div>
                    </div>
                    <h4>Percentage of total shots made last year</h4>
                    <div class="graphContainer">
                        <div class="skill react">75%</div>
                    </div>
                    <h4>Percentage of participants from last year who are coming back to play this year</h4>
                    <div class="graphContainer">
                        <div class="skill lit">80%</div>
                    </div>
                    <h4>Percentage of people who had fun last year</h4>
                    <div class="graphContainer">
                        <div class="skill python">100%</div>
                    </div>
                </div>
                <br></br>
                <br></br>
                <h1>Contact Info</h1>
                <div class="tableDiv">
                    <table class="table">
                        <tbody>
                            <tr>
                                <th scope="row">Email</th>
                                <td>thisispretend@email.com</td>
                            </tr>
                            <tr>
                                <th scope="row">Contat Person</th>
                                <td>John Basketball</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <br></br>
            </div>
        </>
    );
}

export default AboutMe;