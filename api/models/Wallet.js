const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WalletSchema = new Schema({
  did: String,
  credential_definition_id: String,
  schema_id: String,
  // credential_offer: String,
  branch_name: String,
  branch_address: String,
  branch_longitude: String,
  branch_manager: String,
  branch_latitude: String,
  acceptedFromHolder: String,
  legitimate: String,
  revokedByIssuer: String,
});

const Wallet = mongoose.model("Wallet", WalletSchema);

module.exports = Wallet;
