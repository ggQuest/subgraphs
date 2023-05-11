import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { AddGame } from "../generated/schema"
import { AddGame as AddGameEvent } from "../generated/ggQuests/ggQuests"
import { handleAddGame } from "../src/gg-quests"
import { createAddGameEvent } from "./gg-quests-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let gameName = "Example string value"
    let gameId = BigInt.fromI32(234)
    let newAddGameEvent = createAddGameEvent(gameName, gameId)
    handleAddGame(newAddGameEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("AddGame created and stored", () => {
    assert.entityCount("AddGame", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "AddGame",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "gameName",
      "Example string value"
    )
    assert.fieldEquals(
      "AddGame",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "gameId",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
