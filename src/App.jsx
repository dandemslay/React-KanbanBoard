// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react'
import './App.css'
import TaskForm from './components/TaskForm'
import TaskColumn from './components/TaskColumn'

const oldTasks = localStorage.getItem("tasks")
console.log(oldTasks)

const App = () => {
  const [tasks, setTasks ] = useState(JSON.parse(oldTasks) || []);
  const [activeCard, setActiveCard] = useState(null)

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks])

  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((task, index) => index !== taskIndex)
    setTasks(newTasks)
  }

  const onDrop = (status, position) => {
    console.log(`${activeCard} is going to place into ${status} and at the position ${position}`)

    if (activeCard == null || activeCard === undefined) return;

    const taskToMove = tasks[activeCard];
    const updatedTasks = tasks.filter((task, index) => index !== activeCard)

    updatedTasks.splice(position, 0, {
      ...taskToMove,
      status: status
    })

    setTasks(updatedTasks)
  }

  return (
    <div className="app">
      <TaskForm setTasks={setTasks} />
      <main className="app_main">
        <TaskColumn icon='FcTodoList' title='To DO' tasks={tasks} status="todo" handleDelete={handleDelete} setActiveCard={setActiveCard} onDrop={onDrop} />
        <TaskColumn icon='FcNeutralTrading' title='Doing' tasks={tasks} status="doing" handleDelete={handleDelete} setActiveCard={setActiveCard} onDrop={onDrop} />
        <TaskColumn icon='FcApproval'  title='Done' tasks={tasks} status="done" handleDelete={handleDelete} setActiveCard={setActiveCard} onDrop={onDrop} />
      </main>

      {/* <h1>Active Card - {activeCard} </h1> */}
    </div>
  )
}

export default App