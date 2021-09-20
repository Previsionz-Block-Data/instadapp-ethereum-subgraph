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

export class LogCast extends ethereum.Event {
  get params(): LogCast__Params {
    return new LogCast__Params(this);
  }
}

export class LogCast__Params {
  _event: LogCast;

  constructor(event: LogCast) {
    this._event = event;
  }

  get origin(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get sender(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class LogDisable extends ethereum.Event {
  get params(): LogDisable__Params {
    return new LogDisable__Params(this);
  }
}

export class LogDisable__Params {
  _event: LogDisable;

  constructor(event: LogDisable) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class LogEnable extends ethereum.Event {
  get params(): LogEnable__Params {
    return new LogEnable__Params(this);
  }
}

export class LogEnable__Params {
  _event: LogEnable;

  constructor(event: LogEnable) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class LogSwitchShield extends ethereum.Event {
  get params(): LogSwitchShield__Params {
    return new LogSwitchShield__Params(this);
  }
}

export class LogSwitchShield__Params {
  _event: LogSwitchShield;

  constructor(event: LogSwitchShield) {
    this._event = event;
  }

  get _shield(): boolean {
    return this._event.parameters[0].value.toBoolean();
  }
}

export class InstaAccountV1 extends ethereum.SmartContract {
  static bind(address: Address): InstaAccountV1 {
    return new InstaAccountV1("InstaAccountV1", address);
  }

  instaIndex(): Address {
    let result = super.call("instaIndex", "instaIndex():(address)", []);

    return result[0].toAddress();
  }

  try_instaIndex(): ethereum.CallResult<Address> {
    let result = super.tryCall("instaIndex", "instaIndex():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  isAuth(user: Address): boolean {
    let result = super.call("isAuth", "isAuth(address):(bool)", [
      ethereum.Value.fromAddress(user)
    ]);

    return result[0].toBoolean();
  }

  try_isAuth(user: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("isAuth", "isAuth(address):(bool)", [
      ethereum.Value.fromAddress(user)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  shield(): boolean {
    let result = super.call("shield", "shield():(bool)", []);

    return result[0].toBoolean();
  }

  try_shield(): ethereum.CallResult<boolean> {
    let result = super.tryCall("shield", "shield():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  version(): BigInt {
    let result = super.call("version", "version():(uint256)", []);

    return result[0].toBigInt();
  }

  try_version(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("version", "version():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class CastCall extends ethereum.Call {
  get inputs(): CastCall__Inputs {
    return new CastCall__Inputs(this);
  }

  get outputs(): CastCall__Outputs {
    return new CastCall__Outputs(this);
  }
}

export class CastCall__Inputs {
  _call: CastCall;

  constructor(call: CastCall) {
    this._call = call;
  }

  get _targets(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }

  get _datas(): Array<Bytes> {
    return this._call.inputValues[1].value.toBytesArray();
  }

  get _origin(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class CastCall__Outputs {
  _call: CastCall;

  constructor(call: CastCall) {
    this._call = call;
  }
}

export class DisableCall extends ethereum.Call {
  get inputs(): DisableCall__Inputs {
    return new DisableCall__Inputs(this);
  }

  get outputs(): DisableCall__Outputs {
    return new DisableCall__Outputs(this);
  }
}

export class DisableCall__Inputs {
  _call: DisableCall;

  constructor(call: DisableCall) {
    this._call = call;
  }

  get user(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class DisableCall__Outputs {
  _call: DisableCall;

  constructor(call: DisableCall) {
    this._call = call;
  }
}

export class EnableCall extends ethereum.Call {
  get inputs(): EnableCall__Inputs {
    return new EnableCall__Inputs(this);
  }

  get outputs(): EnableCall__Outputs {
    return new EnableCall__Outputs(this);
  }
}

export class EnableCall__Inputs {
  _call: EnableCall;

  constructor(call: EnableCall) {
    this._call = call;
  }

  get user(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class EnableCall__Outputs {
  _call: EnableCall;

  constructor(call: EnableCall) {
    this._call = call;
  }
}

export class SwitchShieldCall extends ethereum.Call {
  get inputs(): SwitchShieldCall__Inputs {
    return new SwitchShieldCall__Inputs(this);
  }

  get outputs(): SwitchShieldCall__Outputs {
    return new SwitchShieldCall__Outputs(this);
  }
}

export class SwitchShieldCall__Inputs {
  _call: SwitchShieldCall;

  constructor(call: SwitchShieldCall) {
    this._call = call;
  }

  get _shield(): boolean {
    return this._call.inputValues[0].value.toBoolean();
  }
}

export class SwitchShieldCall__Outputs {
  _call: SwitchShieldCall;

  constructor(call: SwitchShieldCall) {
    this._call = call;
  }
}