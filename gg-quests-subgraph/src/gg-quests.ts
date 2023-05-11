import {
  AddGame as AddGameEvent,
  AddOperator as AddOperatorEvent,
  CreateQuest as CreateQuestEvent,
  RemoveOperator as RemoveOperatorEvent
} from "../generated/ggQuests/ggQuests"
import {
  AddGame,
  AddOperator,
  CreateQuest,
  RemoveOperator
} from "../generated/schema"

export function handleAddGame(event: AddGameEvent): void {
  let entity = new AddGame(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.gameName = event.params.gameName
  entity.gameId = event.params.gameId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

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

export function handleCreateQuest(event: CreateQuestEvent): void {
  let entity = new CreateQuest(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.questID = event.params.questID
  entity.gameName = event.params.gameName

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
