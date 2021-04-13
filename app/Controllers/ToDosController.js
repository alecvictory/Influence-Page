import { ProxyState } from "../AppState.js";
import { toDosService } from "../Services/ToDosService.js"


function _drawToDos() {
    let template = ""
    ProxyState.todos.forEach(t => {
        template += `${t.toDoTemplate}`
    })
    document.getElementById('to-do').innerHTML = template
    document.getElementById('counter').innerHTML = `${ProxyState.todos.filter(t => t.completed).length}:${ProxyState.todos.length}`

    // total = todos.length
    // completed = todos.filter()
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

    async addToDo() {
        try {
            window.event.preventDefault()
            let form = window.event.target
            let newToDo = {
                description: form['to-do'].value,
            }
            await toDosService.addToDo(newToDo)
            // @ts-ignore
            form.reset()
        } catch (error) {
            console.error(error)
        }
    }

    async removeToDo(id) {
        try {
            await toDosService.removeToDo(id)
        } catch (error) {
            console.error(error)
        }
    }

    async toggleToDo(id) {
        try {
            await toDosService.toggleToDo(id)
        } catch (error) {
            console.error(error)
        }
    }
}