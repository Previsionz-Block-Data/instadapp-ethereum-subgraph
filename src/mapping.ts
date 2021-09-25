//Graph-TS imports
import { BigInt, Bytes, log, store } from "@graphprotocol/graph-ts"

//Index Contract Imports
import {
  index,
  LogAccountCreated,
  LogNewAccount,
  LogNewCheck,
  LogNewMaster,
  LogUpdateMaster,
  SetBasicsCall
} from "../generated/index/index"

import { InstaAccountVersion } from "../generated/index/InstaAccountVersion"

//Import InstaAccountV1
import {
  //InstaAccountV1,
  LogEnable,
  LogDisable,
  LogCast,
  CastCall
} from "../generated/InstaAccountV1/InstaAccountV1"

//Import ConnectorsV2
import {
  LogConnectorAdded,
  LogConnectorUpdated,
  LogConnectorRemoved,
  LogController
} from "../generated/ConnectorsV2/ConnectorsV2"

import {
  LogAddImplementation,
  LogRemoveImplementation,
  LogSetDefaultImplementation
} from "../generated/InstaImplementations/InstaImplementations"

import {
  LogEnableUser,
  LogDisableUser
} from "../generated/InstaDefaultImplementation/InstaDefaultImplementation"

import {
  LogCast as LogCastV2
} from "../generated/InstaImplementationM1/InstaImplementationM1"

//Entities Import
import { AccountModule, DSA, Check, InstaIndex, Connector, Chief, Implementation, InstaImplementation, Cast, Spell} from "../generated/schema"

//Import Data Source Templates
import { InstaAccountV1 } from "../generated/templates"
import { InstaAccountV2 } from "../generated/templates"
import { decodeEvents, logAddAuthority, logRemoveAuthority } from "./helpers"

//Index-Area - New DSA
export function handleLogAccountCreated(event: LogAccountCreated): void{
  let versionBind = InstaAccountVersion.bind(event.params.account);
  let versionResult = versionBind.try_version();
  var version: BigInt;
  if (versionResult.reverted){
    log.warning("handleLogAccountCreated: versionResult got reverted for {}",[event.params.account.toHex()]);
  }else{
    version = versionResult.value;
  }

  let dsa = new DSA(event.params.account.toHex());
  dsa.initialOwner = event.params.owner;
  dsa.origin = event.params.origin;
  dsa.createdBy = event.params.sender;
  dsa.walletAddress = event.params.account;
  dsa.createdAt = event.block.timestamp;
  dsa.enabledAuthorities = new Array<Bytes>();
  dsa.version = version;
  if (version.toI32() == 1){
    InstaAccountV1.create(event.params.account);
  }else{
    InstaAccountV2.create(event.params.account);
  }
  dsa.save();
}

//Index-Area - Settings
export function handleSetBasics(call: SetBasicsCall): void{
  let id = BigInt.fromI32(1);
  let instaindex = new InstaIndex(id.toHex());
  instaindex.masterAddress = call.inputs._master;
  instaindex.listAddress = call.inputs._list;
  instaindex.createdAt = call.block.timestamp;
  instaindex.versionCount = BigInt.fromI32(1);
  instaindex.save();

  let account = new AccountModule(call.inputs._account.toHex());
  account.address = call.inputs._account;
  account.connectorsAddress = call.inputs._connectors;
  account.createdAt = call.block.timestamp;
  account.version = BigInt.fromI32(1);
  account.save();
}

export function handleLogNewAccount(event: LogNewAccount): void {
  let account = new AccountModule(event.params._newAccount.toHex());
  account.address = event.params._newAccount;
  account.connectorsAddress = event.params._connectors;
  account.createdAt = event.block.timestamp;
  let contract = index.bind(event.address)
  let callResult = contract.try_versionCount();
  var versionCount: BigInt;
  if(callResult.reverted){
    log.warning("handleLogNewAccount: try_versionCount call reverted", []);
  }else{
    versionCount = callResult.value;
  }
  account.version = versionCount;

  let check = new Check(versionCount.toHex());
  check.accountModule = event.params._newAccount.toHex();
  check.address = event.params._check;
  check.createdAt = event.block.timestamp;
  check.version = versionCount;

  account.check = versionCount.toHex();
  check.save();
  account.save();
}

export function handleLogNewCheck(event: LogNewCheck): void {
  let check = Check.load(event.params.accountVersion.toHex());
  if(!check){
    log.warning("handleLogNewCheck: creating new check for {}",[event.params.accountVersion.toHex()]);
    check = new Check(event.params.accountVersion.toHex())
    check.createdAt = event.block.timestamp;
  }
  check.version = event.params.accountVersion;
  check.address = event.params.check;
  let contract = index.bind(event.address)
  let callResult = contract.try_check(event.params.accountVersion);
  if(callResult.reverted){
    log.warning("handleLogNewCheck: call reverted", []);
    let default1 = BigInt.fromI32(0);
    check.accountModule = default1.toHex();
  }
  else{
    check.accountModule = callResult.value.toHex();
  } 
  check.createdAt = event.block.timestamp;
  check.save();
}

export function handleLogNewMaster(event: LogNewMaster): void {
  let id = BigInt.fromI32(1);
  let instaIndex = InstaIndex.load(id.toHex())!;
  instaIndex.newMasterAddress = event.params.master;
  instaIndex.save();
}

