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

export class LogDisableUser extends ethereum.Event {
  get params(): LogDisableUser__Params {
    return new LogDisableUser__Params(this);
  }
}

export class LogDisableUser__Params {
  _event: LogDisableUser;

  constructor(event: LogDisableUser) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class LogEnableUser extends ethereum.Event {
  get params(): LogEnableUser__Params {
    return new LogEnableUser__Params(this);
  }
}

export class LogEnableUser__Params {
  _event: LogEnableUser;

  constructor(event: LogEnableUser) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

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

  get targetsNames(): Array<string> {
    return this._event.parameters[3].value.toStringArray();
  }

  get targets(): Array<Address> {
    return this._event.parameters[4].value.toAddressArray();
  }

  get eventNames(): Array<string> {
    return this._event.parameters[5].value.toStringArray();
  }

  get eventParams(): Array<Bytes> {
    return this._event.parameters[6].value.toBytesArray();
  }
}

export class LogCastMigrate extends ethereum.Event {
  get params(): LogCastMigrate__Params {
    return new LogCastMigrate__Params(this);
  }
}

export class LogCastMigrate__Params {
  _event: LogCastMigrate;

  constructor(event: LogCastMigrate) {
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

  get targetsNames(): Array<string> {
    return this._event.parameters[3].value.toStringArray();
  }

  get targets(): Array<Address> {
    return this._event.parameters[4].value.toAddressArray();
  }

  get eventNames(): Array<string> {
    return this._event.parameters[5].value.toStringArray();
  }

  get eventParams(): Array<Bytes> {
    return this._event.parameters[6].value.toBytesArray();
  }
}

export class InstaAccountV2 extends ethereum.SmartContract {
  static bind(address: Address): InstaAccountV2 {
    return new InstaAccountV2("InstaAccountV2", address);
  }
}
