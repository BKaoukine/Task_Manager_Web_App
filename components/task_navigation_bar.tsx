// @ts-nocheck
import APIService from '@/services/APIService';
import { FormEvent, useState } from 'react';
import Modal from 'react-modal';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#111827',
  },
};

interface AddTaskPopupProps {
  isVisible: boolean;
  onClose: () => void;
  props: {
    insertedArticle: (article: any) => void;
  };
}

const Add_Task_Popup: React.FC<AddTaskPopupProps> = ({ props, isVisible, onClose }) => {
  const [task_name, setTask_name] = useState<string>('');
  const [task_description, setTask_description] = useState<string>('');
  const [task_date, setTask_date] = useState<string>('');
  const [task_time, setTask_time] = useState<string>('');
  const [task_priority, setTask_priority] = useState<string>('');

  const insertArticle = () => {
    APIService.InsertArticle({ task_name, task_description, task_date, task_time, task_priority })
      .then((response: any) => props.insertedArticle(response))
      .catch((error: any) => console.log('error', error));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    insertArticle();
    setTask_name('');
    setTask_description('');
    setTask_date('');
    setTask_time('');
    setTask_priority('');
  };

  return (
    <Modal isOpen={isVisible} onRequestClose={onClose} style={customStyles}>
      <form className="w-[400px] p-4 space-y-8" onSubmit={handleSubmit}>
        <div className="relative">
          <input
            type="text"
            id="Task_name"
            value={task_name}
            onChange={(e) => setTask_name(e.target.value)}
            required
            className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-[1px] border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            htmlFor="Task_name"
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 tracking-widest"
          >
            Title
          </label>
        </div>

        <div className="relative">
          <textarea
            id="task_description"
            value={task_description}
            onChange={(e) => setTask_description(e.target.value)}
            required
            className="block px-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 h-12 focus:h-40 transition-all duration-300 ease-in-out peer resize-none"
            placeholder=" "
          />
          <label
            htmlFor="task_description"
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 tracking-widest"
          >
            Description
          </label>
        </div>

        <div className="flex flex-row gap-x-8">
          <div className="relative">
            <input
              type="date"
              id="task_date"
              value={task_date}
              onChange={(e) => setTask_date(e.target.value)}
              required
              className="block px-2.5 pb-2.5 pt-4 w-[240px] text-sm text-gray-900 bg-transparent rounded-lg border-[1px] border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="task_date"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 tracking-widest"
            >
              Date
            </label>
          </div>

          <div className="relative">
            <input
              type="time"
              id="task_time"
              value={task_time}
              onChange={(e) => setTask_time(e.target.value)}
              required
              className="block px-2.5 pb-2.5 pt-4 w-[100px] text-sm text-gray-900 bg-transparent rounded-lg border-[1px] border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="task_time"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 tracking-widest"
            >
              Time
            </label>
          </div>
        </div>

        <div className="relative">
          <input
            type="text"
            id="tags"
            className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-[1px] border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            htmlFor="tags"
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 tracking-widest"
          >
            Tags
          </label>
        </div>

        <div className="flex flex-col mb-4 space-y-2">
          <label htmlFor="">Priority</label>
          <ul className="flex flex-row gap-x-2">
            <li>
              <button
                type="button"
                onClick={() => setTask_priority('H')}
                className="p-1 min-w-14 bg-rose-500 rounded"
              >
                High
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => setTask_priority('M')}
                className="p-1 min-w-14 bg-yellow-500 rounded"
              >
                Medium
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => setTask_priority('L')}
                className="p-1 min-w-14 bg-green-500 rounded"
              >
                Low
              </button>
            </li>
          </ul>
        </div>

        <div className="flex flex-row justify-end ">
          <button
            type="submit"
            className="w-18 py-2 px-4 bg-blue-700 hover:bg-blue-800 rounded-lg mr-4"
          >
            Save
          </button>
          <button
            type="button"
            onClick={onClose}
            className="w-18 py-2 px-4 bg-gray-400 hover:bg-gray-500 rounded-lg"
          >
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
};

