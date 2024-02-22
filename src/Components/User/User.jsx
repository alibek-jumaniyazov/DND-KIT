import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import React, { useState } from 'react'

export default function User({ id, title }) {

    
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id })

    const style = {
        transition,
        transform: CSS.Transform.toString(transform)
    }


    return (
        <div ref={setNodeRef} {...attributes} {...listeners} style={style} className='User'>
            <p>{id}</p>
            <p>{title}</p>
        </div>
    )
}
