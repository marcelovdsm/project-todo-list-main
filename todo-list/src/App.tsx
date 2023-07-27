import { useState } from 'react'
import styles from './App.module.css'
import { Header } from './components/Header'
import { Task } from './components/Task'

import './global.css'


function App() {
  return(
    <article>
      <Header />

      <Task />
    </article>
  )
}

export default App
