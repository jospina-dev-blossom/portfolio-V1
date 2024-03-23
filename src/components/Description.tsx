import { forwardRef } from "react"


export const Description = forwardRef<HTMLDivElement>((_, ref) => {
    return (
        <div className='text-principal-50 pt-14 px-2 sm:px-4' ref={ref}>
            <p className="text-2xl text-principal-0 font-semibold mb-4">
                ABOUT
            </p>
            <p>
                Greetings! I'm Jhon James Ospina Grisales, a mid-senior frontend developer with 3 years of experience in the IT sector. I pride myself on being highly resourceful and proactive, always ready to tackle new challenges head-on.

                In my previous roles, I've had the pleasure of working with esteemed organizations such as Vortexbird and OffBeat.lab. At Vortexbird, I specialized in developing web and mobile applications using Angular and React, adhering to SOLID principles and design patterns to ensure scalable and maintainable code. Additionally, I led the implementation and deployment processes, guaranteeing smooth transitions and error-free application launches. My responsibilities also included layout design, CSS styling, and integrating Java services into the frontend using HTTP protocols.

                During my tenure at OffBeat.lab, I took on the challenge of creating high-quality user experiences and building frontend web applications using Angular, React, and TypeScript. I led efforts to design and migrate efficient databases, improving application performance and speed. Furthermore, I implemented cutting-edge frontend development techniques, such as optimized HTML and CSS practices, to significantly reduce page load times.

                Outside of work, I enjoy a variety of hobbies, including rock climbing, reading, and spending time with my wife and our two cats. I'm also an avid gamer and love exploring virtual worlds in my free time.

                Driven by my passion for technology and continuous learning, I'm always eager to explore new opportunities and contribute to innovative projects in the field of web development.
            </p>
        </div>
    )
})
