import React, { useEffect, useState } from "react";
import axios from "axios";
import qrcode from "qrcode";

function ViewCredentialOffer() {
  const [credentialOffer, setCredentialOffer] = useState([]);
  const [qrCodeUrl, setQrCodeUrl] = useState("");

  useEffect(() => {
    const did = sessionStorage.getItem("did");
    // Fetch data from the backend server
    axios
      .post("http://localhost:3008/view-credential-offer", { didHolder: did })
      .then((response) => {
        //setInvitations(response.data);
        const data = response.data;
        if (Array.isArray(data)) {
          setCredentialOffer(data);
        } else {
          console.error("Invitations data is not an array:", data);
        }
      })
      .catch((error) => {
        console.error("Failed to fetch invitations:", error);
      });
  }, []);

  const handleAcceptCredential = () => {
    const did = sessionStorage.getItem("did");
    axios.post("http://localhost:3008/accept-credential-offer", { did: did });
  };

  const handleGenerateQRcode = () => {
    // Get the data from the selected offer
    const offer = credentialOffer[0]; // Assuming you want to generate QR code for the first offer

    if (offer) {
      const branchManager = offer.branch_manager || "N/A"; // Use a default value if branchManager is undefined
      const branchName = offer.branch_name || "N/A";
      const holderDID = offer.did || "N/A";
      const location = offer.branch_address || "N/A";
      const revokedByIssuer = offer.revokedByIssuer || "N/A";
      const branch_longitude = offer.branch_longitude || "N/A";
      const branch_latitude = offer.branch_latitude || "N/A";
      const legitimate = offer.legitimate || "N/A";

      // Concatenate the data into a single string
      const data = `${branchManager}, ${branchName}, ${holderDID}, ${location}, ${revokedByIssuer}, ${branch_longitude}, ${branch_latitude}, ${legitimate}`;

      // Generate the QR code using the qrcode library
      qrcode.toDataURL(data, (err, url) => {
        if (err) {
          console.error(err);
        } else {
          // Set the URL of the generated QR code
          setQrCodeUrl(url);
        }
      });
    }
  };

  return (
    <div>
      <div className="bg-supporting-purple title-bar">
        <div className="container-xxl">
          <h1 className="display-1">View Credential Offer</h1>
        </div>
      </div>
      
      <div className="card">
        <h5 className="card-header">Credential Offer</h5>
        <div className="card-body">
          <h5 className="card-title">Credential Offer Sent by the Issuer</h5>
          {credentialOffer.length === 0 ? (
            <p>No credential offers sent to this branch yet.</p>
          ) : (
            credentialOffer.map((offer, index) => (
              <div key={index}>
                <p>Branch Manager: {offer.branch_manager}</p>
                <p>Branch Name: {offer.branch_name}</p>
                <p>Holder DID: {offer.did}</p>
                <p>Location: {offer.branch_address}</p>
                <p>Longitude: {offer.branch_longitude}</p>
                <p>Latitude: {offer.branch_latitude}</p>
                <p>Legitimate: {offer.legitimate}</p>
                <p>Revoked From Issuer: {offer.revokedByIssuer}</p>

                {offer.acceptedFromHolder === "no" ? (
                  <button
                    className="btn btn-primary"
                    onClick={handleAcceptCredential}
                  >
                    Accept Credential Offer
                  </button>
                ) : (
                  <button
                    className="btn btn-primary"
                    onClick={handleGenerateQRcode}
                  >
                    Generate QR code
                  </button>
                )}
              </div>
            ))
          )}
        </div>
      </div>

      {qrCodeUrl && (
        <div className="container" style={{ marginTop: "20px" }}>
        
          <img className="card" src={qrCodeUrl} alt="QR code" />
        </div>
      )}
    </div>
  );
}

export default ViewCredentialOffer;
