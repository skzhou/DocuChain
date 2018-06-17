pragma solidity ^0.4.17;
contract Signing {
  address public signer_1;
  address public signer_2;
  string public original;
  string public signed_1;
  string public signed_2;
  uint public state;
  uint public first_signer;

  address[] public signers;

  constructor() public {
    state = 0;
    first_signer = 0;
    signer_1 = 0x52f0c2E6260aB3eE564CE4354985A9b8500E62Fe;
  }
  function sign(string encrypted) public returns(uint){

      // require(msg.sender == signer_1 || msg.sender == signer_2);
      require (state<2);
      if (state == 0)
      {
          if (msg.sender == signer_1) { first_signer = 1;}
          else if (msg.sender == signer_2) { first_signer = 2;}
      }
      if (state == 1)
      {
          if (msg.sender == signer_1) { require (first_signer == 2); }
          else if (msg.sender == signer_2) { require (first_signer == 1); }
      }
      
      if (msg.sender == signer_1)
      { signed_1 = encrypted; }
      
      else if (msg.sender == signer_2)
      { signed_2 = encrypted; }
      
      state++;
      return state;
  }
  function completion() public view returns (uint) {
    return state;
  }
}