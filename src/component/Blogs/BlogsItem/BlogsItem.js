import React from 'react';
import './BlogsItem.css'

const BlogsItem = ({blog}) => {
    return (
        <div className="col-md-6 col-sm-10 col-xl-4">
            <div className="">
                <div className="card m-4 p-3 project-item">
                    <div className="imgBx">
                    <img className="img-fluid" style={{ height: "200px", width: "350" }} src={blog.img} alt="" />
                    </div>
                    
                    <div className="content">
                        <h5 className="card-title">{blog.title}</h5>
                        <p className="card-text">{blog.description}</p>
                        <a href={blog.link} target="_blank">
                            <button className="btn linkButton" id="">Read More</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogsItem;