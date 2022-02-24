import React from 'react';
import './mypalate.css'
import { Link } from 'react-router-dom'

const MyPalate = (props) => {
    return (
        <>
            <div className="mypalateMain">
                <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h1 class="display-4">Instructions</h1>
                        <p class="lead">How everything works!</p>
                    </div>
                </div>
                <div class="tableDiv">
                    <table class="table">
                        <tbody>
                            <tr>
                                <th scope="row">Step 1</th>
                                <td>Get a good video camera, a laptop, a way to prop up the camera, and a flat area with a hoop to play basketball!</td>
                            </tr>
                            <tr>
                                <th scope="row">Step 2</th>
                                <td>Set up a camera in a way through which the entire basketball court can be seen.</td>
                            </tr>
                            <tr>
                                <th scope="row">Step 3</th>
                                <td>Connect camera to the laptop and join the Zoom link that will be emailed shortly prior to the competition.</td>
                            </tr>
                            <tr>
                                <th scope="row">Step 4</th>
                                <td>Make the shots that come up on the screen through Zoom. The more you make the more points you get.</td>
                            </tr>
                            <tr>
                                <th scope="row">Step 5</th>
                                <td>The number of shots you make will be tallyed up by judges and put on a leaderboard. You're finished!</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default MyPalate;