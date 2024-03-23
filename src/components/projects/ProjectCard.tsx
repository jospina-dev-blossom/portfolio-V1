import { LuMoveUpRight } from "react-icons/lu"
import { Project } from "../../interfaces/interfaces"
import { ToolChip } from "../experience/ToolChip"
import './project.css'

interface ProjectCardProps {
    project: Project
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
        <a target={project.link && '_blank'} href={project.link ? project.link : undefined} className='box flex flex-wrap w-full mt-4 cursor-pointer group hover:bg-principal-200 rounded-md p-4 hover:shadow-lg project-card-container'>
            <div className='flex w-1/3 hidden sm:block'>
                <div className="w-4/5 h-1/2 p-0.5 border border-white/25 rounded">
                    <img
                        className="w-full h-full object-cover rounded"
                        src={project.img}
                        alt=""
                    />
                </div>
            </div>
            <div className='flex flex-wrap w-full sm:w-2/3 text-principal-50'>
                <div className='flex items-center'>
                    <span className='w-full font-bold text-principal-0 text-lg title'>{project.title}</span>
                    {
                        project.link &&
                        <LuMoveUpRight className='ml-1 group-hover:text-principal-100 duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 ' />
                    }
                </div>
                <span className='w-full text-principal-50'>
                    {project.company}
                </span>
                <span className='w-full'>{project.description}</span>
                <div className='flex flex-wrap mt-1'>
                    {
                        project.tools.map((tool, index) => (
                            <ToolChip tool={tool} key={index} />
                        ))
                    }
                </div>
            </div>
        </a>
    )
}
