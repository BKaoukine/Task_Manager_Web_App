

function TaskStatusStats(){
    return(
            <div className="flex felx-col h-2 mt-20 ml-8 space-x-52">

                <div className="items-center gap-3 inline-flex">
                    <svg width="14" height="14" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="6" cy="6" r="6" fill="#3C79D6"/>
                    </svg>
                    <div className="text-white font-normal leading-normal text-lg">On Going</div>

                    <h2 className="text-[#6C717B] font-normal text-lg">4</h2>
                </div>

                <div className="items-center gap-3 inline-flex">
                    <svg width="14" height="14" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="6" cy="6" r="6" fill="#55DD4A"/>
                    </svg>
                    <div className="text-white font-normal leading-normal text-lg">Completed</div>

                    <h2 className="text-[#6C717B] font-normal text-lg">2</h2>
                </div>

                <div className="items-center gap-3 inline-flex">
                    <svg width="14" height="14" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="6" cy="6" r="6" fill="#FFC123"/>
                    </svg>
                    <div className="text-white font-normal leading-normal text-lg">Upcoming</div>

                    <h2 className="text-[#6C717B] font-normal text-lg">3</h2>
                </div>

                <div className="items-center gap-3 inline-flex">
                    <svg width="14" height="14" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="6" cy="6" r="6" fill="#E84040"/>
                    </svg>
                    <div className="text-white font-normal leading-normal text-lg">Paused</div>

                    <h2 className="text-[#6C717B] font-normal text-lg">2</h2>
                </div>
            </div>
    )
}

export default TaskStatusStats;