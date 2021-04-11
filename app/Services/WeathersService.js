import { ProxyState } from "../AppState.js";
import Weather from "../Models/Weather.js";
import { weatherApi } from "./AxiosService.js";

class WeathersService {
    async getWeather() {
        let response = await weatherApi.get('')
        ProxyState.weather = new Weather(response.data)
    }
}

export const weathersService = new WeathersService();
