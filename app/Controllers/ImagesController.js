import { ProxyState } from "../AppState.js";
import { imagesService } from "../Services/ImagesService.js"


function _drawImages() {
    let image = ProxyState.image.url
    document.getElementById('bg-image').style.backgroundImage = 'url(' + image + ')'
}

export default class ImagesController {
    constructor() {
        ProxyState.on('image', _drawImages)
        this.getImage()
    }

    async getImage() {
        try {
            await imagesService.getImage()
        } catch (error) {
            console.error(error)
        }
    }
}