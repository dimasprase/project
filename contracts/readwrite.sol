pragma solidity ^0.4.17;

contract readwrite {
    string x;
    
    function write(string _x) public {
      x = _x;
    }
    
    function read() public view returns (string) {
      return x;
    }
    
}