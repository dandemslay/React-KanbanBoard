/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import './TaskColumn.css'
import TaskCard from './TaskCard'
import { FcTodoList } from 'react-Icons/fc'
import { FcNeutralTrading } from 'react-Icons/fc'
import {  FcApproval } from 'react-Icons/fc'
import DropArea from './DropArea'

const TaskColumn = ({icon, title, tasks, status, handleDelete, setActiveCard, onDrop }) => {
    
    const STRING_TO_ICON = {
        FcTodoList: <FcTodoList className='task_column_icon'/>,
        FcNeutralTrading: <FcNeutralTrading className='task_column_icon'/>,
        FcApproval: <FcApproval className='task_column_icon'/>
    };
  return (
    <section className="task_column">
        <h2 className='task_column_heading'>{STRING_TO_ICON[icon]} {title}</h2>
        <DropArea onDrop={() => onDrop(status, 0)} />
        {
          tasks.map((task, index) => 
            task.status === status && (
              <React.Fragment key={index} >
                <TaskCard
                  title={task.task} 
                  tags={task.tags} 
                  handleDelete={handleDelete} 
                  index={index} 
                  setActiveCard={setActiveCard}
                />
                <DropArea onDrop={() => onDrop(status, index + 1)} />
              </React.Fragment>
            )
          )
        }
    </section>
  )
}

export default TaskColumn