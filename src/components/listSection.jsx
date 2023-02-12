import React from "react";

function ListSection() {
    return(
       <>
        <div className="flex mb-4 items-center bg-green-50 px-3 py-1 border border-amber cursor-pointer">
            <p className="w-full text-grey-darkest">This is my task</p>
            <button className="px-2 py-1 flex-no-shrink ml-1 mr-2 border-2 rounded hover:text-white border-green hover:bg-green-300 duration-300">✔</button>
            <button className="flex-no-shrink px-2 py-1 rounded border-2 text-red border-red hover:text-white hover:bg-red-600 duration-300">delete</button>
        </div>

        <div className="flex mb-4 items-center bg-green-50 px-3 py-1 border border-amber cursor-pointer">
            <p className="w-full text-grey-darkest line-through">This is my task</p>
            <button className="px-2 py-1 flex-no-shrink ml-1 mr-2 border-2 rounded hover:text-white border-orange hover:bg-orange-300 duration-300">❌</button>
            <button className="flex-no-shrink px-2 py-1 rounded border-2 text-red border-red hover:text-white hover:bg-red-600 duration-300">delete</button>
        </div>
       </> 
    )
}

export default ListSection;