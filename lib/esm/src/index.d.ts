export interface UTXO {
    id: string;
    index: number;
}
export interface Target {
    address: string;
    amount: number;
}
export declare const generateAddress: (pubkey: string, network?: string) => Promise<string>;
export declare const generateMultiSigScript: (privkeyNums: number, pubkey: string[]) => Promise<string>;
export declare const generateScriptAddress: (script: string, network?: string) => Promise<string>;
export declare class Transaction {
    version: string;
    locktime: string;
    inputs: UTXO[];
    outputs: Target[];
    private _inputScriptArr;
    private _outputScript;
    private _unsignedTx;
    constructor();
    addInput: (utxo: UTXO) => Promise<void>;
    addOutput: (target: Target) => Promise<void>;
    signAll: (pubkey: string, privkey: string) => Promise<void>;
    signInput: (pubkey: string, privkey: string, index: number) => Promise<void>;
    multiSignInput: (pubkey: string[], privkey: string[], index: number) => Promise<void>;
    getSignedHex: () => Promise<string>;
    private _finalize;
    private _finalizeInputs;
    private _finalizeOutputs;
    private _sign;
    private _makeHexN;
    private _bigToLitleEndian;
    private _getVarInt;
    private _getScriptPubKey;
    private _getRedeemScriptPrefix;
}
