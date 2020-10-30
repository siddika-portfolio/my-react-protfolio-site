import React from 'react';
import './BlogsItem.css'

const BlogsItem = ({blog}) => {
    return (
        <div className="col-md-6 col-sm-10 col-xl-4">
            <div className="card-deck">
                <div className="card m-4 p-3 blog-card">
                    <img className="img-fluid" style={{ height: "200px", width: "350" }} src={blog.img} alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{blog.name}</h5>
                        <p className="card-text">{blog.title}</p>
                        <a href={blog.link}>
                            <button className="btn" id="readButton">Read More</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogsItem;