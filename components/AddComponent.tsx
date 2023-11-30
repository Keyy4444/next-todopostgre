"use client"

import React from 'react'
import { addTodo } from '../functions/functions'

export default function AddComponent() {
    return (
        <form action={addTodo} className="flex mt-4">
            <input type="text" name="content" className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" placeholder="Add Todo" required/>
            <button className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal">Add</button>
        </form>  
    );
}