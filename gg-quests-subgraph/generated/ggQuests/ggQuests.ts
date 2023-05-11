// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class AddGame extends ethereum.Event {
  get params(): AddGame__Params {
    return new AddGame__Params(this);
  }
}

export class AddGame__Params {
  _event: AddGame;

  constructor(event: AddGame) {
    this._event = event;
  }

  get gameName(): string {
    return this._event.parameters[0].value.toString();
  }

  get gameId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class AddOperator extends ethereum.Event {
  get params(): AddOperator__Params {
    return new AddOperator__Params(this);
  }
}

export class AddOperator__Params {
  _event: AddOperator;

  constructor(event: AddOperator) {
    this._event = event;
  }

  get _operator(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class CreateQuest extends ethereum.Event {
  get params(): CreateQuest__Params {
    return new CreateQuest__Params(this);
  }
}

export class CreateQuest__Params {
  _event: CreateQuest;

  constructor(event: CreateQuest) {
    this._event = event;
  }

  get questID(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get gameName(): string {
    return this._event.parameters[1].value.toString();
  }
}

export class RemoveOperator extends ethereum.Event {
  get params(): RemoveOperator__Params {
    return new RemoveOperator__Params(this);
  }
}

export class RemoveOperator__Params {
  _event: RemoveOperator;

  constructor(event: RemoveOperator) {
    this._event = event;
  }

  get _operator(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class ggQuests extends ethereum.SmartContract {
  static bind(address: Address): ggQuests {
    return new ggQuests("ggQuests", address);
  }

  addGame(_gameName: string): BigInt {
    let result = super.call("addGame", "addGame(string):(uint256)", [
      ethereum.Value.fromString(_gameName)
    ]);

    return result[0].toBigInt();
  }

  try_addGame(_gameName: string): ethereum.CallResult<BigInt> {
    let result = super.tryCall("addGame", "addGame(string):(uint256)", [
      ethereum.Value.fromString(_gameName)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  createQuest(_reputationReward: BigInt, _gameId: BigInt): BigInt {
    let result = super.call(
      "createQuest",
      "createQuest(uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(_reputationReward),
        ethereum.Value.fromUnsignedBigInt(_gameId)
      ]
    );

    return result[0].toBigInt();
  }

  try_createQuest(
    _reputationReward: BigInt,
    _gameId: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "createQuest",
      "createQuest(uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(_reputationReward),
        ethereum.Value.fromUnsignedBigInt(_gameId)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  gameIdToQuestIds(param0: BigInt, param1: BigInt): BigInt {
    let result = super.call(
      "gameIdToQuestIds",
      "gameIdToQuestIds(uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );

    return result[0].toBigInt();
  }

  try_gameIdToQuestIds(
    param0: BigInt,
    param1: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "gameIdToQuestIds",
      "gameIdToQuestIds(uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  games(param0: BigInt): string {
    let result = super.call("games", "games(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toString();
  }

  try_games(param0: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall("games", "games(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  gamesMetadataBaseURI(): string {
    let result = super.call(
      "gamesMetadataBaseURI",
      "gamesMetadataBaseURI():(string)",
      []
    );

    return result[0].toString();
  }

  try_gamesMetadataBaseURI(): ethereum.CallResult<string> {
    let result = super.tryCall(
      "gamesMetadataBaseURI",
      "gamesMetadataBaseURI():(string)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  getGames(): Array<string> {
    let result = super.call("getGames", "getGames():(string[])", []);

    return result[0].toStringArray();
  }

  try_getGames(): ethereum.CallResult<Array<string>> {
    let result = super.tryCall("getGames", "getGames():(string[])", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toStringArray());
  }

  getQuestAddress(_questId: BigInt): Address {
    let result = super.call(
      "getQuestAddress",
      "getQuestAddress(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(_questId)]
    );

    return result[0].toAddress();
  }

  try_getQuestAddress(_questId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getQuestAddress",
      "getQuestAddress(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(_questId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getQuestIdsByGame(_gameId: BigInt): Array<BigInt> {
    let result = super.call(
      "getQuestIdsByGame",
      "getQuestIdsByGame(uint256):(uint256[])",
      [ethereum.Value.fromUnsignedBigInt(_gameId)]
    );

    return result[0].toBigIntArray();
  }

  try_getQuestIdsByGame(_gameId: BigInt): ethereum.CallResult<Array<BigInt>> {
    let result = super.tryCall(
      "getQuestIdsByGame",
      "getQuestIdsByGame(uint256):(uint256[])",
      [ethereum.Value.fromUnsignedBigInt(_gameId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigIntArray());
  }

  getQuestURI(_questId: BigInt): string {
    let result = super.call("getQuestURI", "getQuestURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(_questId)
    ]);

    return result[0].toString();
  }

  try_getQuestURI(_questId: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall("getQuestURI", "getQuestURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(_questId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  getQuests(): Array<Address> {
    let result = super.call("getQuests", "getQuests():(address[])", []);

    return result[0].toAddressArray();
  }

  try_getQuests(): ethereum.CallResult<Array<Address>> {
    let result = super.tryCall("getQuests", "getQuests():(address[])", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddressArray());
  }

  getUrlMetadata(_gameId: BigInt): string {
    let result = super.call(
      "getUrlMetadata",
      "getUrlMetadata(uint256):(string)",
      [ethereum.Value.fromUnsignedBigInt(_gameId)]
    );

    return result[0].toString();
  }

  try_getUrlMetadata(_gameId: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall(
      "getUrlMetadata",
      "getUrlMetadata(uint256):(string)",
      [ethereum.Value.fromUnsignedBigInt(_gameId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  operators(param0: Address): boolean {
    let result = super.call("operators", "operators(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBoolean();
  }

  try_operators(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("operators", "operators(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  questIdToGameId(param0: BigInt): BigInt {
    let result = super.call(
      "questIdToGameId",
      "questIdToGameId(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return result[0].toBigInt();
  }

  try_questIdToGameId(param0: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "questIdToGameId",
      "questIdToGameId(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  questsMetadataBaseURI(): string {
    let result = super.call(
      "questsMetadataBaseURI",
      "questsMetadataBaseURI():(string)",
      []
    );

    return result[0].toString();
  }

  try_questsMetadataBaseURI(): ethereum.CallResult<string> {
    let result = super.tryCall(
      "questsMetadataBaseURI",
      "questsMetadataBaseURI():(string)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _ggProfiles(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _questsMetadataBaseURI(): string {
    return this._call.inputValues[1].value.toString();
  }

  get _gamesMetadataBaseURI(): string {
    return this._call.inputValues[2].value.toString();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AddGameCall extends ethereum.Call {
  get inputs(): AddGameCall__Inputs {
    return new AddGameCall__Inputs(this);
  }

  get outputs(): AddGameCall__Outputs {
    return new AddGameCall__Outputs(this);
  }
}

export class AddGameCall__Inputs {
  _call: AddGameCall;

  constructor(call: AddGameCall) {
    this._call = call;
  }

  get _gameName(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class AddGameCall__Outputs {
  _call: AddGameCall;

  constructor(call: AddGameCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class AddOperatorCall extends ethereum.Call {
  get inputs(): AddOperatorCall__Inputs {
    return new AddOperatorCall__Inputs(this);
  }

  get outputs(): AddOperatorCall__Outputs {
    return new AddOperatorCall__Outputs(this);
  }
}

export class AddOperatorCall__Inputs {
  _call: AddOperatorCall;

  constructor(call: AddOperatorCall) {
    this._call = call;
  }

  get _operator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class AddOperatorCall__Outputs {
  _call: AddOperatorCall;

  constructor(call: AddOperatorCall) {
    this._call = call;
  }
}

export class AddQuestOperatorCall extends ethereum.Call {
  get inputs(): AddQuestOperatorCall__Inputs {
    return new AddQuestOperatorCall__Inputs(this);
  }

  get outputs(): AddQuestOperatorCall__Outputs {
    return new AddQuestOperatorCall__Outputs(this);
  }
}

export class AddQuestOperatorCall__Inputs {
  _call: AddQuestOperatorCall;

  constructor(call: AddQuestOperatorCall) {
    this._call = call;
  }

  get _questId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _operator(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class AddQuestOperatorCall__Outputs {
  _call: AddQuestOperatorCall;

  constructor(call: AddQuestOperatorCall) {
    this._call = call;
  }
}

export class CreateQuestCall extends ethereum.Call {
  get inputs(): CreateQuestCall__Inputs {
    return new CreateQuestCall__Inputs(this);
  }

  get outputs(): CreateQuestCall__Outputs {
    return new CreateQuestCall__Outputs(this);
  }
}

export class CreateQuestCall__Inputs {
  _call: CreateQuestCall;

  constructor(call: CreateQuestCall) {
    this._call = call;
  }

  get _reputationReward(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _gameId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class CreateQuestCall__Outputs {
  _call: CreateQuestCall;

  constructor(call: CreateQuestCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class RemoveOperatorCall extends ethereum.Call {
  get inputs(): RemoveOperatorCall__Inputs {
    return new RemoveOperatorCall__Inputs(this);
  }

  get outputs(): RemoveOperatorCall__Outputs {
    return new RemoveOperatorCall__Outputs(this);
  }
}

export class RemoveOperatorCall__Inputs {
  _call: RemoveOperatorCall;

  constructor(call: RemoveOperatorCall) {
    this._call = call;
  }

  get _operator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class RemoveOperatorCall__Outputs {
  _call: RemoveOperatorCall;

  constructor(call: RemoveOperatorCall) {
    this._call = call;
  }
}

export class RemoveQuestOperatorCall extends ethereum.Call {
  get inputs(): RemoveQuestOperatorCall__Inputs {
    return new RemoveQuestOperatorCall__Inputs(this);
  }

  get outputs(): RemoveQuestOperatorCall__Outputs {
    return new RemoveQuestOperatorCall__Outputs(this);
  }
}

export class RemoveQuestOperatorCall__Inputs {
  _call: RemoveQuestOperatorCall;

  constructor(call: RemoveQuestOperatorCall) {
    this._call = call;
  }

  get _questId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _operator(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class RemoveQuestOperatorCall__Outputs {
  _call: RemoveQuestOperatorCall;

  constructor(call: RemoveQuestOperatorCall) {
    this._call = call;
  }
}
