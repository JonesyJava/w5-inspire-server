import ValueSchema from "../models/Value";
import mongoose from "mongoose";
import TodoSchema from "../models/Todo";

class DbContext {
  Values = mongoose.model("Value", ValueSchema);

  Todos = mongoose.model('Todo', TodoSchema)
}

export const dbContext = new DbContext();
