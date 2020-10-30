import React from 'react';
import './ProjectDetails.css'

const ProjectDetails = ({ project }) => {
  
    return (
        <div className="col-md-6 col-sm-10 col-xl-4">
            <div className="card-deck">
                <div className="card m-4 p-3 project-card">
                    <img className="img-fluid" style={{ height: "auto", width: "350" }} src={project.img} alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{project.name}</h5>
                        <p className="card-text">{project.title}</p>
                        <div className="project-btn">
                        <a href={project.github}>
                            <button className="btn btn-dark mr-3">Git Hub</button>
                        </a>
                        <a href={project.live}>
                            <button className="btn btn-dark">website</button>
                        </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;