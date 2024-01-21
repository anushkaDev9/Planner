import Image from 'next/image'
import SideBar from './components/SideBar/SideBar'
import Tasks from './components/tasks/Tasks'
import TaskList from './components/tasksList/TaskList'

export default function Home() {
  return (
    <main >
     
      <div className="flex ml-[1%] mt-[3%] mr-[1%] space-x-2 h-[43rem]">
      <SideBar/>
      <Tasks/>
      <TaskList/>
      </div>
      
    </main>
  )
}
