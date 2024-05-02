import Task from "./task";


function TaskContainer()
{
    return(
        <div className="grid xs:grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 ml-8 mr-8 mt-14">
            <Task/>
            <Task/>
            <Task/>
            <Task/>
            <Task/>
        </div>
    )
}

export default TaskContainer;