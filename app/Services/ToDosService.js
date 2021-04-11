import { ProxyState } from "../AppState.js";
import ToDo from "../Models/ToDo.js";
import { toDoApi } from "./AxiosService.js";

class ToDosService {
    async getToDos() {
        let response = await toDoApi.get('')
        //ProxyState.toDo = new ToDo(response.data)
        ProxyState.todos = response.data.map(rawData => new ToDo(rawData));
    }

    async addToDo(id) {
        let todos = ProxyState.todos.find(t => t.id == id)
        let response = await toDoApi.post("", todos)
        ProxyState.todos = [...ProxyState.todos, new ToDo(response.data)]
    }
}
export const toDosService = new ToDosService();