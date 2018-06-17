var Adoption = artifacts.require("Adoption");
var Signing = artifacts.require("Signing");


module.exports = function(deployer) {
  deployer.deploy(Adoption);
  deployer.deploy(Signing);
};