async function sequentialAPICalls(req, res) {
    const { didIssuer } = req.body;
  try {
    // Step 1: Call API Endpoint 1
    const apiUrl1 = "http://localhost:8021/schemas";

    // Data to send in the request body
    const postData1 = {
      attributes: [
        "branchName",
        "branchManager",
        "branchAddress",
        "branchLongitude",
        "branchLatitude",
      ],
      schema_name: "franchiseStoreLegitimacy",
      schema_version: "1.0",
    };
    // Make the POST API call using axios
    const response1 = await axios.post(apiUrl1, postData1);
    const data1 = response1.data;

    console.log("API Schema response:", data1);

    // Use the output of API Endpoint 1 as input for API Endpoint 2
    const input2 = processData(data1);

    // Step 2: Call API Endpoint 2 with the input from Step 1
    const apiUrl2 = "http://localhost:8021/credential-definitions";

    // Data to send in the request body
    const postData2 = {
      revocation_registry_size: 1000,
      schema_id: data1.schema.id,
      support_revocation: true,
      tag: "default",
    };

    // Make the POST API call using axios
    const response2 = await axios.post(apiUrl2, postData2);
    const data2 = response2.data;

    console.log("API Credential definitions response:", data2);

    // Use the output of API Endpoint 2 as input for API Endpoint 3
    const input3 = processData(data2);

    // Step 3: Call API Endpoint 3 with the input from Step 2
    const apiUrl3 = "http://localhost:8021/issue-credential/create";

    // Data to send in the request body
    const postData3 = {
      auto_remove: true,
      comment: "string",
      cred_def_id: "WgWxqztrNooG92RXvxSTWv:3:CL:20:tag",

      //required
      // data that needs to be retrieved whether from the mongoDB or from the 2 functions just above
      issuer_did: didIssuer,
      schema_id: data1.schema.id,
      schema_issuer_did: didIssuer,
      schema_name: response1.schema_name,
      schema_version: "1.0",
      trace: true,
    };
    // Make the POST API call using axios
    const response = await axios.post(apiUrl3, postData3);
    // Handle the API response

    console.log("API response:", response.data);
    const response3 = await axios.put(
      "https://api.example.com/endpoint3",
      input3
    );
    const data3 = response3.data;

    // Handle the final response from API Endpoint 3
    // ...

    res.json({ message: "Sequential API calls completed successfully" });
  } catch (error) {
    console.error("Error making API calls:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

// Helper function to process data
function processData(data) {
  // Process the data as needed
  const processedData = {
    // Processed data properties
  };

  return processedData;
}
