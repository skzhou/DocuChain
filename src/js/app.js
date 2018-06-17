App = {
  web3Provider: null,
  contracts: {},

  init: function() {
    // Load pets.
    $.getJSON('../pets.json', function(data) {
      // var petsRow = $('#petsRow');
      // var petTemplate = $('#petTemplate');

      // for (i = 0; i < data.length; i ++) {
      //   petTemplate.find('.panel-title').text(data[i].name);
      //   petTemplate.find('img').attr('src', data[i].picture);
      //   petTemplate.find('.pet-breed').text(data[i].breed);
      //   petTemplate.find('.pet-age').text(data[i].age);
      //   petTemplate.find('.pet-location').text(data[i].location);
      //   petTemplate.find('.btn-adopt').attr('data-id', data[i].id);

      //   petsRow.append(petTemplate.html());
      // }
    });
    return App.initWeb3();
  },

  initWeb3: function() {
    // Is there an injected web3 instance?
    if (typeof web3 !== 'undefined') {
      App.web3Provider = web3.currentProvider;
    } else {
      // If no injected web3 instance is detected, fall back to Ganache
      App.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
    }
    web3 = new Web3(App.web3Provider);

    return App.initContract();
  },

  initContract: function() {
    $.getJSON('Signing.json', function(data) {
      // Get the necessary contract artifact file and instantiate it with truffle-contract
      var SigningArtifact = data;
      App.contracts.Signing = TruffleContract(SigningArtifact);

      // Set the provider for our contract
      App.contracts.Signing.setProvider(App.web3Provider);
    });

    return App.bindEvents();
  },


  // prepareDoc: function() {
    
  //   var signingInstance;

  //   web3.eth.getAccounts(function(error, accounts) {
  //     if (error) {
  //       console.log(error);
  //     }

  //     console.log(accounts[0]);

  //     App.contracts.Signing.deployed().then(function(instance) {
  //       signingInstance = instance;
  //       var res = signingInstance.real_constructor('0x52f0c2E6260aB3eE564CE4354985A9b8500E62Fe', '0x632E605A551E3EbaA095C1e16681e6e3BD54fAf8', "__doc__");
  //       console.log(res);    
  //       return res;
  //     }).catch(function(err) {
  //       console.log(err.message);
  //     });
  //   }); 

  //   return App.bindEvents();
  // },

  bindEvents: function() {
    $(document).on('click', '.btn-adopt', App.handleAdopt);
  },

  markAdopted: function(adopters, account) {

    $('.btn-adopt').text('Success').attr('disabled', true);
       
  },


  handleAdopt: function(event) {
    event.preventDefault();
    var signingInstance;


    web3.eth.getAccounts(function(error, accounts) {
      if (error) {
        console.log(error);
      }

      var account = accounts[0];
      var account = accounts[1];
      console.log(accounts[0]);
      console.log(accounts[1]);

      App.contracts.Signing.deployed().then(function(instance) {
        signingInstance = instance;

        signingInstance.real_constructor('Tom', 'Jerry', "__doc__", {from: account});

        var res = signingInstance.sign({from: account});    
        // console.log(res);    
        return res;
      }).then(function(result) {
        return App.markAdopted();
      }).catch(function(err) {
        console.log(err.message);
      });
    }); 
  }

};

$(function() {
  $(window).load(function() {
    App.init();
    $('#btnShow').click(function(){
        $("#dialog").dialog();
        $("#frame").attr("src", "images/lease_residential.pdf");
    }); 
  });
});
