import { ProxyState } from "../AppState.js";
import { toDosService } from "../Services/ToDosService.js"


function _drawToDos() {
    let template = ""
    ProxyState.todos.forEach(t => {
        template += `${t.toDoTemplate}`
    })
    document.getElementById('to-do').innerHTML = template
}
export default class ToDosController {
    constructor() {
        ProxyState.on('todos', _drawToDos)
        this.getToDos()
    }

    async getToDos() {
        try {
            await toDosService.getToDos()
        } catch (error) {
            console.error(error)
        }
    }

    async addToDo(id) {
        try {
            await toDosService.addToDo(id)
        } catch (error) {
            console.error(error)
        }
    }

}