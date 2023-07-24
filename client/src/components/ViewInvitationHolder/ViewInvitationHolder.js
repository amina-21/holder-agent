import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ViewInvitationHolder() {
  const [invitations, setInvitations] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const did = sessionStorage.getItem("did");

    // Fetch data from the backend server
    axios
      .post("http://localhost:3008/view-invitation-holder", { did: did })
      .then((response) => {
        //setInvitations(response.data);
        const data = response.data;
        if (Array.isArray(data)) {
          setInvitations(data);
        } else {
          console.error("Invitations data is not an array:", data);
        }
      })
      .catch((error) => {
        console.error("Failed to fetch invitations:", error);
      });
  }, []);

  const handleAccept = (connectionId) => {
    // Make an HTTP request to accept the invitation
    axios
      .post("http://localhost:3008/accept-invitation", { connId: connectionId })
      .then((response) => {
        // Update the invitation status in the local state
        const updatedInvitations = invitations.map((invitation) => {
          if (invitation.connection_id === connectionId) {
            return { ...invitation, status: "accepted" };
          }
          return invitation;
        });
        setInvitations(updatedInvitations);
        // navigate("/");
      })
      .catch((error) => {
        console.error("Failed to accept invitation:", error);
      });
  };

  return (
    <div>
      <div className="bg-supporting-green title-bar">
        <div className="container-xxl">
          <h1 className="display-1">List of Invitations Sent to This Store</h1>
        </div>
      </div>
      <div className="container">
        
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n  .table-container {\n    max-width: 100%;\n    overflow-x: auto;\n  }\n\n  .table {\n    width: 100%;\n    table-layout: fixed;\n    border-collapse: collapse;\n  }\n\n  .table td {\n    word-wrap: break-word;\n    max-width: 200px; /* Adjust the value as needed */\n    white-space: normal;\n  }\n",
          }}
        />
        
        <table className="table">
          <caption><br/></caption>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Connection ID</th>
              {/* <th scope="col">Invitation</th>
            <th scope="col">Invitation URL</th> */}
              {/* <th scope="col">Receiver DID</th>
            <th scope="col">Status</th> */}
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {invitations.map((invitation, index) => (
              <tr key={invitation._id}>
                <th scope="row">{index + 1}</th>
                <td>{invitation.connection_id}</td>
                {/* <td>{JSON.stringify(invitation.invitation)}</td>
              <td>
                <a href={invitation.invitation_url}>invitation</a>
              </td> */}
                {/* <td>{invitation.recipientRole}</td>
              <td>{invitation.status}</td> */}
                <td>
                  {/* Action buttons */}
                  {invitation.status === "pending" ? (
                    <div>
                      <button
                        type="button"
                        className="btn btn-success"
                        onClick={() => handleAccept(invitation.connection_id)}
                      >
                        Accept
                      </button>
                      &nbsp;&nbsp;
                      <button type="button" className="btn btn-danger">
                        Reject
                      </button>
                    </div>
                  ) : (
                    <div>
                      <button
                        type="button"
                        className="btn btn-success"
                        onClick={() => navigate("/view-credential-offer")}
                      >
                        Accept Credential Offer
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ViewInvitationHolder;
