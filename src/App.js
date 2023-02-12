
import { useState } from 'react';
import './App.css';
import HeaderSection from './components/headerSection';
import ListSection from './components/listSection';

function App() {
   
  const [todoList, useTodoList] = useState([])

  return (
    <div>
      <div className='h-screen overflow-hidden flex items-center justify-center bg-red-500'>
        <div className='h-100 w-full flex items-center justify-center font-sans'>
          <div className='bg-white rounded shadow-lg p-6 m-4 w-full lg:w-1/2'>
            {/* headre */}
            <HeaderSection/>
            {/* todo list */}
            <ListSection/>
          </div>
        </div>        
      </div>
    </div>
  );
}

export default App;
