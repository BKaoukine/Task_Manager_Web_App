import { useState, useEffect } from "react";
import Task from "./task";
import APIService from "@/services/APIService";



const TaskContainer: React.FC = () => {
    const [tasks, setTasks] = useState<Array<{ [key: string]: any }>>([]);
      
        useEffect(() => {
          const getTasks = async () => {
            try {
              const data = await APIService.fetchTasks();
              setTasks(data);
            } catch (error) {
              console.error('Error fetching tasks:', error);
            }
          };
      
          getTasks();
        }, []);
    

    return(
        
    <div className="mt-14 pl-10 pr-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-y-4 gap-x-8 overflow-x-auto no-scrollbar">
            {tasks.map(task => (
            <Task task_name={task.task_name} task_description={task.task_description} task_date={task.task_date} task_priority={task.task_priority}/>
            ))}
    </div>
    /* inline-grid grid-cols-4  mt-14 gap-y-8 gap-x-80 sm:gap-x-16 overflow-x-auto no-scrollbar */ 

    )
}

export default TaskContainer;