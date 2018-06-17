App = {
  web3Provider: null,
  contracts: {},
  init: function() {
    alert('Solidity working');
    return App.initWeb3();
  }
};

$(function() {
  $(window).load(function() {
    App.init();
  });
});
