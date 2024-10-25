// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import './TaskForm.css'
import Tag from './Tag'

const TaskForm = ({setTasks}) => {
  const [taskData, setTaskData] = useState ({
    task: "",
    status: "todo",
    tags: []
  })

  const checkTag = (tag) => {
    return taskData.tags.some(item => item === tag)
  }

  const selectTag = (tag) => {
    if(taskData.tags.some(item => item === tag)) {
      const filterTags = taskData.tags.filter(item => item !== tag)
      setTaskData(prev => {
        return { ...prev, tags: filterTags }
      })
    } else {
      setTaskData((prev) => {
        return { ...prev, tags: [...prev.tags, tag] }
      });
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;

    setTaskData(prev => {
      return {...prev, [name]: value};
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(taskData);
    setTasks(prev => {
      return [...prev, taskData]
    })
    setTaskData({
      task: "",
      status: "todo",
      tags: [],
    })
  }
  
  return (
    <header className="app_header">
        <form onSubmit={handleSubmit}>
            <input type="text" name='task' value={taskData.task} className="task_input" placeholder='Enter your task' onChange={handleChange}/>
                <div className="task_form_bottom_line">
                  <div>
                    <Tag tagName='Html' selectTag={selectTag} selected={checkTag("Html")} />
                    <Tag tagName='CSS' selectTag={selectTag} selected={checkTag("CSS")} />
                    
                    <Tag tagName='Javascript' selectTag={selectTag} selected={checkTag("Javascript")} />
                    <Tag tagName='Typescript' selectTag={selectTag} selected={checkTag("Typescript")} />

                    <Tag tagName='React' selectTag={selectTag} selected={checkTag("React")} />
                    <Tag tagName='Reactnative' selectTag={selectTag} selected={checkTag("Reactnative")} />

                    <Tag tagName='Angular' selectTag={selectTag} selected={checkTag("Angular")} />
                    <Tag tagName='Ionic' selectTag={selectTag} selected={checkTag("Ionic")} />

                    <Tag tagName='Astro' selectTag={selectTag} selected={checkTag("Astro")} />

                    <Tag tagName='Node' selectTag={selectTag} selected={checkTag("Node")} />
                    <Tag tagName='Cs' selectTag={selectTag} selected={checkTag("Cs")} />
                    <Tag tagName='Php' selectTag={selectTag} selected={checkTag("Php")} />
                  </div>
                
                  <div className='submit_section'>
                    <select name='status' value={taskData.status} className="task_status" onChange={handleChange}>
                      <option value="todo">To Do</option>
                      <option value="doing">Doing</option>
                      <option value="done">Done</option>
                    </select>

                    <button type='submit' className="task_submit">+ Add Task</button>
                  </div>
              

                
            </div>
        </form>
    </header>
  )
}

export default TaskForm