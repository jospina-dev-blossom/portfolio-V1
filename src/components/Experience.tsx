import { ExperienceCard } from './experience/ExperienceCard'
import { experiences } from '../data/experienceData';
import { forwardRef } from 'react';
import './styles/cardsAnimation.css';

export const Experience = forwardRef<HTMLDivElement>((_, ref) => {

  return (
    <div className='w-full pt-20' ref={ref}>
      <p className="pl-4 text-2xl text-principal-0 font-semibold mb-4">
        EXPERIENCE
      </p>
      <div className='container'>
        {
          experiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))

        }
      </div>
    </div>
  )
})
