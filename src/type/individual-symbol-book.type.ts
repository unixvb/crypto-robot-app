export type IndividualSymbolBookType = {
    "u": number,    // order book updateId
    "s": string,    // symbol
    "b": number,    // best bid price
    "B": number,    // best bid qty
    "a": number,    // best ask price
    "A": number     // best ask qty
}

export type RawIndividualSymbolBookType = {
    "u": number,    // order book updateId
    "s": string,    // symbol
    "b": string,    // best bid price
    "B": string,    // best bid qty
    "a": string,    // best ask price
    "A": string     // best ask qty
}
