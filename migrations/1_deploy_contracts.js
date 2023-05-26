var STARXtoken = artifacts.require('STARXtoken');
module.exports = function(deployer) {
  //const erc1820 = await singletons.ERC1820Registry(accounts[0]);
  deployer.deploy(STARXtoken);
};