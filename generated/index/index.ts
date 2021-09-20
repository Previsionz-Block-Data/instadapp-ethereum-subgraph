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

export class LogAccountCreated extends ethereum.Event {
  get params(): LogAccountCreated__Params {
    return new LogAccountCreated__Params(this);
  }
}

export class LogAccountCreated__Params {
  _event: LogAccountCreated;

  constructor(event: LogAccountCreated) {
    this._event = event;
  }

  get sender(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get owner(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get account(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get origin(): Address {
    return this._event.parameters[3].value.toAddress();
  }
}

export class LogNewAccount extends ethereum.Event {
  get params(): LogNewAccount__Params {
    return new LogNewAccount__Params(this);
  }
}

export class LogNewAccount__Params {
  _event: LogNewAccount;

  constructor(event: LogNewAccount) {
    this._event = event;
  }

  get _newAccount(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _connectors(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _check(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class LogNewCheck extends ethereum.Event {
  get params(): LogNewCheck__Params {
    return new LogNewCheck__Params(this);
  }
}

export class LogNewCheck__Params {
  _event: LogNewCheck;

  constructor(event: LogNewCheck) {
    this._event = event;
  }

  get accountVersion(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get check(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class LogNewMaster extends ethereum.Event {
  get params(): LogNewMaster__Params {
    return new LogNewMaster__Params(this);
  }
}

export class LogNewMaster__Params {
  _event: LogNewMaster;

  constructor(event: LogNewMaster) {
    this._event = event;
  }

  get master(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class LogUpdateMaster extends ethereum.Event {
  get params(): LogUpdateMaster__Params {
    return new LogUpdateMaster__Params(this);
  }
}

export class LogUpdateMaster__Params {
  _event: LogUpdateMaster;

  constructor(event: LogUpdateMaster) {
    this._event = event;
  }

  get master(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class index extends ethereum.SmartContract {
  static bind(address: Address): index {
    return new index("index", address);
  }

  account(param0: BigInt): Address {
    let result = super.call("account", "account(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toAddress();
  }

  try_account(param0: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall("account", "account(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  build(_owner: Address, accountVersion: BigInt, _origin: Address): Address {
    let result = super.call(
      "build",
      "build(address,uint256,address):(address)",
      [
        ethereum.Value.fromAddress(_owner),
        ethereum.Value.fromUnsignedBigInt(accountVersion),
        ethereum.Value.fromAddress(_origin)
      ]
    );

    return result[0].toAddress();
  }

  try_build(
    _owner: Address,
    accountVersion: BigInt,
    _origin: Address
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "build",
      "build(address,uint256,address):(address)",
      [
        ethereum.Value.fromAddress(_owner),
        ethereum.Value.fromUnsignedBigInt(accountVersion),
        ethereum.Value.fromAddress(_origin)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  check(param0: BigInt): Address {
    let result = super.call("check", "check(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toAddress();
  }

  try_check(param0: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall("check", "check(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  connectors(param0: BigInt): Address {
    let result = super.call("connectors", "connectors(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toAddress();
  }

  try_connectors(param0: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall("connectors", "connectors(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  isClone(version: BigInt, query: Address): boolean {
    let result = super.call("isClone", "isClone(uint256,address):(bool)", [
      ethereum.Value.fromUnsignedBigInt(version),
      ethereum.Value.fromAddress(query)
    ]);

    return result[0].toBoolean();
  }

  try_isClone(version: BigInt, query: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("isClone", "isClone(uint256,address):(bool)", [
      ethereum.Value.fromUnsignedBigInt(version),
      ethereum.Value.fromAddress(query)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  list(): Address {
    let result = super.call("list", "list():(address)", []);

    return result[0].toAddress();
  }

  try_list(): ethereum.CallResult<Address> {
    let result = super.tryCall("list", "list():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  master(): Address {
    let result = super.call("master", "master():(address)", []);

    return result[0].toAddress();
  }

  try_master(): ethereum.CallResult<Address> {
    let result = super.tryCall("master", "master():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  versionCount(): BigInt {
    let result = super.call("versionCount", "versionCount():(uint256)", []);

    return result[0].toBigInt();
  }

  try_versionCount(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("versionCount", "versionCount():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class AddNewAccountCall extends ethereum.Call {
  get inputs(): AddNewAccountCall__Inputs {
    return new AddNewAccountCall__Inputs(this);
  }

  get outputs(): AddNewAccountCall__Outputs {
    return new AddNewAccountCall__Outputs(this);
  }
}

export class AddNewAccountCall__Inputs {
  _call: AddNewAccountCall;

  constructor(call: AddNewAccountCall) {
    this._call = call;
  }

  get _newAccount(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _connectors(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _check(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class AddNewAccountCall__Outputs {
  _call: AddNewAccountCall;

  constructor(call: AddNewAccountCall) {
    this._call = call;
  }
}

export class BuildCall extends ethereum.Call {
  get inputs(): BuildCall__Inputs {
    return new BuildCall__Inputs(this);
  }

  get outputs(): BuildCall__Outputs {
    return new BuildCall__Outputs(this);
  }
}

export class BuildCall__Inputs {
  _call: BuildCall;

  constructor(call: BuildCall) {
    this._call = call;
  }

  get _owner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get accountVersion(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _origin(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class BuildCall__Outputs {
  _call: BuildCall;

  constructor(call: BuildCall) {
    this._call = call;
  }

  get _account(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}

export class BuildWithCastCall extends ethereum.Call {
  get inputs(): BuildWithCastCall__Inputs {
    return new BuildWithCastCall__Inputs(this);
  }

  get outputs(): BuildWithCastCall__Outputs {
    return new BuildWithCastCall__Outputs(this);
  }
}

export class BuildWithCastCall__Inputs {
  _call: BuildWithCastCall;

  constructor(call: BuildWithCastCall) {
    this._call = call;
  }

  get _owner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get accountVersion(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _targets(): Array<Address> {
    return this._call.inputValues[2].value.toAddressArray();
  }

  get _datas(): Array<Bytes> {
    return this._call.inputValues[3].value.toBytesArray();
  }

  get _origin(): Address {
    return this._call.inputValues[4].value.toAddress();
  }
}

export class BuildWithCastCall__Outputs {
  _call: BuildWithCastCall;

  constructor(call: BuildWithCastCall) {
    this._call = call;
  }

  get _account(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}

export class ChangeCheckCall extends ethereum.Call {
  get inputs(): ChangeCheckCall__Inputs {
    return new ChangeCheckCall__Inputs(this);
  }

  get outputs(): ChangeCheckCall__Outputs {
    return new ChangeCheckCall__Outputs(this);
  }
}

export class ChangeCheckCall__Inputs {
  _call: ChangeCheckCall;

  constructor(call: ChangeCheckCall) {
    this._call = call;
  }

  get accountVersion(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _newCheck(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class ChangeCheckCall__Outputs {
  _call: ChangeCheckCall;

  constructor(call: ChangeCheckCall) {
    this._call = call;
  }
}

export class ChangeMasterCall extends ethereum.Call {
  get inputs(): ChangeMasterCall__Inputs {
    return new ChangeMasterCall__Inputs(this);
  }

  get outputs(): ChangeMasterCall__Outputs {
    return new ChangeMasterCall__Outputs(this);
  }
}

export class ChangeMasterCall__Inputs {
  _call: ChangeMasterCall;

  constructor(call: ChangeMasterCall) {
    this._call = call;
  }

  get _newMaster(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ChangeMasterCall__Outputs {
  _call: ChangeMasterCall;

  constructor(call: ChangeMasterCall) {
    this._call = call;
  }
}

export class SetBasicsCall extends ethereum.Call {
  get inputs(): SetBasicsCall__Inputs {
    return new SetBasicsCall__Inputs(this);
  }

  get outputs(): SetBasicsCall__Outputs {
    return new SetBasicsCall__Outputs(this);
  }
}

export class SetBasicsCall__Inputs {
  _call: SetBasicsCall;

  constructor(call: SetBasicsCall) {
    this._call = call;
  }

  get _master(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _list(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _account(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _connectors(): Address {
    return this._call.inputValues[3].value.toAddress();
  }
}

export class SetBasicsCall__Outputs {
  _call: SetBasicsCall;

  constructor(call: SetBasicsCall) {
    this._call = call;
  }
}

export class UpdateMasterCall extends ethereum.Call {
  get inputs(): UpdateMasterCall__Inputs {
    return new UpdateMasterCall__Inputs(this);
  }

  get outputs(): UpdateMasterCall__Outputs {
    return new UpdateMasterCall__Outputs(this);
  }
}

export class UpdateMasterCall__Inputs {
  _call: UpdateMasterCall;

  constructor(call: UpdateMasterCall) {
    this._call = call;
  }
}

export class UpdateMasterCall__Outputs {
  _call: UpdateMasterCall;

  constructor(call: UpdateMasterCall) {
    this._call = call;
  }
}
