"use client"

import React from 'react'
import { deleteRow } from './actions/DeleteRow'
import { updateRow } from './actions/UpdateRow'
import { updateToggle } from './actions/UpdateToggle'
import { useState, useEffect } from 'react';

interface Task {    
    id: number;
    content: string;
    isEdit: boolean;
    isComplete: boolean;
}


export default function ButtonsComponent({ todo }: { todo: Task }) {
    const [row, setRow] = useState<Task>(todo);
    const [editedRow, setEditedRow] = useState<string>();

    const toggleEdit = () => {
        const updatedRow = { ...row, isEdit: !row.isEdit}
        setRow(updatedRow);
        console.log(row);
    }
    
    const toggleComplete = () => {
        const newRow = { ...row, isComplete: !row.isComplete}
        setRow(newRow);
        updateToggle(row.id, row.isComplete);
        console.log(row);
    }

    return (
            <div>
                {row.isEdit ? (
                    <div>
                        <input value={editedRow} onChange={(e) => setEditedRow(e.target.value)} placeholder='Edit' className="shadow appearance-none border rounded w-4/5 py-2 px-3 mr-4 text-grey-darker"></input>
                        <button onClick={() => {
                            toggleEdit(); 
                            editedRow? (updateRow(editedRow, todo.id)) : (alert('You have to input something'))
                            }} className="flex-no-shrink p-2 ml-4 -mr-2 border-2 rounded hover:text-grey text-green border-green hover:bg-green">Save</button>  
                    </div>
                ) : (
                    <div className="flex mb-4 m-4 mt-6 items-center">
                        {row.isComplete ? (
                            <input type="checkbox" onClick={() => {toggleComplete()}} className="flex-no-shrink ml-4 mr-2 " checked></input>
                        ) : (
                            <input type="checkbox" onClick={() => {toggleComplete()}} className="flex-no-shrink ml-4 mr-2 "></input>
                        )}
                        <div className="w-full">
                            {todo.content} 
                        </div>
                        <button onClick={() => toggleEdit()} className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-grey text-green border-green hover:bg-green">Edit</button>
                        <button onClick={() => deleteRow(todo.content, todo.id)} className="flex-no-shrink p-2 ml-4 -mr-4 border-2 rounded hover:text-grey text-green border-green hover:bg-green">Delete</button> 
                    </div>
                )}
            </div>
    );
}