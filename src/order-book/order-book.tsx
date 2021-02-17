import {getBookTickerStream} from "./order-book.util";
import {useEffect, useState} from "react";
import {IndividualSymbolBookType} from "../type/individual-symbol-book.type";
import './order-book.css';

const initialBtcBooKState: IndividualSymbolBookType = {
    u: 0,
    s: '',
    b: 0,
    B: 0,
    a: 0,
    A: 0
};

export const OrderBook = () => {
    const [btcBook, setBtcBook] = useState(initialBtcBooKState);

    useEffect(() => {
        const ws = getBookTickerStream('BTCUSDT', (data) => setBtcBook(data));

        return () => ws.close();
    }, []);

    return <div className="root">
        <p className="symbol">{btcBook.s}</p>

        <p className="bid-price">{btcBook.b}</p>
        <p className="bid-qty">{btcBook.B}</p>

        <p className="ask-price">{btcBook.a}</p>
        <p className="ask-qty">{btcBook.A}</p>
    </div>;
}
