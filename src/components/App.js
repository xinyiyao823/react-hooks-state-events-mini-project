import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });



function App() {
  const [tasks, setTasks] = useState(TASKS); //initial array is list of all tasks

  function handleDeleteTask(selectedTaskText) {
    setTasks(tasks.filter(task => task.text !== selectedTaskText))
  }
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES}/>
      <NewTaskForm categories={CATEGORIES}/>
      <TaskList tasks={TASKS} handleDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;
