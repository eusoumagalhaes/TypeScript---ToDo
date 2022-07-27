import React from 'react'

//Interfaces
import {ITask} from '../../../Interfaces/Task'

//Styles
import styles from './TaskList.module.css'

interface Props {
  taskList: ITask[];
  handleDelete(id: number) : void;
  handleEdit(task: ITask) : void;
}

const TaskList = ({taskList, handleDelete, handleEdit}:Props) => {
  return (
    <>
      {taskList.length > 0 ? (
          taskList.map((task) => (
            <div key={task.id}>
               <div className={styles.task}>
                 <h4>
                  {task.title}
                 </h4>
                  <p>
                     Description: {task.description} 
                  </p>
               
               <div className={styles.actions}>
                
               <i 
               className="bi bi-pencil" 
               onClick={() => handleEdit(task)}
               />

               <i 
               className="bi bi-trash3" 
               onClick={() => {handleDelete(task.id);}}
               />

               </div>
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