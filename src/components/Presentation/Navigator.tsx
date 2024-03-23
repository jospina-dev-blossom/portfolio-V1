interface NavigatorProps {
    scrollToAbout: () => void;
    scrollToExperience: () => void;
    scrollToProjects: () => void
}

export const Navigator = ({ scrollToAbout, scrollToExperience, scrollToProjects }: NavigatorProps) => {
    return (
        <div className='flex flex-col items-center lg:items-start w-full mt-10 [@media(max-height:824px)]:mt-6 just'>
            <div className="flex items-center text-principal-50 py-2 group hover:text-principal-0 cursor-pointer" onClick={scrollToAbout}>
                <div className="w-5 bg-principal-50 h-1 mr-2 transition-all duration-300 transform group-hover:w-16 group-hover:bg-white" />
                <p>
                    ABOUT
                </p>
                <div className="block lg:hidden w-5 bg-principal-50 h-1 ml-2 transition-all duration-300 transform group-hover:w-16 group-hover:bg-white" />
            </div>
            <div className="flex items-center text-principal-50 py-2 group hover:text-principal-0 cursor-pointer" onClick={scrollToExperience}>
                <div className="w-5 bg-principal-50 h-1 mr-2 transition-all duration-300 transform group-hover:w-16 group-hover:bg-white" />
                <p >
                    EXPERIENCE
                </p>
                <div className="block lg:hidden w-5 bg-principal-50 h-1 ml-2 transition-all duration-300 transform group-hover:w-16 group-hover:bg-white" />
            </div>

            <div className="flex items-center text-principal-50 py-2 group hover:text-principal-0 cursor-pointer" onClick={scrollToProjects}>
                <div className="w-5 bg-principal-50 h-1 mr-2 transition-all duration-300 transform group-hover:w-16 group-hover:bg-white" />
                <p>
                    PROJECTS
                </p>
                <div className="block lg:hidden w-5 bg-principal-50 h-1 ml-2 transition-all duration-300 transform group-hover:w-16 group-hover:bg-white" />
            </div>
        </div>
    )
}
