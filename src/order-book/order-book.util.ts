import {FnType} from "../type/fn.type";
import {IndividualSymbolBookType, RawIndividualSymbolBookType} from "../type/individual-symbol-book.type";

const baseWebSocketUrl = 'wss://stream.binance.com:9443/ws';

const initWebSocket = (streamName: string, callback: FnType<MessageEvent<string>>) => {
    const ws = new WebSocket(baseWebSocketUrl + streamName);

    ws.addEventListener('message', callback);

    return ws;
}

export const getBookTickerStream = (symbol: string, callback: FnType<IndividualSymbolBookType>) =>
    initWebSocket(`/${symbol.toLowerCase()}@bookTicker`, (event) => {
        const rawData: RawIndividualSymbolBookType = JSON.parse(event.data);

        callback({
            ...rawData,
            b: +rawData.b,
            B: +rawData.B,
            a: +rawData.a,
            A: +rawData.A,
        })
    });
