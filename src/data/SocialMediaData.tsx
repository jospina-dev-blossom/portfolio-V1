import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { SocialMedia } from '../interfaces/interfaces';


const github = {
    id: 1,
    link: 'https://github.com/jhonog',
    title: 'GitHub',
    icon: <FaGithub />
}

const instagram = {
    id: 2,
    link: 'https://www.instagram.com/jhonjog_/?igsh=ZWQ4Yzg3Y3V6Mzk1',
    title: 'Instagram',
    icon: <FaInstagram />
}

const linkedIn = {
    id: 3,
    link: 'https://www.linkedin.com/in/jhonjog/',
    title: 'Instagram',
    icon: <FaLinkedin />
}




export const socialMedia: SocialMedia[] = [github, linkedIn, instagram]
