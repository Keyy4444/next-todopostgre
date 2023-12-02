import prisma from '.././db/prisma'
import AddComponent from './dashboard/AddComponent' 
import ButtonsComponent from './dashboard/Buttons' 


export default async function List() {
    const existingTodos = await prisma.list.findMany();

    return (
        <main className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
            <div className="bg-gray-500 rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
            <h1 className="text-black">Todo List</h1>
            <AddComponent/>
            <ul>
                {existingTodos.map((todo) => (
                    <div>
                        <li key={todo.id}></li><ButtonsComponent todo={todo}/>
                    </div>  
                ))}
            </ul>
            </div>
        </main>
    )
}