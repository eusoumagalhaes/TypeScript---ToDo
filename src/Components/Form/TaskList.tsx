import React from 'react'

//Interfaces
import {ITask} from '../../Interfaces/Task'

//Styles
import styles from './TaskList.module.css'

interface Props {
  taskList: ITask[]
}

const TaskList = ({taskList}:Props) => {
  return (
    <>
      {taskList.length > 0 ? (
          taskList.map((task) => (
            <div key={task.id}>
              <p>{task.title}</p>
              </div>
          ))
        ): (
          <p>There are no tasks to be shown</p>
        )}
    </>
  )
}

export default TaskList