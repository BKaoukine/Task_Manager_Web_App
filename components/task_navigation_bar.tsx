

function TaskNavBar(){
    return(
            <div className="flex felx-col h-2 m-8 justify-between text-lg">

                <div className="space-x-10">
                        <button className="pb-10 h-[36px] text-[#6C717B] active:text-white hover:font-normal hover:border-b-2 hover:border-solid hover:transition-all active:hover:border-b-2 active:border-solid" type="button">
                            All Task
                        </button>
                        <button className="pb-10 h-[36px] text-[#6C717B] active:text-white hover:font-normal hover:border-b-2 hover:border-solid hover:transition-all active:hover:border-b-2 active:border-solid" type="button">
                            On Going
                        </button>
                        <button className="pb-10 h-[36px] text-[#6C717B] active:text-white hover:font-normal hover:border-b-2 hover:border-solid hover:transition-all active:hover:border-b-2 active:border-solid" type="button">
                            Completed
                        </button>
                        <button className="pb-10 h-[36px] text-[#6C717B] active:text-white hover:font-normal hover:border-b-2 hover:border-solid hover:transition-all active:hover:border-b-2 active:border-solid" type="button">
                            Upcoming
                        </button>
                        <button className="pb-10 h-[36px] text-[#6C717B] active:text-white hover:font-normal hover:border-b-2 hover:border-solid hover:transition-all active:hover:border-b-2 active:border-solid" type="button">
                            Paused
                        </button>
                        
                </div>

                <div className="flex flex-row h-[54px] space-x-6">
                    <button className="bg-[#7864F4] px-10 py-6 flex flex-row rounded-xl space-x-2 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
                    </svg>

                    <h2>Add Task</h2>

                    </button>
        
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