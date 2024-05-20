
function TopProjectSection()
{
    return(

        <section className="flex sm:flex-col flex-col gap-y-6 justify-center sm:items-start items-center sm:h-20 h-40 border-b-[1px] border-b-[#6C717B] border-opacity-30">
                    
                    <div className="sm:ml-12 lg:ml-6 items-center gap-x-4">
                    <h1 className="text-2xl lg:ml-[40px]">Project 01</h1>
                    </div>

                    <div className="flex flex-row sm:absolute sm:right-0 sm:mr-[40px] justify-center">
                        <input type="text" placeholder="Search" className="bg-[#2A2D33] w-70 sm:w-40 h-[48px] pl-4 rounded-full"/>

                        <svg className="w-[48px] h-[48px] ml-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>

                    </div>
        </section>
    )
}

export default TopProjectSection;