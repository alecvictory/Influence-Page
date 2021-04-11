import { ProxyState } from "../AppState.js";
import quotesService from "../Services/QuotesService.js"


function _drawQuotes() {
    document.getElementById('quote').innerHTML = ProxyState.quote.quoteTemplate
}
export default class QuotesController {
    constructor() {
        ProxyState.on('quote', _drawQuotes)
        this.getQuote()
    }

    async getQuote() {
        try {
            await quotesService.getQuote()
        } catch (error) {
            console.error(error)
        }
    }
}