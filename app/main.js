import ImagesController from "./Controllers/ImagesController.js";
import QuotesController from "./Controllers/QuotesController.js";
import WeathersController from "./Controllers/WeathersController.js";
import ToDosController from "./Controllers/ToDosController.js";


class App {
  imagesController = new ImagesController();
  quotesController = new QuotesController();
  weathersController = new WeathersController();
  toDosController = new ToDosController();
}

window["app"] = new App();
