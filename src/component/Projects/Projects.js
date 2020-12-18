import React, { useState } from 'react';
import ProjectDetails from './ProjectDetails/ProjectDetails';
import './Project.css';

const projectData = [
    {
        key: '1',
        name: 'Creative-Agency',
        title: 'A Single page web app with admin’s panel, form where an admin can add a service, add an admin, and update orders status to notify the client about their order’s progress.',
        img: 'https://i.ibb.co/rcnsX15/creative-agency.png',
        client: 'https://github.com/siddika-portfolio/creative-agency-client-site',
        server: 'https://github.com/siddika-portfolio/creative-agency-server-site',
        live: 'https://creative-agency-2a414.web.app/'
    },
    {
        key: '2',
        name: 'Volunteer-Network',
        title: 'User can registration in any volunteer activities. Users registration data will be saved on MongoDB database. Admin can add new services.',
        img: 'https://i.ibb.co/frkRRCq/volunteer.png',
        client: 'https://github.com/siddika-portfolio/volunteer-network-client',
        server: 'https://github.com/siddika-portfolio/volunteer-network-server',
        live: 'https://volunteer-network-client-6b801.web.app/'
    },
    {
        key: '3',
        name: 'Doctors Portal',
        title: 'A single-page web app Used three methods of signing in. Where a user can select a desired destination and book a hotel there.User login this website.',
        img: 'https://i.ibb.co/Q9QpQ3c/doctors-ss.png',
        client: 'https://github.com/siddika-portfolio/doctors-portal-clients',
        server: 'https://github.com/siddika-portfolio/doctors-portal-server',
        live: 'https://doctors-portal-site-e81ca.web.app/'
    },
    {
        key: '4',
        name: 'Travel-Guru',
        title: 'A single-page web app Used three methods of signing in. Where a user can select a desired destination and book a hotel there.User login this website.',
        img: 'https://i.ibb.co/pXY8D6J/travel-guru.png',
        client: 'https://github.com/siddika-portfolio/travel-guru-assignment',
        live: 'https://travel-guru-assignment-92767.web.app/'
    },
    {
        key: '5',
        name: 'Twitter Clone',
        title: 'Twitter clone is responsive website.This site user can login email and password. User can be post tweet added image and his valuable text ',
        img: 'https://i.ibb.co/PjxbsSK/twitter-clone.png',
        client: 'https://github.com/siddika-portfolio/twitter-clone',
        live: 'https://twitter-clone-4519d.web.app/home'
    },
     {
        key: '6',
        name: 'Panda E-commerce',
        title: 'A single page e-commerce site is panda e-commerce website.it is fully responsive bootstrap site.Many product show this website and product price also added',
        img: 'https://i.ibb.co/f4LsmPC/panda.png',
        client: 'https://github.com/siddika-portfolio/panda-commerce',
        live: 'https://siddika-portfolio.github.io/panda-commerce/'
    },
    {
        key: '7',
        name: 'E-school website',
        title: 'E-school is a responsive online learning site. This website contain some online course team member and testimonial.It is modern online school website',
        img: 'https://i.ibb.co/F5KNycW/e-school.png',
        client: 'https://github.com/siddika-portfolio/E-School-website',
        live: 'https://siddika-portfolio.github.io/E-School-website/'
    },
    {
        key: '8',
        name: 'Ema-john E-commerce',
        title: 'A e-commerce website. Authenticated user can see his choose product review. Automated calculation and functionalities are added for the cart. ',
        img: 'https://i.ibb.co/LgG22bt/ema-jhon.png',
        client: 'https://github.com/siddika-portfolio/ema-jhon-simple',
        server: 'https://github.com/siddika-portfolio/ema-jhon-server',
        live: 'https://ema-jhon-simple-818a6.firebaseapp.com/'
    },
    {
        key: '9',
        name: 'Power X-Gym',
        title: 'Power x-Gym a MARN stack website. User can Purchase a Service. Have package facility for users.User can registered with payment id from strip method. ',
        img: 'https://i.ibb.co/KDsSGgF/x-gym.png',
        client: 'https://github.com/nahid9764/power-x-gym-team-work-client-side',
        live: 'https://power-x-gym-ba71d.web.app/'
    },
   
]

const Projects = () => {
    const [projects, setProjects] = useState(projectData);


    return (
        <div className="project-bg py-4">
            <div className="project-div" id="project">
                <div className="container my-5 ">
                    <h2 className="text-center py-4">My Projects</h2>
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