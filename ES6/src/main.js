import Todos from "./api/todos";

async function exec() {
    const todos = new Todos();

    const data = await todos.read();
    console.log(data);
}

exec()