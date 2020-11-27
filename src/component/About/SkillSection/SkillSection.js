import React from 'react';
import htmlImg from '../../../images/HTML.jpg';
import jsImg from '../../../images/JS.jpg';
import bootstrapImg from '../../../images/BOOTSTRAP.jpg';
import reactImg from '../../../images/REACT.jpg';
import reduxImg from '../../../images/REDUX.jpg';
import nodeImg from '../../../images/NOD.jpg';
import mongoImg from '../../../images/MONGODB.jpg';
import expressImg from '../../../images/EXPRESS.jpg';
import scssImg from '../../../images/SASS.jpg';



const SkillSection = () => {
    return (
        <div className="container my-5 py-5">
            <div className="text-center">
                <h2 className="pb-5"> My Skills </h2>
                <div className="skill-icon m-3">
                   <span><img src={htmlImg} alt=""/></span>
                   <span><img src={jsImg} alt=""/></span>
                   <span><img src={bootstrapImg} alt=""/></span>
                   <span><img src={reactImg} alt=""/></span>
                   <span><img src={reduxImg} alt=""/></span>
                   <br/>
                  
                   <span><img src={nodeImg} alt=""/></span>
                   <span><img src={mongoImg} alt=""/></span>
                   <span><img src={expressImg} alt=""/></span>
                   <span><img src={scssImg} alt=""/></span>
                </div>
            </div>

        </div>
    );
};

export default SkillSection;