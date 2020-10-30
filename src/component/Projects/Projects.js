import React, { useState } from 'react';
import Navbar from '../Header/Navbar/Navbar';
import ProjectDetails from './ProjectDetails/ProjectDetails';

const projectData = [
    {
        key: '1',
        name: 'Creative-Agency',
        title: 'Creative-agency website  is fully MARN site',
        img: 'https://i.ibb.co/rcnsX15/creative-agency.png',
        github: 'https://github.com/siddika-portfolio/creative-agency-client-site',
        live: 'https://creative-agency-2a414.web.app/'
    },
    {
        key: '2',
        name: 'Volunteer-Network',
        title: 'Creative-agency website  is fully MARN site',
        img: 'https://i.ibb.co/frkRRCq/volunteer.png',
        github: 'https://github.com/siddika-portfolio/creative-agency-client-site',
        live: 'https://creative-agency-2a414.web.app/'
    },
    {
        key: '3',
        name: 'Travel-Guru',
        title: 'Creative-agency website  is fully MARN site',
        img: 'https://i.ibb.co/pXY8D6J/travel-guru.png',
        github: 'https://github.com/siddika-portfolio/creative-agency-client-site',
        live: 'https://creative-agency-2a414.web.app/'
    },{
        key: '4',
        name: 'Panda E-commerce',
        title: 'Creative-agency website  is fully MARN site',
        img: 'https://i.ibb.co/f4LsmPC/panda.png',
        github: 'https://github.com/siddika-portfolio/creative-agency-client-site',
        live: 'https://creative-agency-2a414.web.app/'
    },
    {
        key: '5',
        name: 'E-school website',
        title: 'E-school is a responsive online learning site',
        img: 'https://i.ibb.co/F5KNycW/e-school.png',
        github: 'https://github.com/siddika-portfolio/creative-agency-client-site',
        live: 'https://creative-agency-2a414.web.app/'
    },
    {
        key: '6',
        name: 'Ema-jhon E-commerce',
        title: 'Creative-agency website  is fully MARN site',
        img: 'https://i.ibb.co/LgG22bt/ema-jhon.png',
        github: 'https://github.com/siddika-portfolio/creative-agency-client-site',
        live: 'https://creative-agency-2a414.web.app/'
    }
]

const Projects = () => {
    const [projects, setProjects] = useState(projectData);


    return (
        <div className="project-div" id="project">
            <Navbar></Navbar>
            <div className="container my-5 pt-5">
                <h2 className="text-center py-4">Projects</h2>
                <div className="row">
                    {
                        projects.map(project => <ProjectDetails project={project}></ProjectDetails>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Projects;