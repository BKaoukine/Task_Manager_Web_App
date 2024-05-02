function Task() {
    return(
        <div className="flex flex-col p-[16px] bg-[#2A2D32] max-w-64 rounded-[16px] gap-y-3">

            <div className=" flex flex-row gap-x-3">
            <h1 className="max-w-50 font-bold">Create Home screen ERP Website</h1>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="#6C717B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z" stroke="#6C717B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z" stroke="#6C717B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            </div>


            <p className="text-[#6C717B]">Design the Home screen according to the
                 selected concept. Read the requirements
                  in the brief carefully. Pay attention 
                  to style, color and font.</p>
            <ul className="grid grid-cols-3 gap-x-2">
                <li><div className="p-[6px] w-auto h-[25px] px-1.5 py-0.5 bg-violet-500 rounded-[100px] justify-center items-center gap-2.5 inline-flex">
                <div className="text-white font-normal leading-[15px] text-xs">UI Design</div>
                </div></li>
                <li><div className="w-auto h-[25px] px-1.5 py-0.5 bg-violet-500 rounded-[100px] justify-center items-center gap-2.5 inline-flex">
                <div className="p-[6px] text-white font-normal leading-[15px] text-xs">Website</div>
                </div></li>
                
                <li><div className="w-auto h-[25px] px-1.5 py-0.5 bg-[#ED3159] rounded-[100px] justify-center items-center gap-2.5 inline-flex">
                <div className="p-[6px] text-white font-normal leading-[15px] text-xs">High</div>
                </div></li>

            </ul>

            <div className="flex flex-row gap-x-2 items-center">
                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 7.16671H2M10.6667 1.83337V4.50004M5.33333 1.83337V4.50004M5.2 15.1667H10.8C11.9201 15.1667 12.4802 15.1667 12.908 14.9487C13.2843 14.757 13.5903 14.451 13.782 14.0747C14 13.6469 14 13.0868 14 11.9667V6.36671C14 5.2466 14 4.68655 13.782 4.25873C13.5903 3.8824 13.2843 3.57644 12.908 3.38469C12.4802 3.16671 11.9201 3.16671 10.8 3.16671H5.2C4.0799 3.16671 3.51984 3.16671 3.09202 3.38469C2.71569 3.57644 2.40973 3.8824 2.21799 4.25873C2 4.68655 2 5.2466 2 6.36671V11.9667C2 13.0868 2 13.6469 2.21799 14.0747C2.40973 14.451 2.71569 14.757 3.09202 14.9487C3.51984 15.1667 4.0799 15.1667 5.2 15.1667Z" stroke="#6C717B" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <div className="text-[#6C717B]">September 28, 2023</div>
            </div>
            

            <div className=" flex flex-row gap-x-3 items-center">
                <div className="w-full bg-[#353940] rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-[#7864F4] h-2.5 rounded-full w-[45%]"></div>
                </div>

                <div className="p-[6px] text-white font-normal text-xs">45%</div>

            </div>
            

           

        </div>
    )
}

export default Task