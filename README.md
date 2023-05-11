# subgraphs

Subgraphs of two main contracts of the ggQuest Protocol

1. ggQuests Contract 


https://api.studio.thegraph.com/query/46635/gg-quest-subgraph/v0.0.1

Events emitted :

  ```solidity 
  event AddOperator(address _operator);
  ```
  ```solidity 	
  event RemoveOperator(address _operator);
  ```
  
2. ggProfiles Contract 

https://api.studio.thegraph.com/query/46635/gg-profiles-subgraph/v.0.01

Events emitted :
 ```solidity 	
 event Mint(address _userAddress, string _pseudo);
 ```
	
 ```solidity 	
 event Burn(address _userAddress);
 ```	
 
 ```solidity 	
 event Update(address _userAddress, string _pseudo);
 ```	
 
 ```solidity 	
 event IncreaseReputation(address _userAddress, uint _amount);
 ```
	
 ```solidity 	
 event DecreaseReputation(address _userAddress, uint _amount);
 ```
	
 ```solidity 	
 event AddOperator(address _operator);
 ```
	
 ```solidity 	
 event RemoveOperator(address _operator);
 ```
	
 ```solidity 	
 event AddSupportedThirdParty(string _name);
 ```
	
 ```solidity 	
 event LinkThirdPartyToProfile(address _userAddress, uint _thirdPartyId, uint _thirdPartyUserId);
 ```
	
 ```solidity 	
 event UnlinkThirdPartyToProfile(address _userAddress, uint _thirdPartyId);
 ```
	
  
  
