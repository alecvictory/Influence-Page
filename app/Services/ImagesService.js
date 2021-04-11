import { ProxyState } from "../AppState.js";
import Image from "../Models/Image.js";
import { imageApi } from "./AxiosService.js";

class ImagesService {
    async getImage() {
        let response = await imageApi.get('')
        ProxyState.image = new Image(response.data)
    }
}

export const imagesService = new ImagesService();
