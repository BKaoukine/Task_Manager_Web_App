import TaskNavBar from "./task_navigation_bar";
import TaskStatusStats from "./task_status_stat";
import TaskContainer from "./tasks_container";
import TopProjectSection from "./top_project_bar";

function ProjectSection()
{
    return(
        <section className="bg-[#232529] h-screen grow">
                <TopProjectSection/>
                <TaskNavBar/>
                <TaskStatusStats/>
                <TaskContainer/>
        </section>
    );
}

export default ProjectSection;