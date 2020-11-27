import React, { useState } from 'react';
import Navbar from '../Header/Navbar/Navbar';
import ProjectDetails from './ProjectDetails/ProjectDetails';
import './Project.css';

const projectData = [
    {
        key: '1',
        name: 'Creative-Agency',
        title: 'A Single page web app with admin’s panel, form where an admin can add a service, add an admin, and update orders status to notify the client about their order’s progress. It is a responsive site.',
        img: 'https://i.ibb.co/rcnsX15/creative-agency.png',
        github: 'https://github.com/siddika-portfolio/creative-agency-client-site',
        live: 'https://creative-agency-2a414.web.app/'
    },
    {
        key: '2',
        name: 'Volunteer-Network',
        title: 'User can registration in any volunteer activities. Users registration data will be saved on MongoDB database. Admin can add new services.',
        img: 'https://i.ibb.co/frkRRCq/volunteer.png',
        github: 'https://github.com/siddika-portfolio/volunteer-network-client',
        live: 'https://volunteer-network-client-6b801.web.app/'
    },
    {
        key: '3',
        name: 'Travel-Guru',
        title: 'A single-page web app Used three methods of signing in. Where a user can select a desired destination and book a hotel there.User login this website.',
        img: 'https://i.ibb.co/pXY8D6J/travel-guru.png',
        github: 'https://github.com/siddika-portfolio/travel-guru-assignment',
        live: 'https://travel-guru-assignment-92767.web.app/'
    }, {
        key: '4',
        name: 'Panda E-commerce',
        title: 'A single page e-commerce site is panda e-commerce website.it is fully responsive bootstrap site.Many product show this website and product price also added',
        img: 'https://i.ibb.co/f4LsmPC/panda.png',
        github: 'https://github.com/siddika-portfolio/panda-commerce',
        live: 'https://siddika-portfolio.github.io/panda-commerce/'
    },
    {
        key: '5',
        name: 'E-school website',
        title: 'E-school is a responsive online learning site. This website contain some online course team member and testimonial.It is modern online school website',
        img: 'https://i.ibb.co/F5KNycW/e-school.png',
        github: 'https://github.com/siddika-portfolio/E-School-website',
        live: 'https://siddika-portfolio.github.io/E-School-website/'
    },
    {
        key: '6',
        name: 'Ema-jhon E-commerce',
        title: 'A e-commerce website. Authenticated user can see his choose product review. Automated calculation and functionalities are added for the cart. ',
        img: 'https://i.ibb.co/LgG22bt/ema-jhon.png',
        github: 'https://github.com/siddika-portfolio/ema-jhon-simple',
        live: 'https://ema-jhon-simple-818a6.firebaseapp.com/'
    },
    {
        key: '7',
        name: 'Power X-Gym',
        title: 'Power x-Gym a MARN stack website. User can Purchase a Service. Have package facility for users.User can registered with payment id from strip method. ',
        img: 'https://i.ibb.co/KDsSGgF/x-gym.png',
        github: 'https://github.com/nahid9764/power-x-gym-team-work-client-side',
        live: 'https://power-x-gym-ba71d.web.app/'
    },
    {
        key: '8',
        name: 'Athena website',
        title: 'A e-commerce website. Authenticated user can see his choose product review. Automated calculation and functionalities are added for the cart. ',
        img: 'https://i.ibb.co/fnz6CFF/athena-website-pic.png',
        github: 'https://github.com/nahid9764/athena-design-team-work',
        live: 'https://determined-poitras-a9005f.netlify.app/'
    }
]

const Projects = () => {
    const [projects, setProjects] = useState(projectData);


    return (
        <div className="project-bg py-4">
            <div className="project-div" id="project">
                {/* <Navbar></Navbar> */}
                <div className="container my-5 ">
                    <h2 className="text-center py-4">Projects</h2>
                    <div className="row">
                        {
                            projects.map(project => <ProjectDetails project={project}></ProjectDetails>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;