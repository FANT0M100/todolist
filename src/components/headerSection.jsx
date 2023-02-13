import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function HeaderSection( { todoList, setTodoList, filterVal, setFilterVal } ) {

    const [task, setTask] = useState('')
    
    const handleAdd =() => {
        
        setTodoList(pre => [...pre, { task, id: uuidv4(), inCompleted:false }])
        setTask('')
    }

    const selectedValues = [
        {value:'all', name:'All'},
        {value:'completed', name:'Completed'},
        {value:'uncompleted', name:'Uncompleted'}
    ]
    return(
        <div className="mb-8">
            <h1 className="text-3xl text-grey-darker">Gio's Todo List</h1>
            <div className="flex mt-4 gap-4">
                <input className="rounded border appearance-none shadow w-full py-2 px-3 text-grey-darker"
                 placeholder="My task" 
                 value={task}
                 onChange={(e) => setTask(e.target.value)}
                />
                <button 
                    onClick={() => handleAdd()}
                    className="p-2 border-2 rounded text-teal-900 border-teal hover:text-white hover:bg-teal-700 duration-500">
                    Add
                </button>
                <select
                    onChange={(e) => setFilterVal(e.target.value)}
                    value={filterVal} 
                    className="shadow appearance-none border rounded py-2 px-3 text-grey-darker flex-no-grow">
                    {/* <option value='all'>all</option>
                    <option value='completed'>completed</option>
                    <option value='uncompleted'>uncompleted</option> */}
                    {selectedValues.map((item, index) => (
                        <option value={item.value} key={`filter_values ${index}`}>{item.name}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default HeaderSection;