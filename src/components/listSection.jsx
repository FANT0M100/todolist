import React from "react";

function ListSection( { todoList, setTodoList, filterVal } ) {

    const handleCompleted = id => {
        //find task wich id
        //make comleted task
        //update array
        const taskListArray = [...todoList]
        const makeItCompleted = taskListArray.map((item) => item.id === id ? {...item, inCompleted: !item.inCompleted} : item)
        setTodoList(makeItCompleted)
    }

    const handleDelete = id => {
        const taskListArray = [...todoList]
        const makeDelete = taskListArray.filter(item => item.id !== id && item)
        setTodoList(makeDelete)
    }

    return(
       <>
       {todoList?.sort((a, b) => a.inCompleted - b.inCompleted).map(
        (item, idx) =>
         ((item.inCompleted && filterVal === "completed") ||
          (!item.inCompleted && filterVal === "uncompleted") ||
          filterVal === 'all') && (
         <div className={`flex mb-4 items-center bg-green-50 px-3 py-1 border border-amber cursor-pointer ${!item.inCompleted ? 'bg-green-50' : 'bg-orange-50'}`} 
               key={`task_${idx}`}
         >
            <span className="mr-4 font-bold text-sm">{idx + 1}.</span>
            <p className={`w-full text-grey-darkest ${item.inCompleted && 'line-through'}`}>{item.task}</p>
         <button 
            className={`px-2 py-1 flex-no-shrink ml-1 mr-2 border-2 rounded hover:text-white border-green hover:bg-green-300 duration-300 
                       ${item.inCompleted ? 'border-orange hover:bg-orange-300': 'border-orange hover:bg-green-300'}`}
                       onClick={() => handleCompleted(item.id)}
        >
            {!item.inCompleted ? '✔' : '❌'}
         </button>
         <button className="flex-no-shrink px-2 py-1 rounded border-2 text-red border-red hover:text-white hover:bg-red-600 duration-300"
                 onClick={() => handleDelete(item.id)}
         >
            🗑
         </button>
     </div>
       ))}

       {/*  <div className="flex mb-4 items-center bg-green-50 px-3 py-1 border border-amber cursor-pointer">
            <p className="w-full text-grey-darkest line-through">This is my task</p>
            <button className="px-2 py-1 flex-no-shrink ml-1 mr-2 border-2 rounded hover:text-white border-orange hover:bg-orange-300 duration-300">❌</button>
            <button className="flex-no-shrink px-2 py-1 rounded border-2 text-red border-red hover:text-white hover:bg-red-600 duration-300">delete</button>
        </div> */}
       </> 
    )
}

export default ListSection;