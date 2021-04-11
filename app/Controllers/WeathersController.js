import { ProxyState } from "../AppState.js";
import { weathersService } from "../Services/WeathersService.js"


function _drawWeathers() {
    document.getElementById('weather').innerHTML = ProxyState.weather.weatherTemplate
}
export default class WeathersController {
    constructor() {
        ProxyState.on('weather', _drawWeathers)
        this.getWeather()
        this.startTime()
        this.startInterval()
        this.checkTime()
    }

    async getWeather() {
        try {
            await weathersService.getWeather()
        } catch (error) {
            console.error(error)
        }
    }

    startTime() {
        let today = new Date();
        let hour = today.getHours();
        let minute = today.getMinutes();
        let second = today.getSeconds();

        // let m = (m < 10) ? "0" + m : m
        // let s = (s < 10) ? "0" + s : s
        document.getElementById('time').innerHTML =
            hour + ":" + minute + ":" + second;
    }
    startInterval() {
        setInterval(this.startTime, 500)
    }
    checkTime(i) {
        if (i < 10) { i = "0" + i };
        return i;
    }
}