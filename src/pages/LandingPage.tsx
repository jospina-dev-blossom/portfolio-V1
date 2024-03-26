import { RefObject, useRef } from 'react'
import { Description } from '../components/Description'
import { Experience } from '../components/Experience'
import { BasicInformation } from '../components/Presentation/BasicInformation'
import { Navigator } from '../components/Presentation/Navigator'
import { Projects } from '../components/Projects'

export const LandingPage = () => {

    // Referencias a las secciones
    const aboutRef = useRef<HTMLDivElement>(null);
    const experienceRef = useRef<HTMLDivElement>(null);
    const projectsRef = useRef<HTMLDivElement>(null);

    // Función para hacer scroll a una sección
    const scrollToSection = (ref: RefObject<HTMLDivElement>) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className='flex flex-wrap w-full h-screen [@media(max-height:700px)]:h-full'>
            <div className='flex flex-left justify-center w-full p-10 pt-20 lg:pl-24 lg:pr-2 lg:w-1/2 lg:justify-end lg:overflow-hidden'>
                <div className='w-full lg:max-w-xl'>
                    <BasicInformation />
                    <Navigator
                        scrollToAbout={() => scrollToSection(aboutRef)}
                        scrollToExperience={() => scrollToSection(experienceRef)}
                        scrollToProjects={() => scrollToSection(projectsRef)}
                    />
                </div>
            </div>
            <div className='flex flex-col w-full h-full p-10 pb-20 lg:w-1/2 lg:pr-24 lg:pl-2 lg:overflow-y-auto'>
                <div className='w-full lg:max-w-xl'>
                    <Description ref={aboutRef} />
                    <Experience ref={experienceRef} />
                    <Projects ref={projectsRef} />
                </div>
            </div>
        </div>
    )
}
