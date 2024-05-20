

class APIService{

    //Get Tasks
    static fetchTasks = async () => {
        try {
          const response = await fetch("/api/tasks");
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          const data = await response.json();
          return data;
        } catch (error) {
          console.error('Error fetching tasks:', error);
          throw error;
        }

    }

    //Add Task

    static InsertArticle = async ({ task_name, task_description, task_date, task_time, task_priority}) => {
        const response = await fetch('/api/add_task', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ task_name, task_description, task_date, task_time, task_priority})
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    }
}
export default APIService;