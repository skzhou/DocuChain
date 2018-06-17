pragma solidity ^0.4.17;
contract Signing {
  address public signer_1;
  address public signer_2;
  string public original;
  string public signed_1;
  string public signed_2;
  uint public state;

  mapping (address => string) pub_keys;
  mapping (string => address) addrs;

  function getSigner_1() public view returns (address) {
    return signer_1;
  }

  function getSigner_2() public view returns (address) {
    return signer_2;
  }

  function getOriginal() public view returns (address) {
    return original;
  }

  function getSigned_1() public view returns (address) {
    return signed_1;
  }

  function getSigned_2() public view returns (address) {
    return signed_2;
  }

  function completion() public view returns (bool) {
    return state == 2;
  }

  constructor() public {

    state = 0;

    addrs['Tom'] = 0x52f0c2E6260aB3eE564CE4354985A9b8500E62Fe;
    addrs['Jerry'] = 0x632E605A551E3EbaA095C1e16681e6e3BD54fAf8;

    pub_keys[0x52f0c2E6260aB3eE564CE4354985A9b8500E62Fe] = '52f0c2E6260aB3eE564CE4354985A9b8500E62Fe';
    pub_keys[0x632E605A551E3EbaA095C1e16681e6e3BD54fAf8] = '632E605A551E3EbaA095C1e16681e6e3BD54fAf8';
 
  }

  function real_constructor(string name_1, string name_2, string doc) public {
    signer_1 = addrs[name_1];
    // require(msg.sender == signer_1);
    signer_2 = addrs[name_2];
    original = doc;

   }


  function sign() public returns(uint){

      require (state == 0 || state == 1);

      if (state == 0) {
        // signer_1 = 0x52f0c2E6260aB3eE564CE4354985A9b8500E62Fe;
        // require(msg.sender == signer_1);
        bytes memory tmp_1 = bytes(signed_1);
        require(tmp_1.length == 0);
        string key_1 = pub_keys[signer_1];
        signed_1 = concat(key_1, original);
        state = 1;
      }
      else {
        // require(msg.sender == signer_2);
        bytes memory tmp_2 = bytes(signed_2);
        require(tmp_2.length == 0);
        string key_2 = pub_keys[signer_2];
        signed_2 = concat(key_2, original);
        state = 2;
      }
      return state;
  }



  function concat(string _a, string _b) constant returns (string){
    bytes memory bytes_a = bytes(_a);
    bytes memory bytes_b = bytes(_b);
    string memory length_ab = new string(bytes_a.length + bytes_b.length);
    bytes memory bytes_c = bytes(length_ab);
    uint k = 0;
    for (uint i = 0; i < bytes_a.length; i++) bytes_c[k++] = bytes_a[i];
    for (i = 0; i < bytes_b.length; i++) bytes_c[k++] = bytes_b[i];
    return string(bytes_c);
  }
}