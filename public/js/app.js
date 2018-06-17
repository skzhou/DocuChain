App = {
  web3Provider: null,
  contracts: {},
  init: function() {
    console.log('Solidity working');
  }
};

$(function() {
  $(window).load(function() {
    App.init();
  });
});
