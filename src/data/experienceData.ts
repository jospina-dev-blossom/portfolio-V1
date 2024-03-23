import { Experience } from '../interfaces/interfaces';

const offBeat = {
    id: 1,
    startedDate: 'June 2021',
    endDate: ' January 2022',
    position: 'Front-end developer - Offbeat.lab',
    description: 'Led the creation of high-quality user experiences and developed front-end web applications using Angular, React, and TypeScript. Designed and migrated efficient databases to enhance application performance. Implemented new front-end development techniques, including optimized HTML and CSS practices, to reduce page load time significantly.',
    tools: ['JavaScript', 'TypeScript', 'HTML & CSS', 'Angular', 'React', 'Bootstrap'],
    link: 'https://www.offbeat-lab.com/'
}

const vortex = {
    id: 2,
    startedDate: 'February 2022',
    endDate: 'Present',
    position: 'Front-end developer - Vortexbird',
    description: 'Developed web and mobile applications using Angular and React for web and React Native for mobile, applying SOLID principles and design patterns for scalability and maintainability. Utilized Tailwind CSS and TypeScript for efficient development. Led implementation and deployment processes, ensuring smooth transitions. Responsible for layout design, CSS styling, and enhancing user experience. Integrated Java services into front end using HTTP protocols.',
    tools: ['JavaScript', 'TypeScript', 'HTML & CSS', 'Angular', 'React', 'React Native', 'Redux',
        'Tailwind', 'Java', 'Springboot'],
    link: 'https://vortexbird.com/'
}


export const experiences: Experience[] = [vortex, offBeat]
