/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {

}

module.exports = Todo;


// Define the Todo class
class Todo {
  // Constructor to initialize the class with an empty todo list
  constructor() {
    // The todos array will store all the todo items
    this.todos = [];
  }

  // Method to add a new todo to the list
  add(todo) {
    // Push the new todo into the todos array
    this.todos.push(todo);
  }

  // Method to remove a todo from the list by its index
  remove(indexOfTodo) {
    // Check if the index is valid (greater than or equal to 0 and less than the length of the todos array)
    if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
      // Remove the todo using the splice method
      this.todos.splice(indexOfTodo, 1);
    } else {
      // Throw an error if the index is invalid
      throw new Error("Todo not found");
    }
  }

  // Method to update a todo at a specific index
  update(index, updatedTodo) {
    // Check if the index is valid
    if (index >= 0 && index < this.todos.length) {
      // Update the todo at the given index with the new value
      this.todos[index] = updatedTodo;
    } else {
      // Throw an error if the index is invalid
      throw new Error("Todo not found");
    }
  }

  // Method to return all the todos in the list
  getAll() {
    // Return the complete todos array
    return this.todos;
  }

  // Method to return a todo at a specific index
  get(indexOfTodo) {
    // Check if the index is valid
    if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
      // Return the todo at the specified index
      return this.todos[indexOfTodo];
    } else {
      // Throw an error if the index is invalid
      throw new Error("Todo not found");
    }
  }

  // Method to clear all todos from the list
  clear() {
    // Reset the todos array to an empty array
    this.todos = [];
  }
}

// Export the Todo class for use in other files
module.exports = Todo;

