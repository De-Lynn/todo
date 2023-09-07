export const getTodoList = (state: any) => {
    return state.todoList.todos
}

export const getTasksCount = (state: any) => {
    return state.todoList.todos.length
}

export const getCompletedTasks = (state: any) => {
    return state.todoList.completedTasks
}

export const getCompletedTasksCount = (state: any) => {
    return state.todoList.completedTasks.length
}