import React from "react";
import "../../App.css";
import logo from "../images/logo.png";

export default function Website(){
    return (
        <section className="banner" style={{
            backgroundImage: `url("http://localhost:7373/images/images1693289356443.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            borderRadius: "0px 0px 40px 40px"
          }}>
            <div className="container">
              <div className="row pt-5">
                <div className="col-md-5 leftcolumn">
                  <h3> Time Is Important</h3>
                  <p> He Treasured the Vintage Watch, A Family Heirloom Passed Down for Generations, Its Intricate Hands Ticking Through Time's Stories. The Divr's watch was built to endure the depths, a reliable companion on his underwater explorations, a testament to human engineering.</p>
                  <button className="btn">Buy One</button>
                </div>
                <div className="col-md-7">
                  <img src={logo} alt="main"  className="mainImage" />
                </div>
              </div>
            </div>
        </section>
    )
}