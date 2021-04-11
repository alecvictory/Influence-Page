export const imageApi = axios.create({
    baseURL: "https://bcw-sandbox.herokuapp.com/api/images"
});
export const quoteApi = axios.create({
    baseURL: "https://bcw-sandbox.herokuapp.com/api/quotes"
});
export const toDoApi = axios.create({
    baseURL: "https://bcw-sandbox.herokuapp.com/api/alec/todos"
});
export const weatherApi = axios.create({
    baseURL: "https://bcw-sandbox.herokuapp.com/api/weather"
});