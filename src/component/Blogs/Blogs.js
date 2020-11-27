import React, { useState } from 'react';
import BlogsItem from './BlogsItem/BlogsItem';
import './Blog.css'

const blogsData = [
    {
        key: '1',
        title: 'Javascript Some important property',
        img: 'https://i.ibb.co/qkxdTy9/javascript-basic-blog.png',
        link: 'https://siddika-tas28.medium.com/javascript-some-important-property-4bfe3ee16ded',
    },
    {
        key: '2',
        title: 'Getting started 10 ES6 topics',
        img: 'https://i.ibb.co/0D90W6K/block-biniding.png',
        link: 'https://siddika-tas28.medium.com/getting-started-10-es6-topics-2d62e3768e6e',
    },
    {
        key: '3',
        title: 'Beginner for react js some fundamental topics',
        img: 'https://i.ibb.co/RhRFhgn/react.jpg',
        link: 'https://siddika-tas28.medium.com/beginner-for-react-js-some-fundamental-topics-4fe02433ee90',
    },
    {
        key: '4',
        title: 'Javascript some important tricky tips',
        img: 'https://i.ibb.co/sCygPCJ/javascript-blog.png',
        link: 'https://siddika-tas28.medium.com/javascript-some-important-tricky-tips-aec91b303770',
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
                    <div className=" py-5 ">
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