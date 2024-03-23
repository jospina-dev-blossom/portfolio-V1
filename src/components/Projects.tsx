import { forwardRef } from 'react'
import { projects } from '../data/projectsData'
import { ProjectCard } from './projects/ProjectCard'
import './styles/cardsAnimation.css';


export const Projects = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div className='w-full pt-20' ref={ref}>
      <p className="pl-4 text-2xl text-principal-0 font-semibold mb-4">
        PROJECTS
      </p>
      <div className='container'>
        {
          projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))
        }
      </div>
    </div>
  )
})
