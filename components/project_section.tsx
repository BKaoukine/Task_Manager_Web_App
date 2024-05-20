import TaskNavBar from "./task_navigation_bar";
import TaskStatusStats from "./task_status_stat";
import TaskContainer from "./tasks_container";
import TopProjectSection from "./top_project_bar";

function ProjectSection()
{
    return(
        <section className="bg-[#232529] min-h-screen lg:pl-[20%] overflow-x-hidden">
                <TopProjectSection/>
                <TaskNavBar isVisible={false} onClose={function (): void {
                throw new Error("Function not implemented.");
            } } props={{
                insertedArticle: function (article: any): void {
                    throw new Error("Function not implemented.");
                }
            }}/>
                <TaskStatusStats/>
                <TaskContainer/>
        </section>
    );
}

export default ProjectSection;