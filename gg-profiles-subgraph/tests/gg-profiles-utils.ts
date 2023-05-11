import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  AddOperator,
  AddSupportedThirdParty,
  ApprovalForAll,
  Burn,
  DecreaseReputation,
  IncreaseReputation,
  LinkThirdPartyToProfile,
  Mint,
  OwnershipTransferred,
  RemoveOperator,
  TransferBatch,
  TransferSingle,
  URI,
  UnlinkThirdPartyToProfile,
  Update
} from "../generated/ggProfiles/ggProfiles"

export function createAddOperatorEvent(_operator: Address): AddOperator {
  let addOperatorEvent = changetype<AddOperator>(newMockEvent())

  addOperatorEvent.parameters = new Array()

  addOperatorEvent.parameters.push(
    new ethereum.EventParam("_operator", ethereum.Value.fromAddress(_operator))
  )

  return addOperatorEvent
}

export function createAddSupportedThirdPartyEvent(
  _name: string
): AddSupportedThirdParty {
  let addSupportedThirdPartyEvent = changetype<AddSupportedThirdParty>(
    newMockEvent()
  )

  addSupportedThirdPartyEvent.parameters = new Array()

  addSupportedThirdPartyEvent.parameters.push(
    new ethereum.EventParam("_name", ethereum.Value.fromString(_name))
  )

  return addSupportedThirdPartyEvent
}

export function createApprovalForAllEvent(
  owner: Address,
  operator: Address,
  approved: boolean
): ApprovalForAll {
  let approvalForAllEvent = changetype<ApprovalForAll>(newMockEvent())

  approvalForAllEvent.parameters = new Array()

  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromBoolean(approved))
  )

  return approvalForAllEvent
}

export function createBurnEvent(_userAddress: Address): Burn {
  let burnEvent = changetype<Burn>(newMockEvent())

  burnEvent.parameters = new Array()

  burnEvent.parameters.push(
    new ethereum.EventParam(
      "_userAddress",
      ethereum.Value.fromAddress(_userAddress)
    )
  )

  return burnEvent
}

export function createDecreaseReputationEvent(
  _userAddress: Address,
  _amount: BigInt
): DecreaseReputation {
  let decreaseReputationEvent = changetype<DecreaseReputation>(newMockEvent())

  decreaseReputationEvent.parameters = new Array()

  decreaseReputationEvent.parameters.push(
    new ethereum.EventParam(
      "_userAddress",
      ethereum.Value.fromAddress(_userAddress)
    )
  )
  decreaseReputationEvent.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )

  return decreaseReputationEvent
}

export function createIncreaseReputationEvent(
  _userAddress: Address,
  _amount: BigInt
): IncreaseReputation {
  let increaseReputationEvent = changetype<IncreaseReputation>(newMockEvent())

  increaseReputationEvent.parameters = new Array()

  increaseReputationEvent.parameters.push(
    new ethereum.EventParam(
      "_userAddress",
      ethereum.Value.fromAddress(_userAddress)
    )
  )
  increaseReputationEvent.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )

  return increaseReputationEvent
}

export function createLinkThirdPartyToProfileEvent(
  _userAddress: Address,
  _thirdPartyId: BigInt,
  _thirdPartyUserId: BigInt
): LinkThirdPartyToProfile {
  let linkThirdPartyToProfileEvent = changetype<LinkThirdPartyToProfile>(
    newMockEvent()
  )

  linkThirdPartyToProfileEvent.parameters = new Array()

  linkThirdPartyToProfileEvent.parameters.push(
    new ethereum.EventParam(
      "_userAddress",
      ethereum.Value.fromAddress(_userAddress)
    )
  )
  linkThirdPartyToProfileEvent.parameters.push(
    new ethereum.EventParam(
      "_thirdPartyId",
      ethereum.Value.fromUnsignedBigInt(_thirdPartyId)
    )
  )
  linkThirdPartyToProfileEvent.parameters.push(
    new ethereum.EventParam(
      "_thirdPartyUserId",
      ethereum.Value.fromUnsignedBigInt(_thirdPartyUserId)
    )
  )

  return linkThirdPartyToProfileEvent
}

