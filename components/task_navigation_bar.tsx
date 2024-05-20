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

        <div className="flex flex-row justify-end">
          <button
            type="submit"
            className="w-18 py-2 px-4 bg-blue-700 hover:bg-blue-800 rounded-lg"
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

export default Add_Task_Popup;
