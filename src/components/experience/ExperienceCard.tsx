import { Experience } from '../../interfaces/interfaces';
import { ToolChip } from './ToolChip';
import './experience.css'
import { LuMoveUpRight } from 'react-icons/lu';

interface ExperienceProps {
    experience: Experience;
}

export const ExperienceCard = ({ experience }: ExperienceProps) => {
    return (
        <a href={experience.link} target="_blank" rel="noopener noreferrer" className='flex flex-wrap w-full mt-4 cursor-pointer group hover:bg-principal-200 rounded-md p-4 hover:shadow-lg experience-card-container box'>
            <div className='flex flex-wrap w-full mb-1 sm:w-1/3 sm:mb-0 pr-2'>
                <span className='text-principal-50'>
                    {experience.startedDate} - {experience.endDate}
                </span>
            </div>
            <div className='flex flex-wrap w-full sm:w-2/3 text-principal-50'>
                <div className='flex items-center'>
                    <span className='flex sm:w-full w-3/4 font-bold text-principal-0 text-lg title'>{experience.position} </span>
                    <LuMoveUpRight className='ml-1 group-hover:text-principal-100 duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 ' />
                </div>
                <span className='w-full'>{experience.description}</span>

                <div className='flex flex-wrap mt-1'>
                    {
                        experience.tools.map((tool, index) => (
                            <ToolChip tool={tool} key={index} />
                        ))
                    }
                </div>
            </div>
        </a>
    )
}
