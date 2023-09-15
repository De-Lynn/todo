import { v1 } from "uuid";
import { todoListReducer, addTask, clearCompletedTasks} from "./todoListReducer";

it('the number of tasks should increase by 1', () => {
    // 1. data
    let action = addTask("Do tests.")
    let state = {
        todos: [
            {id: v1(), title: 'Do components.', isDone: false},
            {id: v1(), title: 'Do styles.', isDone: false},
        ]
    }

    // 2. action
    let newState = todoListReducer(state, action)

    // 3. expectation
    expect(newState.todos.length).toBe(3)
})

it('the number of completed tasks should be equal to 0', () => {
    // 1. data
    let action = clearCompletedTasks()
    let state = {
        todos: [
            {id: v1(), title: 'Do components.', isDone: false},
            {id: v1(), title: 'Do styles.', isDone: false},
        ]
    }

    // 2. action
    let newState = todoListReducer(state, action)

    // 3. expectation
    expect(newState.completedTasks.length).toBe(0)
})