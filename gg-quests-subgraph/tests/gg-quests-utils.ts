import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  AddGame,
  AddOperator,
  CreateQuest,
  RemoveOperator
} from "../generated/ggQuests/ggQuests"

export function createAddGameEvent(gameName: string, gameId: BigInt): AddGame {
  let addGameEvent = changetype<AddGame>(newMockEvent())

  addGameEvent.parameters = new Array()

  addGameEvent.parameters.push(
    new ethereum.EventParam("gameName", ethereum.Value.fromString(gameName))
  )
  addGameEvent.parameters.push(
    new ethereum.EventParam("gameId", ethereum.Value.fromUnsignedBigInt(gameId))
  )

  return addGameEvent
}

export function createAddOperatorEvent(_operator: Address): AddOperator {
  let addOperatorEvent = changetype<AddOperator>(newMockEvent())

  addOperatorEvent.parameters = new Array()

  addOperatorEvent.parameters.push(
    new ethereum.EventParam("_operator", ethereum.Value.fromAddress(_operator))
  )

  return addOperatorEvent
}

export function createCreateQuestEvent(
  questID: BigInt,
  gameName: string
): CreateQuest {
  let createQuestEvent = changetype<CreateQuest>(newMockEvent())

  createQuestEvent.parameters = new Array()

  createQuestEvent.parameters.push(
    new ethereum.EventParam(
      "questID",
      ethereum.Value.fromUnsignedBigInt(questID)
    )
  )
  createQuestEvent.parameters.push(
    new ethereum.EventParam("gameName", ethereum.Value.fromString(gameName))
  )

  return createQuestEvent
}

export function createRemoveOperatorEvent(_operator: Address): RemoveOperator {
  let removeOperatorEvent = changetype<RemoveOperator>(newMockEvent())

  removeOperatorEvent.parameters = new Array()

  removeOperatorEvent.parameters.push(
    new ethereum.EventParam("_operator", ethereum.Value.fromAddress(_operator))
  )

  return removeOperatorEvent
}
