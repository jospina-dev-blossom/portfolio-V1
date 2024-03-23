import { Project } from "../interfaces/interfaces"

const herpropia = {
    id: 1,
    title: 'HerPropia',
    description: 'Our proprietary tool is a sophisticated Angular-based platform tailored specifically for Coomeva users. This innovative platform revolutionizes the process of inviting friends and acquaintances through referrals. Users can seamlessly invite their contacts, track their referrals, and effortlessly claim rewards for successful referrals. With its user-friendly interface and robust functionality, our platform streamlines the entire referral process, enhancing user engagement and satisfaction.',
    img: './herpropia.png',
    tools: ['JavaScript', 'TypeScript', 'HTML & CSS', 'Angular'],
    link: 'https://secure.coomeva.com.co/referidosHpr/home',
    company: 'Vortexbird'
}

const delagente = {
    id: 2,
    title: 'Delagente',
    description: 'Builds and manages Delagente App, a web and mobile platform with user roles: beneficiaries, employees, and administrators. Beneficiaries can view purchase history, make current purchases, and access services from affiliated businesses. Employees and administrators can oversee beneficiary purchases and manage platform businesses efficiently.',
    img: './delagente.png',
    link: 'https://virtual.comfenalcovalle.com.co/delagenteweb/',
    tools: ['JavaScript', 'TypeScript', 'HTML & CSS', 'React', 'React Native', 'Tailwind'],
    company: 'Vortexbird'
}

const alcaldia = {
    id: 3,
    title: 'Alcaldía de Cali',
    description: 'The Alcaldía de Cali project comprises three essential internal web applications: PAA, PGC, and Reparto. These applications streamline project management, budget oversight, and paperwork management for employees within the organization. PAA handles project management, PGC manages budgets, and Reparto simplifies paperwork and requirement management. Together, these applications enhance efficiency and compliance within the Alcaldía de Cali.',
    img: './alcaldia.png',
    link: 'https://www.cali.gov.co/',
    tools: ['JavaScript', 'TypeScript', 'HTML & CSS', 'Angular', 'Tailwind'],
    company: 'Vortexbird'
}

const vangogh = {
    id: 4,
    title: 'Vangogh',
    description: 'Develops and maintains core features of Vangogh, a web platform for hardware retailers. Enables efficient inventory and order management for business owners and administrators. Users can oversee inventory, access product details, and manage orders seamlessly.',
    img: './vangogh.png',
    link: '',
    tools: ['JavaScript', 'TypeScript', 'HTML & CSS', 'Angular', 'Bootstrap'],
    company: 'OffBeat'
}

export const projects: Project[] = [delagente, herpropia, alcaldia, vangogh]
