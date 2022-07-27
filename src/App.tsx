import { useState } from 'react';

//Styles
import './App.css';
import styles from'./App.module.css';

//Components
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import TaskForm from './Components/Form/TaskForm/TaskForm';
import TaskList from './Components/Form/TaskList/TaskList';
import Modal from './Components/Modal/Modal';

//Interfaces
import { ITask } from './Interfaces/Task';

function App() {
  
  const [taskList, setTaskList] = useState<ITask[]>([]);
  const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null);	
  
  //Delete Task from TaskList
  const deleteTask = (id: number) => {
    setTaskList(taskList.filter((task) => { return task.id !== id}))
  }

  const hideOrShowModal = (display: boolean) => {
    const modal = document.getElementById('modal')
    if (display) {
      modal!.classList.remove("hide")
    }else{
      modal!.classList.add("hide")
    }
  }

  const editTask = (task: ITask): void => {
    hideOrShowModal(true)
    setTaskToUpdate(task)
  }

  const updateTask = (id: number, title: string, description: string) => {
    const updatedTask: ITask = { id, title, description }

    const updatedItems = taskList.map((task) => {
      return task.id === updatedTask.id ? updatedTask : task
  })
    setTaskList(updatedItems)
    hideOrShowModal(false)
  }

  return (
    <div className="App">
      <Modal 
        children={<TaskForm btnText='Edit Task' 
        taskList={taskList} 
        task={taskToUpdate} 
        handleUpdate={updateTask}
        />}
      />
      <Header />
      <main className={styles.main}>
      <div>
        <h1>What are you doing today ?</h1><br/>
        <TaskForm 
          btnText='Create Task' 
          taskList={taskList} 
          setTaskList={setTaskList} 
        />
      </div>
      <div>
        <h2>To Do:</h2><br/>
        <TaskList taskList={taskList} handleDelete={deleteTask} handleEdit={editTask}/>
      </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
