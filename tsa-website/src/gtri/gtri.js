import React from "react";
import "./gtri.css";
import { Link } from "react-router-dom";

const GTRI = () => {
  return (
    <>
      <div className="gtriMain">
        <div class="jumbotron jumbotron-fluid">
          <div class="container">
            <h1 class="display-4">Pictures</h1>
            <p class="lead">Some pictures of our competition last year!</p>
          </div>
        </div>
        <div className="everything">
        <div className="gallery">
          <a target="_blank" href="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/2011-06-07_Basketball_in_hoop_still_shot.jpg/640px-2011-06-07_Basketball_in_hoop_still_shot.jpg">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/2011-06-07_Basketball_in_hoop_still_shot.jpg/640px-2011-06-07_Basketball_in_hoop_still_shot.jpg"
              alt="Cinque Terre"
              width="600"
              height="400"
            ></img>
          </a>
          <div className="desc">Basketball going in the hoop!</div>
        </div>
        <br></br>
        <div className="gallery">
          <a target="_blank" href="https://images.unsplash.com/photo-1608245449230-4ac19066d2d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80">
            <img
              src="https://images.unsplash.com/photo-1608245449230-4ac19066d2d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt="Cinque Terre"
              width="600"
              height="400"
            ></img>
          </a>
          <div className="desc">Someone dunking!</div>
        </div>
        </div>
      </div>
    </>
  );
};

export default GTRI;

/*
<img className="gtriImg" src="https://gtri.gatech.edu/public/prod/article/2017-10/mFHgLnLQ.jpg" alt="gtriImage" style={{marginTop: "40px"}}></img>
                    <p style={{marginTop: "40px", backgroundColor: 'dodgerblue', borderRadius: "20px"}}>Paragraph chunk of text</p>*/
