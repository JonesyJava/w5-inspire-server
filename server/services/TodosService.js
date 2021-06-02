import { dbContext } from "../db/DbContext"

class TodosService {
    async edit(todoId, editTodo) {
        return await dbContext.Todos.findByIdAndUpdate(todoId, editTodo, {new: true})
    }
    
    async getAll(query = {}) {
        return await dbContext.Todos.find(query)
    }

    async getById(todoId) {
        return await dbContext.Todos.findById(todoId)
    }

    async createTodo(newTodo) {
        return await dbContext.Todos.create(newTodo)
    }

    async delete(todoId) {
        return await dbContext.Todos.findByIdAndDelete(todoId)
    }


}

export const todosService = new TodosService()