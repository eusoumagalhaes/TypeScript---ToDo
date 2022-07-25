import React from 'react'

//Interfaces
import {ITask} from '../../../Interfaces/Task'

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
               <div className={styles.task}>
                 <h4>
                  {task.title}
                 </h4>
                  <p> Urgency: {task.urgency} </p>
               </div>
               <div className={styles.actions}>
               <i className="bi bi-pencil"/>
               <i className="bi bi-trash3"/>
               </div>
              </div>
          ))
        ): (
          <p>There are no tasks to be shown</p>
        )}
    </>
  )
}

export default TaskList