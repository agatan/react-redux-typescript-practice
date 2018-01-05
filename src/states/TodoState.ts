export interface Todo {
    id: number;
    completed: boolean;
    text: string;
}

export type Todos = Todo[];

let id = 0;

function generateTodo(text: string, id: number): Todo {
    return {
        id: id,
        completed: false,
        text: text,
    };
}

export function generateTodos(texts: string[]): Todos {
    return texts.map(text => {
        id++;
        return generateTodo(text, id-1);
    });
}
