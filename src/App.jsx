import React, { useRef, useState } from 'react'
import { DndContext, KeyboardSensor, PointerSensor, TouchSensor, closestCorners, useSensor, useSensors } from '@dnd-kit/core'
import UserInfo from './Components/UserInfo/UserInfo'
import { arrayMove, sortableKeyboardCoordinates } from '@dnd-kit/sortable'
import AddUser from './Components/AddUser/AddUser'


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

  const titleRef = useRef(null)

  const getUserPos = id => state.findIndex(user => user.id === id)

  const handleDragEnd = event => {
    const { active, over } = event

    if (active.id === over.id) return;

    setState(state => {
      const originalPos = getUserPos(active.id)
      const newPos = getUserPos(over.id)

      return arrayMove(state, originalPos, newPos)
    })
  };

  const sensor = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  function addUser() {
    setState(user => [...user, { id: state.length + 1, title: titleRef.current.value }])
  }

  console.log(state);

  return (
    <div className='App'>
      <h1>Drag and Drop = DND </h1>
      <AddUser addUser={addUser} titleRef={titleRef}/>
      <DndContext sensors={sensor} onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
        <UserInfo state={state} />

      </DndContext>
    </div>
  )
}
