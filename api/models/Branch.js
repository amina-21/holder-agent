const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BranchSchema = new Schema({
  holderDID: String,
  branchName: String,
  branchManger: String,
  location: String,
  legitimizedFromIssuer: String,
  acceptedFromHolder: String,
  longitude: String,
  latitude: String,
});

const Branch = mongoose.model("Branch", BranchSchema);

module.exports = Branch;
