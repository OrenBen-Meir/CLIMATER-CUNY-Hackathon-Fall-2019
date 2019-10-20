import React, { Component } from 'react';
import axios from 'axios';
import "../css/about-us.css"


import "bootstrap/dist/css/bootstrap.min.css"







// import Oren from "../img/Oren_Senpai.jpg";
// import Young from "../img/Young.PNG";
// import Rehman from "../img/Rehman.PNG";
// import Mohammed from "../img/Mohammed.PNG";

export default class AboutUs extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        
          <div className="container justify-content-end">
            <div className="row">

              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 ">
                <div className="bg-primary text-center py-4 mb-4">
                  <h1 className="font-weight-light text-white">The Team</h1>
                </div>
              </div>

              

              {/* Team Member 1 */}
              <div className="col-xl-6 col-lg-6 col-md-4 col-sm-12 mt-5 mb-5">
                <div className="card border-0 shadow">
                  {/* <img src={Rifat} className="card-img-top" alt="..." /> */}
                  <div className="card-body text-center">
                    <h5 className="card-title mb-0">Young</h5>
                    <div className="card-text text-black-50">Built the backend and databases using the MERN stack</div>
                  </div>
                </div>
              </div>
                
              

              {/* Team Member 2 */}
              <div className="col-xl-6 col-lg-6 col-md-4 col-sm-12 mt-5 mb-5">
                <div className="card border-0 shadow">
                  {/* <img src={Oren} className="card-img-top" alt="..." /> */}
                  <div className="card-body text-center">
                    <h5 className="card-title mb-0">Oren</h5>
                    <div className="card-text text-black-50">Built the backend and databases using MERN Stack</div>
                  </div>
                </div>
              </div>
              
            </div>

            

            {/* Team Member 3 */}
            <div className="col-xl-6 col-lg-6 col-md-4 col-sm-12 mt-5 mb-5">
              <div className="card border-0 shadow">
                {/* <img src={Rehman} className="card-img-top" alt="..." /> */}
                <div className="card-body text-center">
                  <h5 className="card-title mb-0">Rehman</h5>
                  <div className="card-text text-black-50">Designed the frontend with React and built routes using Express</div>
                </div>
              </div>
            </div>
            
             

            {/* Team Member 4 */}
            <div className="col-xl-6 col-lg-6 col-md-4 col-sm-12 mt-5 mb-5">
              <div className="card border-0 shadow">
                {/* <img src={Rehman} className="card-img-top" alt="..." /> */}
                <div className="card-body text-center">
                  <h5 className="card-title mb-0">Mohammed</h5>
                  <div className="card-text text-black-50">Created the Pie Chart and Bar Graph using d3.js</div>
                </div>
              </div>
            </div>

          {/* /.row*/}
          </div>
        {/* /.container*/}
        </div>

    );
  }
}