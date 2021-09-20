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