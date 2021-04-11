import { ProxyState } from "../AppState.js";
import Quote from "../Models/Quote.js";
import { quoteApi } from "./AxiosService.js";

class QuotesService {
    async getQuote() {
        let response = await quoteApi.get('')
        ProxyState.quote = new Quote(response.data)
    }
}

export const quotesService = new QuotesService();
export default quotesService;