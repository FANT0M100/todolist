import React from "react";

function HeaderSection() {
    return(
        <div className="mb-8">
            <h1 className="text-3xl text-grey-darker">Gio's Todo List</h1>
            <div className="flex mt-4 gap-4">
                <input className="rounded border appearance-none shadow w-full py-2 px-3 text-grey-darker"
                 placeholder="My task" 
                />
                <button className="p-2 border-2 rounded text-teal-900 border-teal hover:text-white hover:bg-teal-700 duration-500">
                    Add
                </button>
                <select className="shadow appearance-none border rounded py-2 px-3 text-grey-darker flex-no-grow">
                    <option>All</option>
                    <option>Completed</option>
                    <option>Uncompleted</option>
                </select>
            </div>
        </div>
    )
}

export default HeaderSection;