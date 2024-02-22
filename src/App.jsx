import React, { useState } from 'react'
import { DndContext, closestCorners } from '@dnd-kit/core'
import UserInfo from './Components/UserInfo/UserInfo'

export default function App() {

  const [state, setState] = useState([
    {
      id: 1,
      title: "Salom Mening Ismim Alibek"
    },
    {
      id: 2,
      title: "Salom Mening Ismim Amirbek"
    },
    {
      id: 3,
      title: "Salom Mening Ismim Akmal"
    },
    {
      id: 4,
      title: "Salom Mening Ismim Ezozbek"
    },
  ])

  return (
    <div className='App'>
      <h1>Drag and Drop = DND </h1>
      <DndContext collisionDetection={closestCorners}>
          <UserInfo state={state}/>
      </DndContext>
    </div>
  )
}