export function createMintEvent(_userAddress: Address, _pseudo: string): Mint {
  let mintEvent = changetype<Mint>(newMockEvent())

  mintEvent.parameters = new Array()

  mintEvent.parameters.push(
    new ethereum.EventParam(
      "_userAddress",
      ethereum.Value.fromAddress(_userAddress)
    )
  )
  mintEvent.parameters.push(
    new ethereum.EventParam("_pseudo", ethereum.Value.fromString(_pseudo))
  )

  return mintEvent
}

export function createOwnershipTransferredEvent(
  user: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createRemoveOperatorEvent(_operator: Address): RemoveOperator {
  let removeOperatorEvent = changetype<RemoveOperator>(newMockEvent())

  removeOperatorEvent.parameters = new Array()

  removeOperatorEvent.parameters.push(
    new ethereum.EventParam("_operator", ethereum.Value.fromAddress(_operator))
  )

  return removeOperatorEvent
}

export function createTransferBatchEvent(
  operator: Address,
  from: Address,
  to: Address,
  ids: Array<BigInt>,
  amounts: Array<BigInt>
): TransferBatch {
  let transferBatchEvent = changetype<TransferBatch>(newMockEvent())

  transferBatchEvent.parameters = new Array()

  transferBatchEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  transferBatchEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferBatchEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferBatchEvent.parameters.push(
    new ethereum.EventParam("ids", ethereum.Value.fromUnsignedBigIntArray(ids))
  )
  transferBatchEvent.parameters.push(
    new ethereum.EventParam(
      "amounts",
      ethereum.Value.fromUnsignedBigIntArray(amounts)
    )
  )

  return transferBatchEvent
}

export function createTransferSingleEvent(
  operator: Address,
  from: Address,
  to: Address,
  id: BigInt,
  amount: BigInt
): TransferSingle {
  let transferSingleEvent = changetype<TransferSingle>(newMockEvent())

  transferSingleEvent.parameters = new Array()

  transferSingleEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  transferSingleEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferSingleEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferSingleEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  transferSingleEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return transferSingleEvent
}

export function createURIEvent(value: string, id: BigInt): URI {
  let uriEvent = changetype<URI>(newMockEvent())

  uriEvent.parameters = new Array()

  uriEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromString(value))
  )
  uriEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )

  return uriEvent
}

export function createUnlinkThirdPartyToProfileEvent(
  _userAddress: Address,
  _thirdPartyId: BigInt
): UnlinkThirdPartyToProfile {
  let unlinkThirdPartyToProfileEvent = changetype<UnlinkThirdPartyToProfile>(
    newMockEvent()
  )

  unlinkThirdPartyToProfileEvent.parameters = new Array()

  unlinkThirdPartyToProfileEvent.parameters.push(
    new ethereum.EventParam(
      "_userAddress",
      ethereum.Value.fromAddress(_userAddress)
    )
  )
  unlinkThirdPartyToProfileEvent.parameters.push(
    new ethereum.EventParam(
      "_thirdPartyId",
      ethereum.Value.fromUnsignedBigInt(_thirdPartyId)
    )
  )

  return unlinkThirdPartyToProfileEvent
}

export function createUpdateEvent(
  _userAddress: Address,
  _pseudo: string
): Update {
  let updateEvent = changetype<Update>(newMockEvent())

  updateEvent.parameters = new Array()

  updateEvent.parameters.push(
    new ethereum.EventParam(
      "_userAddress",
      ethereum.Value.fromAddress(_userAddress)
    )
  )
  updateEvent.parameters.push(
    new ethereum.EventParam("_pseudo", ethereum.Value.fromString(_pseudo))
  )

  return updateEvent
}
