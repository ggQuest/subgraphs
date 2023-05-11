# subgraphs

Subgraphs of two main contracts of the ggQuest Protocol

1. ggQuests Contract 
https://api.studio.thegraph.com/query/46635/gg-quest-subgraph/v0.0.1
Events emitted :
  -> event AddOperator(address _operator);
  -> event RemoveOperator(address _operator);
  
2. ggProfiles Contract 
https://api.studio.thegraph.com/query/46635/gg-profiles-subgraph/v.0.01
Events emitted :
  -> event Mint(address _userAddress, string _pseudo);
  ->  event Burn(address _userAddress);
  ->  event Update(address _userAddress, string _pseudo);
  ->  event IncreaseReputation(address _userAddress, uint _amount);
  ->  event DecreaseReputation(address _userAddress, uint _amount);
  ->  event AddOperator(address _operator);
  ->  event RemoveOperator(address _operator);
  ->  event AddSupportedThirdParty(string _name);
  ->  event LinkThirdPartyToProfile(address _userAddress, uint _thirdPartyId, uint _thirdPartyUserId);
  ->  event UnlinkThirdPartyToProfile(address _userAddress, uint _thirdPartyId);
  
  