function TaskNavBar(){
    const [isPopupVisible, setPopupVisible] = useState(false);
    const handleButtonClick = () => {
        setPopupVisible(true);
      };
    
      const handleClosePopup = () => {
        setPopupVisible(false);
      };
    
    return(

            
            <div className="sm:flex sm:justify-between h-40 sm:h-20 m-8 text-lg overflow-x-auto no-scrollbar">

                <div className="space-x-10 flex flex-row mr-20">
                        <button className="pb-10 h-[36px]  min-w-20 text-[#6C717B] active:text-white hover:font-normal hover:border-b-2 hover:border-solid hover:transition-all active:hover:border-b-2 active:border-solid" type="button">
                            All Task
                        </button>
                        <button className="pb-10 h-[36px] min-w-20 text-[#6C717B] active:text-white hover:font-normal hover:border-b-2 hover:border-solid hover:transition-all active:hover:border-b-2 active:border-solid" type="button">
                            On Going
                        </button>
                        <button className="pb-10 h-[36px] min-w-20 text-[#6C717B] active:text-white hover:font-normal hover:border-b-2 hover:border-solid hover:transition-all active:hover:border-b-2 active:border-solid" type="button">
                            Completed
                        </button>
                        <button className="pb-10 h-[36px] min-w-20 text-[#6C717B] active:text-white hover:font-normal hover:border-b-2 hover:border-solid hover:transition-all active:hover:border-b-2 active:border-solid" type="button">
                            Upcoming
                        </button>
                        <button className="pb-10 h-[36px] min-w-20 text-[#6C717B] active:text-white hover:font-normal hover:border-b-2 hover:border-solid hover:transition-all active:hover:border-b-2 active:border-solid" type="button">
                            Paused
                        </button>
                        
                </div>

                <div className="flex flex-row h-[54px] ml-[16%] sm:ml-0 space-x-6 mt-8 sm:mt-0">
                    <button className="bg-[#7864F4] px-10 py-6 flex flex-row rounded-xl space-x-2 items-center" onClick={handleButtonClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
                    </svg>

                    <h2 className="min-w-20">Add Task</h2>

                    </button>

                    <Add_Task_Popup isVisible={isPopupVisible} onClose={handleClosePopup}/>
        
                    <button className="bg-[#2A2D33] p-2 rounded-xl">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="40" height="40" rx="10" fill="#2A2D33"/>
                    <path d="M14 20H26M11 14H29M17 26H23" stroke="#6C717B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>


                    </button>
                    <button className="bg-[#2A2D33] p-2 rounded-xl">

                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="40" height="40" rx="10" fill="#2A2D33"/>
                    <path d="M29 18H11M24 10V14M16 10V14M15.8 30H24.2C25.8802 30 26.7202 30 27.362 29.673C27.9265 29.3854 28.3854 28.9265 28.673 28.362C29 27.7202 29 26.8802 29 25.2V16.8C29 15.1198 29 14.2798 28.673 13.638C28.3854 13.0735 27.9265 12.6146 27.362 12.327C26.7202 12 25.8802 12 24.2 12H15.8C14.1198 12 13.2798 12 12.638 12.327C12.0735 12.6146 11.6146 13.0735 11.327 13.638C11 14.2798 11 15.1198 11 16.8V25.2C11 26.8802 11 27.7202 11.327 28.362C11.6146 28.9265 12.0735 29.3854 12.638 29.673C13.2798 30 14.1198 30 15.8 30Z" stroke="#6C717B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>


                    </button>
                    <button className="bg-[#2A2D33] p-2 rounded-xl">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="40" height="40" rx="10" fill="#2A2D33"/>
                    <path d="M11 16L23 16M23 16C23 17.6569 24.3431 19 26 19C27.6569 19 29 17.6569 29 16C29 14.3431 27.6569 13 26 13C24.3431 13 23 14.3431 23 16ZM17 24L29 24M17 24C17 25.6569 15.6569 27 14 27C12.3431 27 11 25.6569 11 24C11 22.3431 12.3431 21 14 21C15.6569 21 17 22.3431 17 24Z" stroke="#6C717B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>


                    </button>

                </div>

            </div>
    )
}

export default TaskNavBar;
