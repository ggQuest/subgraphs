import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { AddOperator } from "../generated/schema"
import { AddOperator as AddOperatorEvent } from "../generated/ggProfiles/ggProfiles"
import { handleAddOperator } from "../src/gg-profiles"
import { createAddOperatorEvent } from "./gg-profiles-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let _operator = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newAddOperatorEvent = createAddOperatorEvent(_operator)
    handleAddOperator(newAddOperatorEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("AddOperator created and stored", () => {
    assert.entityCount("AddOperator", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "AddOperator",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_operator",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