export function handleLogUpdateMaster(event: LogUpdateMaster): void {
  let id = BigInt.fromI32(1);
  let instaIndex = InstaIndex.load(id.toHex())!;
  instaIndex.masterAddress = event.params.master;
  instaIndex.newMasterAddress = null;
  instaIndex.save();
}

//InstaAccountV1-Area
export function handleLogEnable(event: LogEnable): void{
  let dsa = logAddAuthority(event.address,event.params.user);
  dsa.version = BigInt.fromI32(1);
  dsa.save();
}

export function handleLogDisable(event: LogDisable): void{
  let dsa = logRemoveAuthority(event.address,event.params.user);
  dsa.save();
}

export function handleCast(call: CastCall): void{
  let id = call.transaction.hash.toHex();
  let targets = call.inputs._targets;
  for(let i = 0; i < targets.length; i++){
    let spell = new Spell(id.concat("-").concat(i.toString()));
    spell.target = targets[i];
    spell.logCast = id;
    spell.save();
  }
}

export function handleLogCast(event: LogCast): void{
  let id = event.transaction.hash.toHex();
  let cast = new Cast(id);
  cast.dsa = event.address.toHex();
  cast.sender = event.params.sender;
  cast.origin = event.params.origin;
  cast.value = event.params.value;
  cast.createdAt = event.block.timestamp;
  cast.version = BigInt.fromI32(1);
  cast.save();
}

//ConnectorsV2-Area
export function handleLogConnectorAdded(event: LogConnectorAdded): void{
  let id = event.params.connectorNameHash.toHex();
  let connector = new Connector(id);
  connector.connectorName = event.params.connectorName;
  connector.connectorAddress = event.params.connector;
  connector.createdAt = event.block.timestamp;
  connector.save();
}

export function handleLogConnectorUpdated(event: LogConnectorUpdated): void{
  let id = event.params.connectorNameHash.toHex();
  let connector = Connector.load(id)!;
  connector.connectorAddress = event.params.newConnector;
  connector.save();
}

export function handleLogConnectorRemoved(event: LogConnectorRemoved): void{
  let id = event.params.connectorNameHash.toHex();
  store.remove('Connector', id);
}

export function handleLogController(event: LogController): void{
  let id = event.transaction.from.toHex()
  let controller = Chief.load(id);
  if(!controller){
    log.warning("handleLogController: cannot load chief with id {}. Creating new chief...",[id])
    controller = new Chief(id);
    controller.createdAt = event.block.timestamp;
  }
  controller.address = event.params.addr;
  controller.isChief = event.params.isChief
  controller.save();
}

//InstaImplementation-Area
export function handleLogAddImplementation(event: LogAddImplementation): void{
  let InstaImpl = InstaImplementation.load(event.address.toHex());
  if(!InstaImpl){
    InstaImpl = new InstaImplementation(event.address.toHex());
    InstaImpl.address = event.address;
    InstaImpl.createdAt = event.block.timestamp;
    InstaImpl.save();
  }
  
  let id = event.params.implementation.toHex();
  let implementation = new Implementation(id);
  implementation.address = event.params.implementation;
  let signatures = new Array<Bytes>();
  let sigs = event.params.sigs
  for(let i = 0; i < sigs.length; i++){
    let sig = sigs[i];
    signatures.push(sig);
  }
  implementation.instaImplementation = event.address.toHex();
  implementation.signatures = signatures;
  implementation.defaultStatus = false;
  implementation.createdAt = event.block.timestamp;
  implementation.save();
}

export function handleLogRemoveImplementation(event: LogRemoveImplementation): void{
  let id = event.params.implementation.toHex();
  store.remove('Implementation', id);
}

export function handleLogSetDefaultImplementation(event: LogSetDefaultImplementation): void{
  let InstaImpl = InstaImplementation.load(event.address.toHex());
  if(!InstaImpl){
    InstaImpl = new InstaImplementation(event.address.toHex());
    InstaImpl.address = event.address;
    InstaImpl.createdAt = event.block.timestamp;
  }
  InstaImpl.defaultImplementation = event.params.newImplementation;
  InstaImpl.save()
}

//InstaDefaultImplementation
export function handleLogEnableUser(event: LogEnableUser): void{
  let dsa = logAddAuthority(event.address, event.params.user);
  dsa.version = BigInt.fromI32(2);
  dsa.save();
}

export function handleLogDisableUser(event: LogDisableUser): void{
  let dsa = logRemoveAuthority(event.address,event.params.user);
  dsa.save();
}

// InstaImplementationM1
export function handleLogCastV2(event: LogCastV2): void{
  let castId = event.transaction.hash.toHex()
  let cast = new Cast(castId);
  cast.dsa = event.address.toHex();
  cast.sender = event.params.sender;
  cast.origin = event.params.origin;
  cast.value = event.params.value;
  cast.createdAt = event.block.timestamp;
  cast.version = BigInt.fromI32(2);
  cast.save();

  for (let i = 0; i < event.params.targets.length; i++){
    let completeEventParams = event.params.eventParams[i];
    let eventName = event.params.eventNames[i];
    let decodedParams = decodeEvents(eventName, completeEventParams);

    let spell = new Spell(event.transaction.hash.toHex().concat("-").concat(i.toString()));
    spell.eventName = eventName;
    spell.completeEventParams = completeEventParams;
    spell.eventParams = decodedParams;
    spell.targetName = event.params.targetsNames[i];
    spell.target = event.params.targets[i];
    spell.logCast = castId;
    spell.save();
  }
}
