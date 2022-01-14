import Todos from "./api/todos";
import './assets/css/main.css';
import { createApp } from "vue";

const apiTodos = new Todos()

const app = createApp({
    data() {
        return {
            todos: []
        }
    },
    created() { 
        this.fetchTodos()
    },
    methods: { 
        async fetchTodos(){
            this.todos = await apiTodos.read();
            console.log(this.todos)
        }
    },
})

app.mount('#app')