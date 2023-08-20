export interface ToDoItem {
    name: string,
    isCompleted: boolean,
}

export interface ToDoSchema {
    name: string,
    schema: ToDoItem[],
}
