import React from "react";
import { Link } from "react-router-dom";

function HolderHome() {
  return (
    <div>
      <div className="bg-supporting-purple title-bar">
        <div className="container-xxl">
          <h1 className="display-1">Welcome To Soverify Solution !</h1>
        </div>
      </div>
      <div>
        <h1><br></br></h1>
        {/* <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: "25%" }}
            aria-valuenow={25}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            25%
          </div>
        </div> */}

        <div className="card-container">
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">Accept Invitations</h5>
              <p className="card-text fw-bold mb-4" style={{ height: "90px" }}>
                Here you can accept an invitation to start a communication with
                the company you want to hold its identity.
              </p>
              <Link to="/view-invitation-holder" className="btn btn-primary">
                Accept Invitation
              </Link>
            </div>
          </div>

          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">Accept Credential Offer </h5>
              <p className="card-text fw-bold mb-4" style={{ height: "90px" }}>
                Here you can Accept the Credential Offer to hold the identity of
                the company and legitimize your store.
              </p>
              <Link to="/view-invitation-holder" className="btn btn-primary">
                Accept Credential
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HolderHome;
