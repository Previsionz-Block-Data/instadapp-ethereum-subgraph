import { Address, Bytes} from "@graphprotocol/graph-ts";
import { DSA } from "../generated/schema";


export function logAddAuthority(dsaAddress: Address, userAddress: Address): DSA{
    let dsa = DSA.load(dsaAddress.toHex())!;
    let enabledAuthorities = dsa.enabledAuthorities!;
    enabledAuthorities.push(userAddress);
    dsa.enabledAuthorities = enabledAuthorities;
    return dsa;
}

export function logRemoveAuthority(dsaAddress: Address, userAddress: Address): DSA{
    let dsa = DSA.load(dsaAddress.toHex())!;
    let currentAuthorities = dsa.enabledAuthorities as Bytes[];
    let newAuthorities = new Array<Bytes>();
    for (let i = 0; i < currentAuthorities.length; i++){
        let authority = currentAuthorities[i];
        if (authority.toString() != userAddress.toString()){
            newAuthorities.push(authority);
        }
    }
    dsa.enabledAuthorities = newAuthorities;
    return dsa;
}

export function decodeEvents(eventHead: string, eventBody: Bytes): Bytes[]{
    let elements = new Array<Bytes>();
    if (eventHead.length <= 0){
        return elements;
    }

    let matches = eventHead.split(",");
    for (let i = 0; i < matches.length; i++){
        let start = 32 * i;
        let end = start + 32;
        let arg = eventBody.subarray(start,end);
        if (matches[i].includes("[")){
            arg = decodeArray(eventBody, arg);
        }
        elements.push(Bytes.fromUint8Array(arg));
    }
    return elements;
}


/**
 * Decodes a 1d eth value array
 * @param bytes complete data bytes
 * @param position array position to decode
 * @returns decoded array
 */
function decodeArray(bytes: Bytes, position: Uint8Array): Uint8Array{
    let start = valueToI32(position);
    let end = start + 32;
    let amount = valueToI32(bytes.subarray(start,end));
    let arrayArgs = new Uint8Array(32 * amount);
    for (let i = 0; i < amount; i++){
        let location = start + 32 * (i+1);
        for (let x = 0; x < 32; x ++){
            arrayArgs[i*32+x] = bytes[location+x]
        }
    }
    return arrayArgs;
}

/**
 * Transforms eth value 256ARG to U32 in form of I32 value.
 * This is used to get the Amount and Location of an array.
 * @param bytes 256ARG 
 * @returns I32 value of 256ARG
 */
function valueToI32(bytes: Uint8Array): i32{
    let x: i32 = 0;
    x = (x | bytes[28]) << 8
    x = (x | bytes[29]) << 8
    x = (x | bytes[30]) << 8
    x = x | bytes[31]
    return x;
}