import React, {useState, useEffect, ChangeEvent, FormEvent } from 'react';

//Styles 
import styles from './TaskForm.module.css'

//Interfaces
import { ITask } from '../../Interfaces/Task';

interface Props {
  btnText: string
  taskList: ITask[]
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>
}

const TaskForm = ({btnText, taskList, setTaskList}: Props) => {

  const [id, setId] = useState<number>(0)
  const [title, setTitle] = useState<string>('')
  const [urgency, setUrgency] = useState<string>('')
  

  const addTaskHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const id = Math.floor(Math.random() * 1000)

    const newTask: ITask = { id, title, urgency }

    setTaskList!([...taskList, newTask])

    setTitle('')
    setUrgency('')
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if(event.target.name === 'title') {
      setTitle(event.target.value)
    } else {
      setUrgency(event.target.value)
    }
  }

  return (
    <form onSubmit={addTaskHandler} className={styles.form}>
      <div className={styles.input_container}>
        <label htmlFor='title'>Title</label>
        <input 
          type='text' 
          name='title'
          placeholder='Title' 
          onChange={handleChange}
          value={title}
        />
     </div>
     <div className={styles.input_container}>
        <label htmlFor='urgency'>Urgency</label>
        <input 
          type='text' 
          name='urgency'
          placeholder='Task Urgency'
          onChange={handleChange}
          value={urgency}
        />
     </div>
     <input type='submit' value={btnText}/>
    </form>
  )
}

export default TaskForm