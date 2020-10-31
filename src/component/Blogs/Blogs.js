import React, { useState } from 'react';
import Navbar from '../Header/Navbar/Navbar';
import BlogsItem from './BlogsItem/BlogsItem';
import './Blog.css'

const blogsData = [
    {
        key: '1',
        title: 'Core Knowledge About React Router Hooks',
        img: 'https://i.ibb.co/gr1zqHc/blogA.png',
        link: 'https://medium.com/@kumusadia02/react-router-hooks-4da6b21b3430',
    },
    {
        key: '2',
        title: 'Must Learn Interview Questions From HTML & CSS…',
        img: 'https://i.ibb.co/xCV0Psf/blog5.png',
        link: 'https://medium.com/@kumusadia02/21-must-learn-interview-questions-from-html-css-a296e5ba5f9e',
    },
    {
        key: '3',
        title: 'Modern Javascript Information',
        img: 'https://i.ibb.co/HPWMKQ1/blog4.png',
        link: 'https://medium.com/@kumusadia02/modern-javascript-information-99ae9dec2c1d',
    },
    {
        key: '4',
        title: 'Must Learn Interview Questions From HTML & CSS…',
        img: 'https://i.ibb.co/xCV0Psf/blog5.png',
        link: 'https://medium.com/@kumusadia02/modern-javascript-information-99ae9dec2c1d',
    },
    {
        key: '5',
        title: 'Modern Javascript Information',
        img: 'https://i.ibb.co/HPWMKQ1/blog4.png',
        link: 'https://medium.com/@kumusadia02/21-must-learn-interview-questions-from-html-css-a296e5ba5f9e',
    },
    {
        key: '6',
        title: ' FAQ From React Hook',
        img: 'https://i.ibb.co/xgZCR6b/blog1.png',
    },

]

const Blogs = () => {
    const [blogs, setBlogs] = useState(blogsData)
    return (
        <div className="blog-bg">
            <div className="container">
                <div className="project-div" id="project">
                    <Navbar></Navbar>
                    <div className=" my-5 ">
                        <h2 className="text-center py-4">Blogs</h2>
                        <div className="row">
                            {
                                blogs.map(blog => <BlogsItem blog={blog}></BlogsItem>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;