import {
  AddOperator as AddOperatorEvent,
  AddSupportedThirdParty as AddSupportedThirdPartyEvent,
  ApprovalForAll as ApprovalForAllEvent,
  Burn as BurnEvent,
  DecreaseReputation as DecreaseReputationEvent,
  IncreaseReputation as IncreaseReputationEvent,
  LinkThirdPartyToProfile as LinkThirdPartyToProfileEvent,
  Mint as MintEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  RemoveOperator as RemoveOperatorEvent,
  TransferBatch as TransferBatchEvent,
  TransferSingle as TransferSingleEvent,
  URI as URIEvent,
  UnlinkThirdPartyToProfile as UnlinkThirdPartyToProfileEvent,
  Update as UpdateEvent
} from "../generated/ggProfiles/ggProfiles"
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
} from "../generated/schema"

export function handleAddOperator(event: AddOperatorEvent): void {
  let entity = new AddOperator(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._operator = event.params._operator

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleAddSupportedThirdParty(
  event: AddSupportedThirdPartyEvent
): void {
  let entity = new AddSupportedThirdParty(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._name = event.params._name

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleApprovalForAll(event: ApprovalForAllEvent): void {
  let entity = new ApprovalForAll(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.operator = event.params.operator
  entity.approved = event.params.approved

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBurn(event: BurnEvent): void {
  let entity = new Burn(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._userAddress = event.params._userAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDecreaseReputation(event: DecreaseReputationEvent): void {
  let entity = new DecreaseReputation(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._userAddress = event.params._userAddress
  entity._amount = event.params._amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleIncreaseReputation(event: IncreaseReputationEvent): void {
  let entity = new IncreaseReputation(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._userAddress = event.params._userAddress
  entity._amount = event.params._amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleLinkThirdPartyToProfile(
  event: LinkThirdPartyToProfileEvent
): void {
  let entity = new LinkThirdPartyToProfile(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._userAddress = event.params._userAddress
  entity._thirdPartyId = event.params._thirdPartyId
  entity._thirdPartyUserId = event.params._thirdPartyUserId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMint(event: MintEvent): void {
  let entity = new Mint(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._userAddress = event.params._userAddress
  entity._pseudo = event.params._pseudo

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRemoveOperator(event: RemoveOperatorEvent): void {
  let entity = new RemoveOperator(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._operator = event.params._operator

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransferBatch(event: TransferBatchEvent): void {
  let entity = new TransferBatch(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.operator = event.params.operator
  entity.from = event.params.from
  entity.to = event.params.to
  entity.ids = event.params.ids
  entity.amounts = event.params.amounts

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransferSingle(event: TransferSingleEvent): void {
  let entity = new TransferSingle(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.operator = event.params.operator
  entity.from = event.params.from
  entity.to = event.params.to
  entity.ggProfiles_id = event.params.id
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleURI(event: URIEvent): void {
  let entity = new URI(event.transaction.hash.concatI32(event.logIndex.toI32()))
  entity.value = event.params.value
  entity.ggProfiles_id = event.params.id

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUnlinkThirdPartyToProfile(
  event: UnlinkThirdPartyToProfileEvent
): void {
  let entity = new UnlinkThirdPartyToProfile(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._userAddress = event.params._userAddress
  entity._thirdPartyId = event.params._thirdPartyId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUpdate(event: UpdateEvent): void {
  let entity = new Update(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._userAddress = event.params._userAddress
  entity._pseudo = event.params._pseudo

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
