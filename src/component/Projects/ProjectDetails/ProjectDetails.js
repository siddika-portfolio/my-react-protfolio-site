import React from 'react';
import './ProjectDetails.css'

const ProjectDetails = ({ project }) => {

    return (
        <div className="col-md-6 col-sm-10 col-xl-4">
            <div className="">
                <div className="m-4 p-3 project-item">
                    <div className="imgBx">
                        <img  src={project.img} alt="" />
                    </div>

                    <div className="content">
                        <h5 className="card-title">{project.name}</h5>
                        <p className="card-text">{project.title}</p>
                        <div className="project-btn">
                            <a href={project.client} target="_blank">
                                <button className="btn linkButton mr-2">Client</button>
                            </a>
                            <a href={project.server} target="_blank">
                                <button className="btn linkButton mr-2" >Server</button>
                            </a>
                            <a href={project.live} target="_blank">
                                <button className="btn linkButton" >website</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>


        </div>

    );
};

export default ProjectDetails;