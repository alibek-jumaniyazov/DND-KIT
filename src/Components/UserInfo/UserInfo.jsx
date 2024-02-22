import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import React from 'react'
import User from '../User/User'

export default function UserInfo({ state }) {
    return (
        <div className='UserInfo'>
            <SortableContext items={state} strategy={verticalListSortingStrategy}>
            {
                state.map((item) => (
                   <User id={item.id} title={item.title} key={item.id}/>
                ))
            }
            </SortableContext>
        </div>
    )
}
