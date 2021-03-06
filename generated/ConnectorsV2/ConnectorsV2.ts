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

export class LogConnectorAdded extends ethereum.Event {
  get params(): LogConnectorAdded__Params {
    return new LogConnectorAdded__Params(this);
  }
}

export class LogConnectorAdded__Params {
  _event: LogConnectorAdded;

  constructor(event: LogConnectorAdded) {
    this._event = event;
  }

  get connectorNameHash(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get connectorName(): string {
    return this._event.parameters[1].value.toString();
  }

  get connector(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class LogConnectorRemoved extends ethereum.Event {
  get params(): LogConnectorRemoved__Params {
    return new LogConnectorRemoved__Params(this);
  }
}

export class LogConnectorRemoved__Params {
  _event: LogConnectorRemoved;

  constructor(event: LogConnectorRemoved) {
    this._event = event;
  }

  get connectorNameHash(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get connectorName(): string {
    return this._event.parameters[1].value.toString();
  }

  get connector(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class LogConnectorUpdated extends ethereum.Event {
  get params(): LogConnectorUpdated__Params {
    return new LogConnectorUpdated__Params(this);
  }
}

export class LogConnectorUpdated__Params {
  _event: LogConnectorUpdated;

  constructor(event: LogConnectorUpdated) {
    this._event = event;
  }

  get connectorNameHash(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get connectorName(): string {
    return this._event.parameters[1].value.toString();
  }

  get oldConnector(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get newConnector(): Address {
    return this._event.parameters[3].value.toAddress();
  }
}

export class LogController extends ethereum.Event {
  get params(): LogController__Params {
    return new LogController__Params(this);
  }
}

export class LogController__Params {
  _event: LogController;

  constructor(event: LogController) {
    this._event = event;
  }

  get addr(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get isChief(): boolean {
    return this._event.parameters[1].value.toBoolean();
  }
}

export class ConnectorsV2__isConnectorsResult {
  value0: boolean;
  value1: Array<Address>;

  constructor(value0: boolean, value1: Array<Address>) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromBoolean(this.value0));
    map.set("value1", ethereum.Value.fromAddressArray(this.value1));
    return map;
  }
}

export class ConnectorsV2 extends ethereum.SmartContract {
  static bind(address: Address): ConnectorsV2 {
    return new ConnectorsV2("ConnectorsV2", address);
  }

  chief(param0: Address): boolean {
    let result = super.call("chief", "chief(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBoolean();
  }

  try_chief(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("chief", "chief(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  connectors(param0: string): Address {
    let result = super.call("connectors", "connectors(string):(address)", [
      ethereum.Value.fromString(param0)
    ]);

    return result[0].toAddress();
  }

  try_connectors(param0: string): ethereum.CallResult<Address> {
    let result = super.tryCall("connectors", "connectors(string):(address)", [
      ethereum.Value.fromString(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
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

  isConnectors(
    _connectorNames: Array<string>
  ): ConnectorsV2__isConnectorsResult {
    let result = super.call(
      "isConnectors",
      "isConnectors(string[]):(bool,address[])",
      [ethereum.Value.fromStringArray(_connectorNames)]
    );

    return new ConnectorsV2__isConnectorsResult(
      result[0].toBoolean(),
      result[1].toAddressArray()
    );
  }

  try_isConnectors(
    _connectorNames: Array<string>
  ): ethereum.CallResult<ConnectorsV2__isConnectorsResult> {
    let result = super.tryCall(
      "isConnectors",
      "isConnectors(string[]):(bool,address[])",
      [ethereum.Value.fromStringArray(_connectorNames)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new ConnectorsV2__isConnectorsResult(
        value[0].toBoolean(),
        value[1].toAddressArray()
      )
    );
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

  get _instaIndex(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AddConnectorsCall extends ethereum.Call {
  get inputs(): AddConnectorsCall__Inputs {
    return new AddConnectorsCall__Inputs(this);
  }

  get outputs(): AddConnectorsCall__Outputs {
    return new AddConnectorsCall__Outputs(this);
  }
}

export class AddConnectorsCall__Inputs {
  _call: AddConnectorsCall;

  constructor(call: AddConnectorsCall) {
    this._call = call;
  }

  get _connectorNames(): Array<string> {
    return this._call.inputValues[0].value.toStringArray();
  }

  get _connectors(): Array<Address> {
    return this._call.inputValues[1].value.toAddressArray();
  }
}

export class AddConnectorsCall__Outputs {
  _call: AddConnectorsCall;

  constructor(call: AddConnectorsCall) {
    this._call = call;
  }
}

export class RemoveConnectorsCall extends ethereum.Call {
  get inputs(): RemoveConnectorsCall__Inputs {
    return new RemoveConnectorsCall__Inputs(this);
  }

  get outputs(): RemoveConnectorsCall__Outputs {
    return new RemoveConnectorsCall__Outputs(this);
  }
}

export class RemoveConnectorsCall__Inputs {
  _call: RemoveConnectorsCall;

  constructor(call: RemoveConnectorsCall) {
    this._call = call;
  }

  get _connectorNames(): Array<string> {
    return this._call.inputValues[0].value.toStringArray();
  }
}

export class RemoveConnectorsCall__Outputs {
  _call: RemoveConnectorsCall;

  constructor(call: RemoveConnectorsCall) {
    this._call = call;
  }
}

export class ToggleChiefCall extends ethereum.Call {
  get inputs(): ToggleChiefCall__Inputs {
    return new ToggleChiefCall__Inputs(this);
  }

  get outputs(): ToggleChiefCall__Outputs {
    return new ToggleChiefCall__Outputs(this);
  }
}

export class ToggleChiefCall__Inputs {
  _call: ToggleChiefCall;

  constructor(call: ToggleChiefCall) {
    this._call = call;
  }

  get _chiefAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ToggleChiefCall__Outputs {
  _call: ToggleChiefCall;

  constructor(call: ToggleChiefCall) {
    this._call = call;
  }
}

export class UpdateConnectorsCall extends ethereum.Call {
  get inputs(): UpdateConnectorsCall__Inputs {
    return new UpdateConnectorsCall__Inputs(this);
  }

  get outputs(): UpdateConnectorsCall__Outputs {
    return new UpdateConnectorsCall__Outputs(this);
  }
}

export class UpdateConnectorsCall__Inputs {
  _call: UpdateConnectorsCall;

  constructor(call: UpdateConnectorsCall) {
    this._call = call;
  }

  get _connectorNames(): Array<string> {
    return this._call.inputValues[0].value.toStringArray();
  }

  get _connectors(): Array<Address> {
    return this._call.inputValues[1].value.toAddressArray();
  }
}

export class UpdateConnectorsCall__Outputs {
  _call: UpdateConnectorsCall;

  constructor(call: UpdateConnectorsCall) {
    this._call = call;
  }
}
