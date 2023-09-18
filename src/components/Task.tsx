import { useState } from 'react'
import styles from './Task.module.css'
import { PlusCircle, ClipboardText, Trash } from "phosphor-react"

export const Task = () => {

  interface tasks {
  id: number
  content: string
  done: boolean
  }

  let taskDoneCheckbox = document.querySelectorAll('input[type=checkbox]:checked')

  const [inputValue, setInputValue] = useState<any>("")

  const [taskDone, setTaskDone] = useState(false)

  let [tasks, setTasks] = useState([])

  function handleAddNewTask() {
    setTasks([...tasks, { id: tasks.length, content: inputValue, done: taskDone }])

    setInputValue("")
    
  }
  
  function handleVerifyTask() {
    setTaskDone(current => !current)
  }

  function deleteTask( taskToDelete:tasks) {


    const tasksWithoutDeletedOne = tasks.filter(tasks => {
      return tasks !== taskToDelete
    })

    setTasks(tasksWithoutDeletedOne)
  }



  function taskList(tasks:Array<tasks>) {

    if(tasks.length > 0) {
      return(
        <div className={styles.taskList}>
          {tasks.map((task, i) => {
            i = task.id
            return (
              <div key={i} className={styles.tasks}>
                <input 
                type="checkbox" 
                value={String(taskDone)} 
                onChange={handleVerifyTask}
                />
                <p>{task.content}</p>
                <Trash 
                onClick={() => {deleteTask( task )}}
                size={20} 
                className={styles.trash}
                />
              </div>
            )
          })}
        </div>
      )
    } else {
      return(
        <div className={styles.emptyTaskList}>
          <ClipboardText size={70} weight="bold" />
          <p><strong>Você ainda não tem tarefas cadastradas</strong></p>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      )
    }
  }



  
  return(
    <article className={styles.task}>
        <div className={styles.addTask}>
          <input 
          value={inputValue}
          onInput={(e) => {
            setInputValue(e.currentTarget.value)
          }}
          type="text" 
          name="task" 
          placeholder="Adicione uma nova tarefa"
          />       
          <button onClick={() => handleAddNewTask()}>
            Criar <PlusCircle size={16} weight="bold" />
          </button>
        </div>

      <div className={styles.taskMain}>
        <div className={styles.task}>
          <div className={styles.taskHeader}>
            <p>Tarefas criadas <span>{tasks.length}</span></p>
            <p>Tarefas concluídas <span>{taskDoneCheckbox.length} de {tasks.length}</span></p>
          </div>
          {taskList(tasks)}
        </div>
      </div>

    </article>
    
  )
}