import React from "react";
import "./Home.css";
import img1 from "../assets/carousel3.jpeg";
import img2 from "../assets/carousel2.jpg";
import img3 from "../assets/carousel1.png";
import img320 from "../assets/illustration-320.png";
import img480 from "../assets/illustration-480.png";
import img768 from "../assets/illustration-768.png";
import img1024 from "../assets/illustration-1024.png";
import img1280 from "../assets/illustration-1280.png";
import img1440 from "../assets/illustration-1440.png";

// import "./title-bars.css";

function Home() {
  return (
    <div>
      <div className="bg-dark title-bar">
        <div className="container-xxl">
          <h1 className="display-1">Soverify Solution</h1>
          <img
            src={img320}
            alt=""
            className="d-sm-none"
          />
          <img
            src={img480}
            alt=""
            className="d-none d-sm-block d-md-none"
          />
          <img
            src={img768}
            alt=""
            className="d-none d-md-block d-lg-none"
          />
          <img
            src={img1024}
            alt=""
            className="d-none d-lg-block d-xl-none"
          />
          <img
            src={img1280}
            alt=""
            className="d-none d-xl-block d-xxl-none"
          />
          <img
            src={img1440}
            alt=""
            className="d-none d-xxl-block"
          />
        </div>
      </div>

      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img1} className="d-block w-100" alt="photo1" />
          </div>
          <div className="carousel-item">
            <img src={img2} className="d-block w-100" alt="photo2" />
          </div>
          <div className="carousel-item">
            <img src={img3} className="d-block w-100" alt="photo3" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* <h1>Welcome To Soverify Solution !</h1> 
      <nav className="stepped-process" aria-label="Checkout process">
        <p className="float-start mt-2 me-2 fw-bold d-sm-none">Step</p>
        <ol>
          <li className="stepped-process-item">
            <a className="stepped-process-link" href="/login" title="1. Sign in" aria-current="step">
              Sign in
            </a>
          </li>
          <li className="stepped-process-item active">
            <a
              className="stepped-process-link"
              title="2. Review"
              aria-current="step"
            >
              Review
            </a>
          </li>
          <li className="stepped-process-item">
            <a className="stepped-process-link" href="#" title="3. Delivery">
              Delivery
            </a>
          </li>
          <li className="stepped-process-item">
            <a className="stepped-process-link" href="#" title="4. Payment">
              Payment
            </a>
          </li>
          <li className="stepped-process-item">
            <a className="stepped-process-link" href="#" title="5. Place order">
              Place order
            </a>
          </li>
        </ol>
      </nav> */}
    </div>
  );
}

export default Home;
